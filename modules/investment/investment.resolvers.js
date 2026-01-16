import Investment from './investment.model.js';
import InvestmentHistory from './investmentHistory.model.js';
import User from '../user/user.model.js';
import Coin from '../coin/coin.model.js';
import Transaction from '../transaction/transaction.model.js';
const investmentResolvers = {
    Query: {
        getAllInvestments: async (_, __, context) => {
            return await Investment.find().populate('userId').populate('coinId').sort({ createdAt: -1 });
        },
        getInvestment: async (_, { id }, context) => {
            return await Investment.findById(id).populate('userId').populate('coinId');
        },
        getUserInvestments: async (_, { userId }, context) => {
            return await Investment.find({ userId }).populate('coinId').sort({ createdAt: -1 });
        },
        getUserInvestmentByCoin: async (_, { userId, coinId }, context) => {
            return await Investment.findOne({ userId, coinId }).populate('coinId');
        },
        getInvestmentHistory: async (_, { userId, coinId }, context) => {
            const filter = { userId };
            if (coinId) {
                filter.coinId = coinId;
            }
            return await InvestmentHistory.find(filter)
                .populate('coinId')
                .populate('performedBy', 'name email')
                .sort({ createdAt: -1 });
        },
        getCoinPerformanceData: async (_, { userId, days = 7 }, context) => {
            const startDate = new Date();
            startDate.setDate(startDate.getDate() - days);
            const history = await InvestmentHistory.find({
                userId,
                createdAt: { $gte: startDate },
            })
                .populate('coinId')
                .sort({ createdAt: 1 });
            const dateMap = new Map();
            history.forEach((record) => {
                const dateStr = new Date(record.createdAt).toISOString().split('T')[0];
                const coinDocument = record.coinId || record.coin;
                const coinSymbol = coinDocument?.symbol || 'UNKNOWN';
                const coinName = coinDocument?.name || coinSymbol;
                if (!dateMap.has(dateStr)) {
                    dateMap.set(dateStr, new Map());
                }
                const coinMap = dateMap.get(dateStr);
                const currentEntry = coinMap.get(coinSymbol) || {
                    coinName,
                    coinAmount: 0,
                };
                if (record.action === 'add' || record.action === 'buy') {
                    currentEntry.coinAmount += record.coinAmount || 0;
                }
                else if (record.action === 'reduce' || record.action === 'sell') {
                    currentEntry.coinAmount = Math.max(0, currentEntry.coinAmount - (record.coinAmount || 0));
                }
                coinMap.set(coinSymbol, currentEntry);
            });
            const performanceData = Array.from(dateMap.entries()).map(([date, coinMap]) => ({
                date,
                coins: Array.from(coinMap.entries()).map(([coinSymbol, data]) => ({
                    coinSymbol,
                    coinName: data.coinName,
                    coinAmount: data.coinAmount,
                })),
            }));
            return performanceData;
        },
    },
    Investment: {
        user: async (parent) => {
            return await User.findById(parent.userId).select('-password');
        },
        coin: async (parent) => {
            return await Coin.findById(parent.coinId);
        },
    },
    InvestmentHistory: {
        user: async (parent) => {
            return await User.findById(parent.userId).select('-password');
        },
        coin: async (parent) => {
            return await Coin.findById(parent.coinId);
        },
        performedByUser: async (parent) => {
            if (!parent.performedBy)
                return null;
            return await User.findById(parent.performedBy).select('-password');
        },
    },
    Mutation: {
        buyInvestment: async (_, { data }, context) => {
            const { userId, coinId, amount, notes } = data;
            if (!userId || !coinId) {
                throw new Error('userId and coinId are required');
            }
            if (amount <= 0) {
                throw new Error('Amount must be greater than zero');
            }
            const user = await User.findById(userId);
            if (!user) {
                throw new Error('User not found');
            }
            if ((user.walletBalance || 0) < amount) {
                throw new Error('Insufficient wallet balance');
            }
            const coin = await Coin.findById(coinId);
            if (!coin) {
                throw new Error('Coin not found');
            }
            const coinAmount = amount / coin.currentPrice;
            user.walletBalance = Math.max(0, (user.walletBalance || 0) - amount);
            user.portfolioValue = (user.portfolioValue || 0) + amount;
            await user.save();
            const transaction = await Transaction.create({
                userId,
                type: 'buy',
                coinId,
                amount,
                coinAmount,
                status: 'completed',
                notes,
            });
            let investment = await Investment.findOne({ userId, coinId });
            if (investment) {
                investment.coinAmount += coinAmount;
                investment.investedAmount += amount;
                investment.currentValue = investment.coinAmount / coin.currentPrice;
                investment.profitLoss = investment.currentValue - investment.investedAmount;
                investment.profitLossPercentage =
                    investment.investedAmount > 0 ? (investment.profitLoss / investment.investedAmount) * 100 : 0;
                await investment.save();
            }
            else {
                investment = await Investment.create({
                    userId,
                    coinId,
                    coinAmount,
                    investedAmount: amount,
                    currentValue: amount,
                    profitLoss: 0,
                    profitLossPercentage: 0,
                });
            }
            await InvestmentHistory.create({
                userId,
                coinId,
                investmentId: investment._id,
                action: 'buy',
                coinAmount,
                usdAmount: amount,
                coinPrice: coin.currentPrice,
                notes,
            });
            return {
                success: true,
                message: 'Investment purchase completed successfully',
            };
        },
        createInvestment: async (_, { data }, context) => {
            const existingInvestment = await Investment.findOne({
                userId: data.userId,
                coinId: data.coinId
            });
            if (existingInvestment) {
                throw new Error('Investment already exists for this coin. Use addToInvestment instead.');
            }
            const investment = await Investment.create({
                ...data,
                currentValue: data.investedAmount,
                profitLoss: 0,
                profitLossPercentage: 0,
            });
            return {
                success: true,
                message: 'Investment created successfully',
                data: investment,
            };
        },
        updateInvestment: async (_, { id, data }, context) => {
            const investment = await Investment.findByIdAndUpdate(id, data, { new: true });
            if (!investment) {
                throw new Error('Investment not found');
            }
            return {
                success: true,
                message: 'Investment updated successfully',
                data: investment,
            };
        },
        addToInvestment: async (_, { userId, coinId, amount }, context) => {
            if (amount <= 0) {
                throw new Error('Amount must be greater than 0');
            }
            const coin = await Coin.findById(coinId);
            if (!coin) {
                throw new Error('Coin not found');
            }
            const coinAmount = amount / coin.currentPrice;
            let investment = await Investment.findOne({ userId, coinId });
            if (investment) {
                investment.coinAmount += coinAmount;
                investment.investedAmount += amount;
                investment.currentValue = investment.coinAmount * coin.currentPrice;
                investment.profitLoss = investment.currentValue - investment.investedAmount;
                investment.profitLossPercentage = (investment.profitLoss / investment.investedAmount) * 100;
                await investment.save();
            }
            else {
                investment = await Investment.create({
                    userId,
                    coinId,
                    coinAmount,
                    investedAmount: amount,
                    currentValue: amount,
                    profitLoss: 0,
                    profitLossPercentage: 0,
                });
            }
            const user = await User.findById(userId);
            if (user) {
                user.portfolioValue += amount;
                await user.save();
            }
            return {
                success: true,
                message: `Successfully added $${amount} to investment`,
                data: investment,
            };
        },
        reduceInvestment: async (_, { userId, coinId, amount }, context) => {
            if (amount <= 0) {
                throw new Error('Amount must be greater than 0');
            }
            const investment = await Investment.findOne({ userId, coinId });
            if (!investment) {
                throw new Error('Investment not found');
            }
            const coin = await Coin.findById(coinId);
            if (!coin) {
                throw new Error('Coin not found');
            }
            const coinAmountToReduce = amount / coin.currentPrice;
            if (investment.coinAmount < coinAmountToReduce) {
                throw new Error('Insufficient coin amount in investment');
            }
            investment.coinAmount -= coinAmountToReduce;
            investment.investedAmount -= amount;
            if (investment.coinAmount <= 0 || investment.investedAmount <= 0) {
                await Investment.findByIdAndDelete(investment._id);
                const user = await User.findById(userId);
                if (user) {
                    user.portfolioValue = Math.max(0, user.portfolioValue - amount);
                    await user.save();
                }
                return {
                    success: true,
                    message: 'Investment removed completely',
                    data: null,
                };
            }
            investment.currentValue = investment.coinAmount * coin.currentPrice;
            investment.profitLoss = investment.currentValue - investment.investedAmount;
            investment.profitLossPercentage = (investment.profitLoss / investment.investedAmount) * 100;
            await investment.save();
            const user = await User.findById(userId);
            if (user) {
                user.portfolioValue = Math.max(0, user.portfolioValue - amount);
                await user.save();
            }
            return {
                success: true,
                message: `Successfully reduced $${amount} from investment`,
                data: investment,
            };
        },
        deleteInvestment: async (_, { id }, context) => {
            const investment = await Investment.findByIdAndDelete(id);
            if (!investment) {
                throw new Error('Investment not found');
            }
            return {
                success: true,
                message: 'Investment deleted successfully',
                data: null,
            };
        },
        adminAddInvestment: async (_, { data }, context) => {
            const { userId, coinId, coinAmount, notes } = data;
            if (coinAmount <= 0) {
                throw new Error('Coin amount must be greater than 0');
            }
            const coin = await Coin.findById(coinId);
            if (!coin) {
                throw new Error('Coin not found');
            }
            let investment = await Investment.findOne({ userId, coinId });
            if (investment) {
                investment.coinAmount += coinAmount;
            }
            else {
                investment = await Investment.create({
                    userId,
                    coinId,
                    coinAmount,
                    investedAmount: coinAmount,
                    currentValue: 0,
                    profitLoss: 0,
                    profitLossPercentage: 0,
                });
            }
            investment.currentValue = investment.coinAmount * coin.currentPrice;
            investment.profitLoss = investment.currentValue - investment.investedAmount;
            investment.profitLossPercentage = investment.investedAmount > 0 ? (investment.profitLoss / investment.investedAmount) * 100 : 0;
            await investment.save();
            await InvestmentHistory.create({
                userId,
                coinId,
                investmentId: investment._id,
                action: 'add',
                coinAmount,
                usdAmount: coinAmount,
                coinPrice: coin.currentPrice,
                performedBy: context?.user?.id,
                notes,
            });
            const user = await User.findById(userId);
            if (user) {
                user.portfolioValue = (user.portfolioValue || 0) + coinAmount;
                await user.save();
            }
            return {
                success: true,
                message: `Successfully added ${coinAmount} ${coin.symbol} to investment`,
                data: investment,
            };
        },
        adminReduceInvestment: async (_, { data }, context) => {
            const { userId, coinId, coinAmount, notes } = data;
            if (coinAmount <= 0)
                throw new Error('Coin amount must be greater than 0');
            const investment = await Investment.findOne({ userId, coinId });
            if (!investment)
                throw new Error('Investment not found');
            if (investment.coinAmount < coinAmount)
                throw new Error('Insufficient coin amount in investment');
            const coin = await Coin.findById(coinId);
            if (!coin)
                throw new Error('Coin not found');
            investment.coinAmount -= coinAmount;
            if (investment.coinAmount <= 0) {
                await InvestmentHistory.create({
                    userId,
                    coinId,
                    investmentId: investment._id,
                    action: 'reduce',
                    coinAmount,
                    usdAmount: coinAmount,
                    coinPrice: coin.currentPrice,
                    performedBy: context?.user?.id,
                    notes,
                });
                await Investment.findByIdAndDelete(investment._id);
                const user = await User.findById(userId);
                if (user) {
                    user.portfolioValue = Math.max(0, (user.portfolioValue || 0) - coinAmount);
                    await user.save();
                }
                return {
                    success: true,
                    message: 'Investment removed completely',
                    data: null,
                };
            }
            investment.currentValue = investment.coinAmount * coin.currentPrice;
            investment.profitLoss = investment.currentValue - investment.investedAmount;
            investment.profitLossPercentage = investment.investedAmount > 0 ? (investment.profitLoss / investment.investedAmount) * 100 : 0;
            await investment.save();
            await InvestmentHistory.create({
                userId,
                coinId,
                investmentId: investment._id,
                action: 'reduce',
                coinAmount,
                usdAmount: coinAmount,
                coinPrice: coin.currentPrice,
                performedBy: context?.user?.id,
                notes,
            });
            const user = await User.findById(userId);
            if (user) {
                user.portfolioValue = Math.max(0, (user.portfolioValue || 0) - coinAmount);
                await user.save();
            }
            return {
                success: true,
                message: `Successfully reduced ${coinAmount} ${coin.symbol} from investment`,
                data: investment,
            };
        },
    },
};
export default investmentResolvers;
//# sourceMappingURL=investment.resolvers.js.map