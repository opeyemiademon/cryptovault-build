import { AuthContext } from '../../middleware/auth.js';
declare const transactionResolvers: {
    Query: {
        getAllTransactions: (_: any, __: any, context: AuthContext) => Promise<(import("mongoose").Document<unknown, {}, {
            type: "deposit" | "withdrawal" | "buy" | "sell";
            userId: import("mongoose").Types.ObjectId;
            amount: number;
            status: "pending" | "completed" | "rejected" | "failed";
            coinId?: import("mongoose").Types.ObjectId | null | undefined;
            coinAmount?: number | null | undefined;
            withdrawSource?: "wallet" | "portfolio" | null | undefined;
            bankName?: string | null | undefined;
            accountNumber?: string | null | undefined;
            shortCode?: string | null | undefined;
            walletAddress?: string | null | undefined;
            transactionHash?: string | null | undefined;
            notes?: string | null | undefined;
            processedBy?: import("mongoose").Types.ObjectId | null | undefined;
            processedAt?: NativeDate | null | undefined;
        } & import("mongoose").DefaultTimestampProps, {}, {
            timestamps: true;
        }> & {
            type: "deposit" | "withdrawal" | "buy" | "sell";
            userId: import("mongoose").Types.ObjectId;
            amount: number;
            status: "pending" | "completed" | "rejected" | "failed";
            coinId?: import("mongoose").Types.ObjectId | null | undefined;
            coinAmount?: number | null | undefined;
            withdrawSource?: "wallet" | "portfolio" | null | undefined;
            bankName?: string | null | undefined;
            accountNumber?: string | null | undefined;
            shortCode?: string | null | undefined;
            walletAddress?: string | null | undefined;
            transactionHash?: string | null | undefined;
            notes?: string | null | undefined;
            processedBy?: import("mongoose").Types.ObjectId | null | undefined;
            processedAt?: NativeDate | null | undefined;
        } & import("mongoose").DefaultTimestampProps & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        })[]>;
        getTransaction: (_: any, { id }: {
            id: string;
        }, context: AuthContext) => Promise<(import("mongoose").Document<unknown, {}, {
            type: "deposit" | "withdrawal" | "buy" | "sell";
            userId: import("mongoose").Types.ObjectId;
            amount: number;
            status: "pending" | "completed" | "rejected" | "failed";
            coinId?: import("mongoose").Types.ObjectId | null | undefined;
            coinAmount?: number | null | undefined;
            withdrawSource?: "wallet" | "portfolio" | null | undefined;
            bankName?: string | null | undefined;
            accountNumber?: string | null | undefined;
            shortCode?: string | null | undefined;
            walletAddress?: string | null | undefined;
            transactionHash?: string | null | undefined;
            notes?: string | null | undefined;
            processedBy?: import("mongoose").Types.ObjectId | null | undefined;
            processedAt?: NativeDate | null | undefined;
        } & import("mongoose").DefaultTimestampProps, {}, {
            timestamps: true;
        }> & {
            type: "deposit" | "withdrawal" | "buy" | "sell";
            userId: import("mongoose").Types.ObjectId;
            amount: number;
            status: "pending" | "completed" | "rejected" | "failed";
            coinId?: import("mongoose").Types.ObjectId | null | undefined;
            coinAmount?: number | null | undefined;
            withdrawSource?: "wallet" | "portfolio" | null | undefined;
            bankName?: string | null | undefined;
            accountNumber?: string | null | undefined;
            shortCode?: string | null | undefined;
            walletAddress?: string | null | undefined;
            transactionHash?: string | null | undefined;
            notes?: string | null | undefined;
            processedBy?: import("mongoose").Types.ObjectId | null | undefined;
            processedAt?: NativeDate | null | undefined;
        } & import("mongoose").DefaultTimestampProps & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        }) | null>;
        getUserTransactions: (_: any, { userId }: {
            userId: string;
        }, context: AuthContext) => Promise<(import("mongoose").Document<unknown, {}, {
            type: "deposit" | "withdrawal" | "buy" | "sell";
            userId: import("mongoose").Types.ObjectId;
            amount: number;
            status: "pending" | "completed" | "rejected" | "failed";
            coinId?: import("mongoose").Types.ObjectId | null | undefined;
            coinAmount?: number | null | undefined;
            withdrawSource?: "wallet" | "portfolio" | null | undefined;
            bankName?: string | null | undefined;
            accountNumber?: string | null | undefined;
            shortCode?: string | null | undefined;
            walletAddress?: string | null | undefined;
            transactionHash?: string | null | undefined;
            notes?: string | null | undefined;
            processedBy?: import("mongoose").Types.ObjectId | null | undefined;
            processedAt?: NativeDate | null | undefined;
        } & import("mongoose").DefaultTimestampProps, {}, {
            timestamps: true;
        }> & {
            type: "deposit" | "withdrawal" | "buy" | "sell";
            userId: import("mongoose").Types.ObjectId;
            amount: number;
            status: "pending" | "completed" | "rejected" | "failed";
            coinId?: import("mongoose").Types.ObjectId | null | undefined;
            coinAmount?: number | null | undefined;
            withdrawSource?: "wallet" | "portfolio" | null | undefined;
            bankName?: string | null | undefined;
            accountNumber?: string | null | undefined;
            shortCode?: string | null | undefined;
            walletAddress?: string | null | undefined;
            transactionHash?: string | null | undefined;
            notes?: string | null | undefined;
            processedBy?: import("mongoose").Types.ObjectId | null | undefined;
            processedAt?: NativeDate | null | undefined;
        } & import("mongoose").DefaultTimestampProps & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        })[]>;
        getUserDepositRequests: (_: any, { userId }: {
            userId: string;
        }, context: AuthContext) => Promise<(import("mongoose").Document<unknown, {}, {
            type: "deposit" | "withdrawal" | "buy" | "sell";
            userId: import("mongoose").Types.ObjectId;
            amount: number;
            status: "pending" | "completed" | "rejected" | "failed";
            coinId?: import("mongoose").Types.ObjectId | null | undefined;
            coinAmount?: number | null | undefined;
            withdrawSource?: "wallet" | "portfolio" | null | undefined;
            bankName?: string | null | undefined;
            accountNumber?: string | null | undefined;
            shortCode?: string | null | undefined;
            walletAddress?: string | null | undefined;
            transactionHash?: string | null | undefined;
            notes?: string | null | undefined;
            processedBy?: import("mongoose").Types.ObjectId | null | undefined;
            processedAt?: NativeDate | null | undefined;
        } & import("mongoose").DefaultTimestampProps, {}, {
            timestamps: true;
        }> & {
            type: "deposit" | "withdrawal" | "buy" | "sell";
            userId: import("mongoose").Types.ObjectId;
            amount: number;
            status: "pending" | "completed" | "rejected" | "failed";
            coinId?: import("mongoose").Types.ObjectId | null | undefined;
            coinAmount?: number | null | undefined;
            withdrawSource?: "wallet" | "portfolio" | null | undefined;
            bankName?: string | null | undefined;
            accountNumber?: string | null | undefined;
            shortCode?: string | null | undefined;
            walletAddress?: string | null | undefined;
            transactionHash?: string | null | undefined;
            notes?: string | null | undefined;
            processedBy?: import("mongoose").Types.ObjectId | null | undefined;
            processedAt?: NativeDate | null | undefined;
        } & import("mongoose").DefaultTimestampProps & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        })[]>;
        getTransactionsByType: (_: any, { type }: {
            type: string;
        }, context: AuthContext) => Promise<(import("mongoose").Document<unknown, {}, {
            type: "deposit" | "withdrawal" | "buy" | "sell";
            userId: import("mongoose").Types.ObjectId;
            amount: number;
            status: "pending" | "completed" | "rejected" | "failed";
            coinId?: import("mongoose").Types.ObjectId | null | undefined;
            coinAmount?: number | null | undefined;
            withdrawSource?: "wallet" | "portfolio" | null | undefined;
            bankName?: string | null | undefined;
            accountNumber?: string | null | undefined;
            shortCode?: string | null | undefined;
            walletAddress?: string | null | undefined;
            transactionHash?: string | null | undefined;
            notes?: string | null | undefined;
            processedBy?: import("mongoose").Types.ObjectId | null | undefined;
            processedAt?: NativeDate | null | undefined;
        } & import("mongoose").DefaultTimestampProps, {}, {
            timestamps: true;
        }> & {
            type: "deposit" | "withdrawal" | "buy" | "sell";
            userId: import("mongoose").Types.ObjectId;
            amount: number;
            status: "pending" | "completed" | "rejected" | "failed";
            coinId?: import("mongoose").Types.ObjectId | null | undefined;
            coinAmount?: number | null | undefined;
            withdrawSource?: "wallet" | "portfolio" | null | undefined;
            bankName?: string | null | undefined;
            accountNumber?: string | null | undefined;
            shortCode?: string | null | undefined;
            walletAddress?: string | null | undefined;
            transactionHash?: string | null | undefined;
            notes?: string | null | undefined;
            processedBy?: import("mongoose").Types.ObjectId | null | undefined;
            processedAt?: NativeDate | null | undefined;
        } & import("mongoose").DefaultTimestampProps & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        })[]>;
        getTransactionsByStatus: (_: any, { status }: {
            status: string;
        }, context: AuthContext) => Promise<(import("mongoose").Document<unknown, {}, {
            type: "deposit" | "withdrawal" | "buy" | "sell";
            userId: import("mongoose").Types.ObjectId;
            amount: number;
            status: "pending" | "completed" | "rejected" | "failed";
            coinId?: import("mongoose").Types.ObjectId | null | undefined;
            coinAmount?: number | null | undefined;
            withdrawSource?: "wallet" | "portfolio" | null | undefined;
            bankName?: string | null | undefined;
            accountNumber?: string | null | undefined;
            shortCode?: string | null | undefined;
            walletAddress?: string | null | undefined;
            transactionHash?: string | null | undefined;
            notes?: string | null | undefined;
            processedBy?: import("mongoose").Types.ObjectId | null | undefined;
            processedAt?: NativeDate | null | undefined;
        } & import("mongoose").DefaultTimestampProps, {}, {
            timestamps: true;
        }> & {
            type: "deposit" | "withdrawal" | "buy" | "sell";
            userId: import("mongoose").Types.ObjectId;
            amount: number;
            status: "pending" | "completed" | "rejected" | "failed";
            coinId?: import("mongoose").Types.ObjectId | null | undefined;
            coinAmount?: number | null | undefined;
            withdrawSource?: "wallet" | "portfolio" | null | undefined;
            bankName?: string | null | undefined;
            accountNumber?: string | null | undefined;
            shortCode?: string | null | undefined;
            walletAddress?: string | null | undefined;
            transactionHash?: string | null | undefined;
            notes?: string | null | undefined;
            processedBy?: import("mongoose").Types.ObjectId | null | undefined;
            processedAt?: NativeDate | null | undefined;
        } & import("mongoose").DefaultTimestampProps & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        })[]>;
        getPendingDeposits: (_: any, __: any, context: AuthContext) => Promise<(import("mongoose").Document<unknown, {}, {
            type: "deposit" | "withdrawal" | "buy" | "sell";
            userId: import("mongoose").Types.ObjectId;
            amount: number;
            status: "pending" | "completed" | "rejected" | "failed";
            coinId?: import("mongoose").Types.ObjectId | null | undefined;
            coinAmount?: number | null | undefined;
            withdrawSource?: "wallet" | "portfolio" | null | undefined;
            bankName?: string | null | undefined;
            accountNumber?: string | null | undefined;
            shortCode?: string | null | undefined;
            walletAddress?: string | null | undefined;
            transactionHash?: string | null | undefined;
            notes?: string | null | undefined;
            processedBy?: import("mongoose").Types.ObjectId | null | undefined;
            processedAt?: NativeDate | null | undefined;
        } & import("mongoose").DefaultTimestampProps, {}, {
            timestamps: true;
        }> & {
            type: "deposit" | "withdrawal" | "buy" | "sell";
            userId: import("mongoose").Types.ObjectId;
            amount: number;
            status: "pending" | "completed" | "rejected" | "failed";
            coinId?: import("mongoose").Types.ObjectId | null | undefined;
            coinAmount?: number | null | undefined;
            withdrawSource?: "wallet" | "portfolio" | null | undefined;
            bankName?: string | null | undefined;
            accountNumber?: string | null | undefined;
            shortCode?: string | null | undefined;
            walletAddress?: string | null | undefined;
            transactionHash?: string | null | undefined;
            notes?: string | null | undefined;
            processedBy?: import("mongoose").Types.ObjectId | null | undefined;
            processedAt?: NativeDate | null | undefined;
        } & import("mongoose").DefaultTimestampProps & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        })[]>;
        getPendingWithdrawals: (_: any, __: any, context: AuthContext) => Promise<(import("mongoose").Document<unknown, {}, {
            type: "deposit" | "withdrawal" | "buy" | "sell";
            userId: import("mongoose").Types.ObjectId;
            amount: number;
            status: "pending" | "completed" | "rejected" | "failed";
            coinId?: import("mongoose").Types.ObjectId | null | undefined;
            coinAmount?: number | null | undefined;
            withdrawSource?: "wallet" | "portfolio" | null | undefined;
            bankName?: string | null | undefined;
            accountNumber?: string | null | undefined;
            shortCode?: string | null | undefined;
            walletAddress?: string | null | undefined;
            transactionHash?: string | null | undefined;
            notes?: string | null | undefined;
            processedBy?: import("mongoose").Types.ObjectId | null | undefined;
            processedAt?: NativeDate | null | undefined;
        } & import("mongoose").DefaultTimestampProps, {}, {
            timestamps: true;
        }> & {
            type: "deposit" | "withdrawal" | "buy" | "sell";
            userId: import("mongoose").Types.ObjectId;
            amount: number;
            status: "pending" | "completed" | "rejected" | "failed";
            coinId?: import("mongoose").Types.ObjectId | null | undefined;
            coinAmount?: number | null | undefined;
            withdrawSource?: "wallet" | "portfolio" | null | undefined;
            bankName?: string | null | undefined;
            accountNumber?: string | null | undefined;
            shortCode?: string | null | undefined;
            walletAddress?: string | null | undefined;
            transactionHash?: string | null | undefined;
            notes?: string | null | undefined;
            processedBy?: import("mongoose").Types.ObjectId | null | undefined;
            processedAt?: NativeDate | null | undefined;
        } & import("mongoose").DefaultTimestampProps & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        })[]>;
    };
    Transaction: {
        user: (parent: any) => Promise<(import("mongoose").Document<unknown, {}, {
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
        coin: (parent: any) => Promise<(import("mongoose").Document<unknown, {}, {
            symbol: string;
            name: string;
            isActive: boolean;
            coingeckoId: string;
            priceApiUrl: string;
            currentPrice: number;
            price_change_24h: number;
            iconUrl?: string | null | undefined;
        } & import("mongoose").DefaultTimestampProps, {}, {
            timestamps: true;
        }> & {
            symbol: string;
            name: string;
            isActive: boolean;
            coingeckoId: string;
            priceApiUrl: string;
            currentPrice: number;
            price_change_24h: number;
            iconUrl?: string | null | undefined;
        } & import("mongoose").DefaultTimestampProps & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        }) | null>;
    };
    Mutation: {
        createTransaction: (_: any, { data }: {
            data: any;
        }, context: AuthContext) => Promise<{
            success: boolean;
            message: string;
            data: import("mongoose").Document<unknown, {}, {
                type: "deposit" | "withdrawal" | "buy" | "sell";
                userId: import("mongoose").Types.ObjectId;
                amount: number;
                status: "pending" | "completed" | "rejected" | "failed";
                coinId?: import("mongoose").Types.ObjectId | null | undefined;
                coinAmount?: number | null | undefined;
                withdrawSource?: "wallet" | "portfolio" | null | undefined;
                bankName?: string | null | undefined;
                accountNumber?: string | null | undefined;
                shortCode?: string | null | undefined;
                walletAddress?: string | null | undefined;
                transactionHash?: string | null | undefined;
                notes?: string | null | undefined;
                processedBy?: import("mongoose").Types.ObjectId | null | undefined;
                processedAt?: NativeDate | null | undefined;
            } & import("mongoose").DefaultTimestampProps, {}, {
                timestamps: true;
            }> & {
                type: "deposit" | "withdrawal" | "buy" | "sell";
                userId: import("mongoose").Types.ObjectId;
                amount: number;
                status: "pending" | "completed" | "rejected" | "failed";
                coinId?: import("mongoose").Types.ObjectId | null | undefined;
                coinAmount?: number | null | undefined;
                withdrawSource?: "wallet" | "portfolio" | null | undefined;
                bankName?: string | null | undefined;
                accountNumber?: string | null | undefined;
                shortCode?: string | null | undefined;
                walletAddress?: string | null | undefined;
                transactionHash?: string | null | undefined;
                notes?: string | null | undefined;
                processedBy?: import("mongoose").Types.ObjectId | null | undefined;
                processedAt?: NativeDate | null | undefined;
            } & import("mongoose").DefaultTimestampProps & {
                _id: import("mongoose").Types.ObjectId;
            } & {
                __v: number;
            };
        }>;
        submitDepositRequest: (_: any, { data }: {
            data: {
                userId: string;
                amount: number;
                walletAddress?: string;
                notes?: string;
            };
        }, context: AuthContext) => Promise<{
            success: boolean;
            message: string;
            data: import("mongoose").Document<unknown, {}, {
                type: "deposit" | "withdrawal" | "buy" | "sell";
                userId: import("mongoose").Types.ObjectId;
                amount: number;
                status: "pending" | "completed" | "rejected" | "failed";
                coinId?: import("mongoose").Types.ObjectId | null | undefined;
                coinAmount?: number | null | undefined;
                withdrawSource?: "wallet" | "portfolio" | null | undefined;
                bankName?: string | null | undefined;
                accountNumber?: string | null | undefined;
                shortCode?: string | null | undefined;
                walletAddress?: string | null | undefined;
                transactionHash?: string | null | undefined;
                notes?: string | null | undefined;
                processedBy?: import("mongoose").Types.ObjectId | null | undefined;
                processedAt?: NativeDate | null | undefined;
            } & import("mongoose").DefaultTimestampProps, {}, {
                timestamps: true;
            }> & {
                type: "deposit" | "withdrawal" | "buy" | "sell";
                userId: import("mongoose").Types.ObjectId;
                amount: number;
                status: "pending" | "completed" | "rejected" | "failed";
                coinId?: import("mongoose").Types.ObjectId | null | undefined;
                coinAmount?: number | null | undefined;
                withdrawSource?: "wallet" | "portfolio" | null | undefined;
                bankName?: string | null | undefined;
                accountNumber?: string | null | undefined;
                shortCode?: string | null | undefined;
                walletAddress?: string | null | undefined;
                transactionHash?: string | null | undefined;
                notes?: string | null | undefined;
                processedBy?: import("mongoose").Types.ObjectId | null | undefined;
                processedAt?: NativeDate | null | undefined;
            } & import("mongoose").DefaultTimestampProps & {
                _id: import("mongoose").Types.ObjectId;
            } & {
                __v: number;
            };
        }>;
        submitWithdrawalRequest: (_: any, { data, }: {
            data: {
                userId: string;
                withdrawSource: "wallet" | "portfolio";
                amount: number;
                coinId?: string;
                coinAmount?: number;
                bankName?: string;
                accountNumber?: string;
                shortCode?: string;
                notes?: string;
            };
        }, context: AuthContext) => Promise<{
            success: boolean;
            message: string;
            data: import("mongoose").Document<unknown, {}, {
                type: "deposit" | "withdrawal" | "buy" | "sell";
                userId: import("mongoose").Types.ObjectId;
                amount: number;
                status: "pending" | "completed" | "rejected" | "failed";
                coinId?: import("mongoose").Types.ObjectId | null | undefined;
                coinAmount?: number | null | undefined;
                withdrawSource?: "wallet" | "portfolio" | null | undefined;
                bankName?: string | null | undefined;
                accountNumber?: string | null | undefined;
                shortCode?: string | null | undefined;
                walletAddress?: string | null | undefined;
                transactionHash?: string | null | undefined;
                notes?: string | null | undefined;
                processedBy?: import("mongoose").Types.ObjectId | null | undefined;
                processedAt?: NativeDate | null | undefined;
            } & import("mongoose").DefaultTimestampProps, {}, {
                timestamps: true;
            }> & {
                type: "deposit" | "withdrawal" | "buy" | "sell";
                userId: import("mongoose").Types.ObjectId;
                amount: number;
                status: "pending" | "completed" | "rejected" | "failed";
                coinId?: import("mongoose").Types.ObjectId | null | undefined;
                coinAmount?: number | null | undefined;
                withdrawSource?: "wallet" | "portfolio" | null | undefined;
                bankName?: string | null | undefined;
                accountNumber?: string | null | undefined;
                shortCode?: string | null | undefined;
                walletAddress?: string | null | undefined;
                transactionHash?: string | null | undefined;
                notes?: string | null | undefined;
                processedBy?: import("mongoose").Types.ObjectId | null | undefined;
                processedAt?: NativeDate | null | undefined;
            } & import("mongoose").DefaultTimestampProps & {
                _id: import("mongoose").Types.ObjectId;
            } & {
                __v: number;
            };
        }>;
        updateTransaction: (_: any, { id, data }: {
            id: string;
            data: any;
        }, context: AuthContext) => Promise<{
            success: boolean;
            message: string;
            data: import("mongoose").Document<unknown, {}, {
                type: "deposit" | "withdrawal" | "buy" | "sell";
                userId: import("mongoose").Types.ObjectId;
                amount: number;
                status: "pending" | "completed" | "rejected" | "failed";
                coinId?: import("mongoose").Types.ObjectId | null | undefined;
                coinAmount?: number | null | undefined;
                withdrawSource?: "wallet" | "portfolio" | null | undefined;
                bankName?: string | null | undefined;
                accountNumber?: string | null | undefined;
                shortCode?: string | null | undefined;
                walletAddress?: string | null | undefined;
                transactionHash?: string | null | undefined;
                notes?: string | null | undefined;
                processedBy?: import("mongoose").Types.ObjectId | null | undefined;
                processedAt?: NativeDate | null | undefined;
            } & import("mongoose").DefaultTimestampProps, {}, {
                timestamps: true;
            }> & {
                type: "deposit" | "withdrawal" | "buy" | "sell";
                userId: import("mongoose").Types.ObjectId;
                amount: number;
                status: "pending" | "completed" | "rejected" | "failed";
                coinId?: import("mongoose").Types.ObjectId | null | undefined;
                coinAmount?: number | null | undefined;
                withdrawSource?: "wallet" | "portfolio" | null | undefined;
                bankName?: string | null | undefined;
                accountNumber?: string | null | undefined;
                shortCode?: string | null | undefined;
                walletAddress?: string | null | undefined;
                transactionHash?: string | null | undefined;
                notes?: string | null | undefined;
                processedBy?: import("mongoose").Types.ObjectId | null | undefined;
                processedAt?: NativeDate | null | undefined;
            } & import("mongoose").DefaultTimestampProps & {
                _id: import("mongoose").Types.ObjectId;
            } & {
                __v: number;
            };
        }>;
        approveTransaction: (_: any, { id }: {
            id: string;
        }, context: AuthContext) => Promise<{
            success: boolean;
            message: string;
            data: import("mongoose").Document<unknown, {}, {
                type: "deposit" | "withdrawal" | "buy" | "sell";
                userId: import("mongoose").Types.ObjectId;
                amount: number;
                status: "pending" | "completed" | "rejected" | "failed";
                coinId?: import("mongoose").Types.ObjectId | null | undefined;
                coinAmount?: number | null | undefined;
                withdrawSource?: "wallet" | "portfolio" | null | undefined;
                bankName?: string | null | undefined;
                accountNumber?: string | null | undefined;
                shortCode?: string | null | undefined;
                walletAddress?: string | null | undefined;
                transactionHash?: string | null | undefined;
                notes?: string | null | undefined;
                processedBy?: import("mongoose").Types.ObjectId | null | undefined;
                processedAt?: NativeDate | null | undefined;
            } & import("mongoose").DefaultTimestampProps, {}, {
                timestamps: true;
            }> & {
                type: "deposit" | "withdrawal" | "buy" | "sell";
                userId: import("mongoose").Types.ObjectId;
                amount: number;
                status: "pending" | "completed" | "rejected" | "failed";
                coinId?: import("mongoose").Types.ObjectId | null | undefined;
                coinAmount?: number | null | undefined;
                withdrawSource?: "wallet" | "portfolio" | null | undefined;
                bankName?: string | null | undefined;
                accountNumber?: string | null | undefined;
                shortCode?: string | null | undefined;
                walletAddress?: string | null | undefined;
                transactionHash?: string | null | undefined;
                notes?: string | null | undefined;
                processedBy?: import("mongoose").Types.ObjectId | null | undefined;
                processedAt?: NativeDate | null | undefined;
            } & import("mongoose").DefaultTimestampProps & {
                _id: import("mongoose").Types.ObjectId;
            } & {
                __v: number;
            };
        }>;
        rejectTransaction: (_: any, { id, reason }: {
            id: string;
            reason?: string;
        }, context: AuthContext) => Promise<{
            success: boolean;
            message: string;
            data: import("mongoose").Document<unknown, {}, {
                type: "deposit" | "withdrawal" | "buy" | "sell";
                userId: import("mongoose").Types.ObjectId;
                amount: number;
                status: "pending" | "completed" | "rejected" | "failed";
                coinId?: import("mongoose").Types.ObjectId | null | undefined;
                coinAmount?: number | null | undefined;
                withdrawSource?: "wallet" | "portfolio" | null | undefined;
                bankName?: string | null | undefined;
                accountNumber?: string | null | undefined;
                shortCode?: string | null | undefined;
                walletAddress?: string | null | undefined;
                transactionHash?: string | null | undefined;
                notes?: string | null | undefined;
                processedBy?: import("mongoose").Types.ObjectId | null | undefined;
                processedAt?: NativeDate | null | undefined;
            } & import("mongoose").DefaultTimestampProps, {}, {
                timestamps: true;
            }> & {
                type: "deposit" | "withdrawal" | "buy" | "sell";
                userId: import("mongoose").Types.ObjectId;
                amount: number;
                status: "pending" | "completed" | "rejected" | "failed";
                coinId?: import("mongoose").Types.ObjectId | null | undefined;
                coinAmount?: number | null | undefined;
                withdrawSource?: "wallet" | "portfolio" | null | undefined;
                bankName?: string | null | undefined;
                accountNumber?: string | null | undefined;
                shortCode?: string | null | undefined;
                walletAddress?: string | null | undefined;
                transactionHash?: string | null | undefined;
                notes?: string | null | undefined;
                processedBy?: import("mongoose").Types.ObjectId | null | undefined;
                processedAt?: NativeDate | null | undefined;
            } & import("mongoose").DefaultTimestampProps & {
                _id: import("mongoose").Types.ObjectId;
            } & {
                __v: number;
            };
        }>;
        deleteTransaction: (_: any, { id }: {
            id: string;
        }, context: AuthContext) => Promise<{
            success: boolean;
            message: string;
            data: null;
        }>;
    };
};
export default transactionResolvers;
//# sourceMappingURL=transaction.resolvers.d.ts.map