import { AuthContext } from '../../middleware/auth.js';
declare const userResolvers: {
    Query: {
        getAllUsers: (_: any, __: any, context: AuthContext) => Promise<(import("mongoose").Document<unknown, {}, {
            name: string;
            email: string;
            password: string;
            role: "user" | "admin";
            walletBalance: number;
            portfolioValue: number;
            isEmailVerified: boolean;
            isActive: boolean;
            isDeleted: boolean;
            resetPasswordToken?: string | null | undefined;
            resetPasswordExpires?: NativeDate | null | undefined;
        } & import("mongoose").DefaultTimestampProps, {}, {
            timestamps: true;
        }> & {
            name: string;
            email: string;
            password: string;
            role: "user" | "admin";
            walletBalance: number;
            portfolioValue: number;
            isEmailVerified: boolean;
            isActive: boolean;
            isDeleted: boolean;
            resetPasswordToken?: string | null | undefined;
            resetPasswordExpires?: NativeDate | null | undefined;
        } & import("mongoose").DefaultTimestampProps & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        })[]>;
        getUser: (_: any, { id }: {
            id: string;
        }, context: AuthContext) => Promise<import("mongoose").Document<unknown, {}, {
            name: string;
            email: string;
            password: string;
            role: "user" | "admin";
            walletBalance: number;
            portfolioValue: number;
            isEmailVerified: boolean;
            isActive: boolean;
            isDeleted: boolean;
            resetPasswordToken?: string | null | undefined;
            resetPasswordExpires?: NativeDate | null | undefined;
        } & import("mongoose").DefaultTimestampProps, {}, {
            timestamps: true;
        }> & {
            name: string;
            email: string;
            password: string;
            role: "user" | "admin";
            walletBalance: number;
            portfolioValue: number;
            isEmailVerified: boolean;
            isActive: boolean;
            isDeleted: boolean;
            resetPasswordToken?: string | null | undefined;
            resetPasswordExpires?: NativeDate | null | undefined;
        } & import("mongoose").DefaultTimestampProps & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        }>;
        getUserByEmail: (_: any, { email }: {
            email: string;
        }, context: AuthContext) => Promise<(import("mongoose").Document<unknown, {}, {
            name: string;
            email: string;
            password: string;
            role: "user" | "admin";
            walletBalance: number;
            portfolioValue: number;
            isEmailVerified: boolean;
            isActive: boolean;
            isDeleted: boolean;
            resetPasswordToken?: string | null | undefined;
            resetPasswordExpires?: NativeDate | null | undefined;
        } & import("mongoose").DefaultTimestampProps, {}, {
            timestamps: true;
        }> & {
            name: string;
            email: string;
            password: string;
            role: "user" | "admin";
            walletBalance: number;
            portfolioValue: number;
            isEmailVerified: boolean;
            isActive: boolean;
            isDeleted: boolean;
            resetPasswordToken?: string | null | undefined;
            resetPasswordExpires?: NativeDate | null | undefined;
        } & import("mongoose").DefaultTimestampProps & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        }) | null>;
        me: (_: any, __: any, context: AuthContext) => Promise<import("mongoose").Document<unknown, {}, {
            name: string;
            email: string;
            password: string;
            role: "user" | "admin";
            walletBalance: number;
            portfolioValue: number;
            isEmailVerified: boolean;
            isActive: boolean;
            isDeleted: boolean;
            resetPasswordToken?: string | null | undefined;
            resetPasswordExpires?: NativeDate | null | undefined;
        } & import("mongoose").DefaultTimestampProps, {}, {
            timestamps: true;
        }> & {
            name: string;
            email: string;
            password: string;
            role: "user" | "admin";
            walletBalance: number;
            portfolioValue: number;
            isEmailVerified: boolean;
            isActive: boolean;
            isDeleted: boolean;
            resetPasswordToken?: string | null | undefined;
            resetPasswordExpires?: NativeDate | null | undefined;
        } & import("mongoose").DefaultTimestampProps & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        }>;
        getAdminDashboardStats: (_: any, __: any, context: AuthContext) => Promise<{
            totalUsers: number;
            totalPortfolioValue: any;
            totalWalletBalance: any;
            pendingDeposits: number;
            pendingWithdrawals: number;
        }>;
    };
    Mutation: {
        register: (_: any, { data }: {
            data: any;
        }) => Promise<{
            token: string;
            user: {
                id: import("mongoose").Types.ObjectId;
                name: string;
            };
        }>;
        create_account: (_: any, { data }: {
            data: any;
        }) => Promise<{
            token: string;
            user: {
                id: import("mongoose").Types.ObjectId;
                name: string;
            };
        }>;
        login: (_: any, { data }: {
            data: any;
        }) => Promise<{
            token: string;
            user: {
                id: import("mongoose").Types.ObjectId;
                name: string;
            };
        }>;
        updateUser: (_: any, { id, data }: {
            id: string;
            data: any;
        }, context: AuthContext) => Promise<{
            success: boolean;
            message: string;
            data: import("mongoose").Document<unknown, {}, {
                name: string;
                email: string;
                password: string;
                role: "user" | "admin";
                walletBalance: number;
                portfolioValue: number;
                isEmailVerified: boolean;
                isActive: boolean;
                isDeleted: boolean;
                resetPasswordToken?: string | null | undefined;
                resetPasswordExpires?: NativeDate | null | undefined;
            } & import("mongoose").DefaultTimestampProps, {}, {
                timestamps: true;
            }> & {
                name: string;
                email: string;
                password: string;
                role: "user" | "admin";
                walletBalance: number;
                portfolioValue: number;
                isEmailVerified: boolean;
                isActive: boolean;
                isDeleted: boolean;
                resetPasswordToken?: string | null | undefined;
                resetPasswordExpires?: NativeDate | null | undefined;
            } & import("mongoose").DefaultTimestampProps & {
                _id: import("mongoose").Types.ObjectId;
            } & {
                __v: number;
            };
        }>;
        changeUserPassword: (_: any, { id, currentPassword, newPassword }: {
            id: string;
            currentPassword: string;
            newPassword: string;
        }, context: AuthContext) => Promise<{
            success: boolean;
            message: string;
            data: null;
        }>;
        deleteUser: (_: any, { id }: {
            id: string;
        }, context: AuthContext) => Promise<{
            success: boolean;
            message: string;
            data: null;
        }>;
        creditUserWallet: (_: any, { userId, amount }: {
            userId: string;
            amount: number;
        }, context: AuthContext) => Promise<{
            success: boolean;
            message: string;
            data: null;
        } | {
            success: boolean;
            message: string;
            data: import("mongoose").Document<unknown, {}, {
                name: string;
                email: string;
                password: string;
                role: "user" | "admin";
                walletBalance: number;
                portfolioValue: number;
                isEmailVerified: boolean;
                isActive: boolean;
                isDeleted: boolean;
                resetPasswordToken?: string | null | undefined;
                resetPasswordExpires?: NativeDate | null | undefined;
            } & import("mongoose").DefaultTimestampProps, {}, {
                timestamps: true;
            }> & {
                name: string;
                email: string;
                password: string;
                role: "user" | "admin";
                walletBalance: number;
                portfolioValue: number;
                isEmailVerified: boolean;
                isActive: boolean;
                isDeleted: boolean;
                resetPasswordToken?: string | null | undefined;
                resetPasswordExpires?: NativeDate | null | undefined;
            } & import("mongoose").DefaultTimestampProps & {
                _id: import("mongoose").Types.ObjectId;
            } & {
                __v: number;
            };
        }>;
        debitUserWallet: (_: any, { userId, amount }: {
            userId: string;
            amount: number;
        }, context: AuthContext) => Promise<{
            success: boolean;
            message: string;
            data: null;
        } | {
            success: boolean;
            message: string;
            data: import("mongoose").Document<unknown, {}, {
                name: string;
                email: string;
                password: string;
                role: "user" | "admin";
                walletBalance: number;
                portfolioValue: number;
                isEmailVerified: boolean;
                isActive: boolean;
                isDeleted: boolean;
                resetPasswordToken?: string | null | undefined;
                resetPasswordExpires?: NativeDate | null | undefined;
            } & import("mongoose").DefaultTimestampProps, {}, {
                timestamps: true;
            }> & {
                name: string;
                email: string;
                password: string;
                role: "user" | "admin";
                walletBalance: number;
                portfolioValue: number;
                isEmailVerified: boolean;
                isActive: boolean;
                isDeleted: boolean;
                resetPasswordToken?: string | null | undefined;
                resetPasswordExpires?: NativeDate | null | undefined;
            } & import("mongoose").DefaultTimestampProps & {
                _id: import("mongoose").Types.ObjectId;
            } & {
                __v: number;
            };
        }>;
    };
};
export default userResolvers;
//# sourceMappingURL=user.resolvers.d.ts.map