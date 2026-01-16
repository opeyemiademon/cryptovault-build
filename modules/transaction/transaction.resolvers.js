import Transaction from './transaction.model.js';
import User from '../user/user.model.js';
import Coin from '../coin/coin.model.js';
import Investment from '../investment/investment.model.js';
const createTransactionRecord = async (data) => {
    return await Transaction.create(data);
};
const transactionResolvers = {
    Query: {
        getAllTransactions: async (_, __, context) => {
            return await Transaction.find().populate('userId').populate('coinId').sort({ createdAt: -1 });
        },
        getTransaction: async (_, { id }, context) => {
            return await Transaction.findById(id).populate('userId').populate('coinId');
        },
        getUserTransactions: async (_, { userId }, context) => {
            return await Transaction.find({ userId }).populate('coinId').sort({ createdAt: -1 });
        },
        getUserDepositRequests: async (_, { userId }, context) => {
            return await Transaction.find({ userId, type: 'deposit' }).sort({ createdAt: -1 });
        },
        getTransactionsByType: async (_, { type }, context) => {
            return await Transaction.find({ type }).populate('userId').populate('coinId').sort({ createdAt: -1 });
        },
        getTransactionsByStatus: async (_, { status }, context) => {
            return await Transaction.find({ status }).populate('userId').populate('coinId').sort({ createdAt: -1 });
        },
        getPendingDeposits: async (_, __, context) => {
            return await Transaction.find({ type: 'deposit', status: 'pending' }).populate('userId').sort({ createdAt: -1 });
        },
        getPendingWithdrawals: async (_, __, context) => {
            return await Transaction.find({ type: 'withdrawal', status: 'pending' }).populate('userId').sort({ createdAt: -1 });
        },
    },
    Transaction: {
        user: async (parent) => {
            return await User.findById(parent.userId).select('-password');
        },
        coin: async (parent) => {
            if (!parent.coinId)
                return null;
            return await Coin.findById(parent.coinId);
        },
    },
    Mutation: {
        createTransaction: async (_, { data }, context) => {
            const transaction = await createTransactionRecord(data);
            return {
                success: true,
                message: 'Transaction created successfully',
                data: transaction,
            };
        },
        submitDepositRequest: async (_, { data }, context) => {
            const { userId, amount, walletAddress, notes } = data;
            if (!userId) {
                throw new Error('User ID is required');
            }
            if (amount <= 0) {
                throw new Error('Amount must be greater than zero');
            }
            const transaction = await createTransactionRecord({
                userId,
                type: 'deposit',
                amount,
                walletAddress,
                notes,
                status: 'pending',
            });
            return {
                success: true,
                message: 'Deposit request submitted successfully',
                data: transaction,
            };
        },
        submitWithdrawalRequest: async (_, { data, }, context) => {
            const { userId, withdrawSource, amount, coinId, coinAmount, bankName, accountNumber, shortCode, notes } = data;
            if (!userId) {
                throw new Error('User ID is required');
            }
            if (!withdrawSource || !['wallet', 'portfolio'].includes(withdrawSource)) {
                throw new Error('Invalid withdrawal source selected');
            }
            if (amount <= 0) {
                throw new Error('Amount must be greater than zero');
            }
            const user = await User.findById(userId);
            if (!user) {
                throw new Error('User not found');
            }
            let resolvedCoinId = coinId;
            let resolvedCoinAmount = coinAmount;
            if (withdrawSource === 'wallet') {
                if ((user.walletBalance || 0) < amount) {
                    throw new Error('Insufficient wallet balance');
                }
                if (!bankName || !accountNumber || !shortCode) {
                    throw new Error('Bank details are required for wallet withdrawals');
                }
            }
            else if (withdrawSource === 'portfolio') {
                if (!coinId) {
                    throw new Error('Coin is required when withdrawing from portfolio');
                }
                const investment = await Investment.findOne({ userId, coinId }).populate('coinId');
                if (!investment) {
                    throw new Error('Investment not found for the selected coin');
                }
                const coin = await Coin.findById(coinId);
                if (!coin) {
                    throw new Error('Coin not found');
                }
                const availableValue = investment.currentValue ?? investment.coinAmount * (coin.currentPrice || 0);
                if (amount > availableValue) {
                    throw new Error('Withdrawal amount exceeds available coin balance');
                }
                resolvedCoinAmount = coinAmount || amount / (coin.currentPrice || 1);
                resolvedCoinId = coinId;
            }
            const transaction = await createTransactionRecord({
                userId,
                type: 'withdrawal',
                withdrawSource,
                amount,
                coinId: resolvedCoinId,
                coinAmount: withdrawSource === 'portfolio' ? resolvedCoinAmount : undefined,
                bankName: withdrawSource === 'wallet' ? bankName : undefined,
                accountNumber: withdrawSource === 'wallet' ? accountNumber : undefined,
                shortCode: withdrawSource === 'wallet' ? shortCode : undefined,
                status: 'pending',
                notes,
            });
            return {
                success: true,
                message: 'Withdrawal request submitted successfully',
                data: transaction,
            };
        },
        updateTransaction: async (_, { id, data }, context) => {
            const transaction = await Transaction.findByIdAndUpdate(id, data, { new: true });
            if (!transaction) {
                throw new Error('Transaction not found');
            }
            return {
                success: true,
                message: 'Transaction updated successfully',
                data: transaction,
            };
        },
        approveTransaction: async (_, { id }, context) => {
            const transaction = await Transaction.findById(id);
            if (!transaction) {
                throw new Error('Transaction not found');
            }
            if (transaction.status !== 'pending') {
                throw new Error('Only pending transactions can be approved');
            }
            transaction.status = 'completed';
            transaction.processedBy = context.user?.id;
            transaction.processedAt = new Date();
            await transaction.save();
            if (transaction.type === 'deposit') {
                const user = await User.findById(transaction.userId);
                if (user) {
                    user.walletBalance = (user.walletBalance || 0) + transaction.amount;
                    await user.save();
                }
            }
            else if (transaction.type === 'withdrawal') {
                const user = await User.findById(transaction.userId);
                if (!user) {
                    throw new Error('User not found for withdrawal transaction');
                }
                if (transaction.withdrawSource === 'wallet') {
                    if ((user.walletBalance || 0) < transaction.amount) {
                        throw new Error('Insufficient wallet balance to approve withdrawal');
                    }
                    user.walletBalance = Math.max(0, (user.walletBalance || 0) - transaction.amount);
                    await user.save();
                }
                else if (transaction.withdrawSource === 'portfolio') {
                    if (!transaction.coinId) {
                        throw new Error('Portfolio withdrawal missing coin reference');
                    }
                    const investment = await Investment.findOne({ userId: transaction.userId, coinId: transaction.coinId });
                    if (!investment) {
                        throw new Error('Investment not found for the selected coin');
                    }
                    const coin = await Coin.findById(transaction.coinId);
                    const coinPrice = coin?.currentPrice ||
                        (investment.coinAmount > 0 ? investment.currentValue / investment.coinAmount : 0);
                    let remainingUsd = transaction.amount;
                    const availableCoinAmount = investment.coinAmount || 0;
                    const requestedCoinAmount = transaction.coinAmount && transaction.coinAmount > 0 ? transaction.coinAmount : 0;
                    const coinAmountToDeduct = Math.min(availableCoinAmount, requestedCoinAmount > 0 ? requestedCoinAmount : remainingUsd);
                    if (coinAmountToDeduct > 0) {
                        remainingUsd = Math.max(0, remainingUsd - coinAmountToDeduct);
                    }
                    investment.coinAmount = Math.max(0, availableCoinAmount - coinAmountToDeduct);
                    if (remainingUsd > 0) {
                        if (!investment.investedAmount || investment.investedAmount <= 0) {
                            throw new Error('Withdrawal amount exceeds invested balance');
                        }
                        const investedAmountToDeduct = Math.min(remainingUsd, investment.investedAmount);
                        investment.investedAmount = Math.max(0, investment.investedAmount - investedAmountToDeduct);
                        remainingUsd = Math.max(0, remainingUsd - investedAmountToDeduct);
                    }
                    if (remainingUsd > 0) {
                        throw new Error('Withdrawal amount exceeds investment balances');
                    }
                    investment.currentValue = investment.coinAmount * coinPrice;
                    investment.profitLoss = investment.currentValue - investment.investedAmount;
                    investment.profitLossPercentage =
                        investment.investedAmount > 0 ? (investment.profitLoss / investment.investedAmount) * 100 : 0;
                    if (investment.coinAmount <= 0 && investment.investedAmount <= 0) {
                        await Investment.findByIdAndDelete(investment._id);
                    }
                    else {
                        await investment.save();
                    }
                    user.portfolioValue = Math.max(0, (user.portfolioValue || 0) - transaction.amount);
                    user.walletBalance = (user.walletBalance || 0) + transaction.amount;
                    await user.save();
                }
            }
            return {
                success: true,
                message: 'Transaction approved successfully',
                data: transaction,
            };
        },
        rejectTransaction: async (_, { id, reason }, context) => {
            const transaction = await Transaction.findById(id);
            if (!transaction) {
                throw new Error('Transaction not found');
            }
            if (transaction.status !== 'pending') {
                throw new Error('Only pending transactions can be rejected');
            }
            transaction.status = 'rejected';
            transaction.notes = reason || transaction.notes;
            transaction.processedBy = context.user?.id;
            transaction.processedAt = new Date();
            await transaction.save();
            return {
                success: true,
                message: 'Transaction rejected successfully',
                data: transaction,
            };
        },
        deleteTransaction: async (_, { id }, context) => {
            const transaction = await Transaction.findByIdAndDelete(id);
            if (!transaction) {
                throw new Error('Transaction not found');
            }
            return {
                success: true,
                message: 'Transaction deleted successfully',
                data: null,
            };
        },
    },
};
export default transactionResolvers;
//# sourceMappingURL=transaction.resolvers.js.map