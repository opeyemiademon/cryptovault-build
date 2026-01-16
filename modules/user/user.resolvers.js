import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from './user.model.js';
import Transaction from '../transaction/transaction.model.js';
import { TOKEN_SECRET, TOKEN_EXPIRY } from '../../utils/constants.js';
import { findUserById } from './user.service.js';
const userResolvers = {
    Query: {
        getAllUsers: async (_, __, context) => {
            return await User.find({ isDeleted: false, role: 'user' }).select('-password');
        },
        getUser: async (_, { id }, context) => {
            return await findUserById(id);
        },
        getUserByEmail: async (_, { email }, context) => {
            return await User.findOne({ email }).select('-password');
        },
        me: async (_, __, context) => {
            return await findUserById(context.user?.id);
        },
        getAdminDashboardStats: async (_, __, context) => {
            const [totalUsers, portfolioAgg, walletAgg, pendingDeposits, pendingWithdrawals] = await Promise.all([
                User.countDocuments({ isDeleted: false, role: 'user' }),
                User.aggregate([
                    { $match: { isDeleted: false, role: 'user' } },
                    { $group: { _id: null, total: { $sum: { $ifNull: ['$portfolioValue', 0] } } } },
                ]),
                User.aggregate([
                    { $match: { isDeleted: false, role: 'user' } },
                    { $group: { _id: null, total: { $sum: { $ifNull: ['$walletBalance', 0] } } } },
                ]),
                Transaction.countDocuments({ type: 'deposit', status: 'pending' }),
                Transaction.countDocuments({ type: 'withdrawal', status: 'pending' }),
            ]);
            return {
                totalUsers,
                totalPortfolioValue: portfolioAgg[0]?.total || 0,
                totalWalletBalance: walletAgg[0]?.total || 0,
                pendingDeposits,
                pendingWithdrawals,
            };
        },
    },
    Mutation: {
        register: async (_, { data }) => {
            const { name, email, password } = data;
            const existingUser = await User.findOne({ email });
            if (existingUser) {
                throw new Error('User with this email already exists');
            }
            const hashedPassword = await bcrypt.hash(password, 10);
            const user = await User.create({
                name,
                email,
                password: hashedPassword,
                role: 'user',
            });
            const token = jwt.sign({ id: user._id }, TOKEN_SECRET, { expiresIn: TOKEN_EXPIRY });
            return {
                token,
                user: {
                    id: user._id,
                    name: user.name
                },
            };
        },
        create_account: async (_, { data }) => {
            const { name, email, password, role } = data;
            const existingUser = await User.findOne({ email });
            if (existingUser) {
                throw new Error('User with this email already exists');
            }
            const hashedPassword = await bcrypt.hash(password, 10);
            const user = await User.create({
                name,
                email,
                password: hashedPassword,
                role: role || 'user',
            });
            const token = jwt.sign({ id: user._id }, TOKEN_SECRET, { expiresIn: TOKEN_EXPIRY });
            return {
                token,
                user: {
                    id: user._id,
                    name: user.name,
                },
            };
        },
        login: async (_, { data }) => {
            const { email, password } = data;
            const user = await User.findOne({ email });
            if (!user) {
                throw new Error('Invalid email or password');
            }
            const isValidPassword = await bcrypt.compare(password, user.password);
            if (!isValidPassword) {
                throw new Error('Invalid email or password');
            }
            if (!user.isActive) {
                throw new Error('Your account has been deactivated');
            }
            const token = jwt.sign({ id: user._id }, TOKEN_SECRET, { expiresIn: TOKEN_EXPIRY });
            return {
                token,
                user: {
                    id: user._id,
                    name: user.name
                },
            };
        },
        updateUser: async (_, { id, data }, context) => {
            const user = await User.findByIdAndUpdate(id, data, { new: true }).select('-password');
            if (!user) {
                throw new Error('User not found');
            }
            return {
                success: true,
                message: 'User updated successfully',
                data: user,
            };
        },
        changeUserPassword: async (_, { id, currentPassword, newPassword }, context) => {
            if (!newPassword || newPassword.length < 8) {
                throw new Error('New password must be at least 8 characters long');
            }
            const user = await User.findById(id);
            if (!user) {
                throw new Error('User not found');
            }
            const isCurrentPasswordValid = await bcrypt.compare(currentPassword, user.password);
            if (!isCurrentPasswordValid) {
                throw new Error('Current password is incorrect');
            }
            user.password = await bcrypt.hash(newPassword, 10);
            await user.save();
            return {
                success: true,
                message: 'Password updated successfully',
                data: null,
            };
        },
        deleteUser: async (_, { id }, context) => {
            const user = await User.findByIdAndUpdate(id, { isDeleted: true });
            if (!user) {
                throw new Error('User not found');
            }
            return {
                success: true,
                message: 'User deleted successfully',
                data: null,
            };
        },
        creditUserWallet: async (_, { userId, amount }, context) => {
            if (amount <= 0) {
                return {
                    success: false,
                    message: `Amount must be greater than 0`,
                    data: null,
                };
            }
            const user = await User.findById(userId);
            if (!user) {
                return {
                    success: false,
                    message: `User not found`,
                    data: null,
                };
            }
            user.walletBalance += amount;
            await user.save();
            await Transaction.create({
                userId: user._id,
                type: 'deposit',
                amount,
                status: 'completed',
                processedBy: context?.user?.id,
                processedAt: new Date(),
                notes: 'Admin wallet credit',
            });
            return {
                success: true,
                message: `Successfully credited $${amount} to user wallet`,
                data: user,
            };
        },
        debitUserWallet: async (_, { userId, amount }, context) => {
            if (amount <= 0) {
                return {
                    success: false,
                    message: `Amount must be greater than 0`,
                    data: null,
                };
            }
            const user = await User.findById(userId);
            if (!user) {
                return {
                    success: false,
                    message: `User not found`,
                    data: null,
                };
            }
            if (user.walletBalance < amount) {
                return {
                    success: false,
                    message: `Insufficient wallet balance`,
                    data: null,
                };
            }
            user.walletBalance -= amount;
            await user.save();
            await Transaction.create({
                userId: user._id,
                type: 'withdrawal',
                amount,
                status: 'completed',
                processedBy: context?.user?.id,
                processedAt: new Date(),
                notes: 'Admin wallet debit',
            });
            return {
                success: true,
                message: `Successfully debited $${amount} from user wallet`,
                data: user,
            };
        },
    },
};
export default userResolvers;
//# sourceMappingURL=user.resolvers.js.map