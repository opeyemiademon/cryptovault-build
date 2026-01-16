import { AuthContext } from '../../middleware/auth.js';
declare const investmentResolvers: {
    Query: {
        getAllInvestments: (_: any, __: any, context: AuthContext) => Promise<(import("mongoose").Document<unknown, {}, {
            userId: import("mongoose").Types.ObjectId;
            coinId: import("mongoose").Types.ObjectId;
            coinAmount: number;
            investedAmount: number;
            currentValue: number;
            profitLoss: number;
            profitLossPercentage: number;
        } & import("mongoose").DefaultTimestampProps, {}, {
            timestamps: true;
        }> & {
            userId: import("mongoose").Types.ObjectId;
            coinId: import("mongoose").Types.ObjectId;
            coinAmount: number;
            investedAmount: number;
            currentValue: number;
            profitLoss: number;
            profitLossPercentage: number;
        } & import("mongoose").DefaultTimestampProps & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        })[]>;
        getInvestment: (_: any, { id }: {
            id: string;
        }, context: AuthContext) => Promise<(import("mongoose").Document<unknown, {}, {
            userId: import("mongoose").Types.ObjectId;
            coinId: import("mongoose").Types.ObjectId;
            coinAmount: number;
            investedAmount: number;
            currentValue: number;
            profitLoss: number;
            profitLossPercentage: number;
        } & import("mongoose").DefaultTimestampProps, {}, {
            timestamps: true;
        }> & {
            userId: import("mongoose").Types.ObjectId;
            coinId: import("mongoose").Types.ObjectId;
            coinAmount: number;
            investedAmount: number;
            currentValue: number;
            profitLoss: number;
            profitLossPercentage: number;
        } & import("mongoose").DefaultTimestampProps & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        }) | null>;
        getUserInvestments: (_: any, { userId }: {
            userId: string;
        }, context: AuthContext) => Promise<(import("mongoose").Document<unknown, {}, {
            userId: import("mongoose").Types.ObjectId;
            coinId: import("mongoose").Types.ObjectId;
            coinAmount: number;
            investedAmount: number;
            currentValue: number;
            profitLoss: number;
            profitLossPercentage: number;
        } & import("mongoose").DefaultTimestampProps, {}, {
            timestamps: true;
        }> & {
            userId: import("mongoose").Types.ObjectId;
            coinId: import("mongoose").Types.ObjectId;
            coinAmount: number;
            investedAmount: number;
            currentValue: number;
            profitLoss: number;
            profitLossPercentage: number;
        } & import("mongoose").DefaultTimestampProps & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        })[]>;
        getUserInvestmentByCoin: (_: any, { userId, coinId }: {
            userId: string;
            coinId: string;
        }, context: AuthContext) => Promise<(import("mongoose").Document<unknown, {}, {
            userId: import("mongoose").Types.ObjectId;
            coinId: import("mongoose").Types.ObjectId;
            coinAmount: number;
            investedAmount: number;
            currentValue: number;
            profitLoss: number;
            profitLossPercentage: number;
        } & import("mongoose").DefaultTimestampProps, {}, {
            timestamps: true;
        }> & {
            userId: import("mongoose").Types.ObjectId;
            coinId: import("mongoose").Types.ObjectId;
            coinAmount: number;
            investedAmount: number;
            currentValue: number;
            profitLoss: number;
            profitLossPercentage: number;
        } & import("mongoose").DefaultTimestampProps & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        }) | null>;
        getInvestmentHistory: (_: any, { userId, coinId }: {
            userId: string;
            coinId?: string;
        }, context: AuthContext) => Promise<(import("mongoose").Document<unknown, {}, {
            userId: import("mongoose").Types.ObjectId;
            coinId: import("mongoose").Types.ObjectId;
            coinAmount: number;
            investmentId: import("mongoose").Types.ObjectId;
            action: "reduce" | "buy" | "sell" | "add";
            usdAmount: number;
            coinPrice: number;
            notes?: string | null | undefined;
            performedBy?: import("mongoose").Types.ObjectId | null | undefined;
        } & import("mongoose").DefaultTimestampProps, {}, {
            timestamps: true;
        }> & {
            userId: import("mongoose").Types.ObjectId;
            coinId: import("mongoose").Types.ObjectId;
            coinAmount: number;
            investmentId: import("mongoose").Types.ObjectId;
            action: "reduce" | "buy" | "sell" | "add";
            usdAmount: number;
            coinPrice: number;
            notes?: string | null | undefined;
            performedBy?: import("mongoose").Types.ObjectId | null | undefined;
        } & import("mongoose").DefaultTimestampProps & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        })[]>;
        getCoinPerformanceData: (_: any, { userId, days }: {
            userId: string;
            days?: number;
        }, context: AuthContext) => Promise<{
            date: string;
            coins: {
                coinSymbol: string;
                coinName: string;
                coinAmount: number;
            }[];
        }[]>;
    };
    Investment: {
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
    InvestmentHistory: {
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
        performedByUser: (parent: any) => Promise<(import("mongoose").Document<unknown, {}, {
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
    };
    Mutation: {
        buyInvestment: (_: any, { data }: {
            data: {
                userId: string;
                coinId: string;
                amount: number;
                notes?: string;
            };
        }, context: AuthContext) => Promise<{
            success: boolean;
            message: string;
        }>;
        createInvestment: (_: any, { data }: {
            data: any;
        }, context: AuthContext) => Promise<{
            success: boolean;
            message: string;
            data: import("mongoose").Document<unknown, {}, {
                userId: import("mongoose").Types.ObjectId;
                coinId: import("mongoose").Types.ObjectId;
                coinAmount: number;
                investedAmount: number;
                currentValue: number;
                profitLoss: number;
                profitLossPercentage: number;
            } & import("mongoose").DefaultTimestampProps, {}, {
                timestamps: true;
            }> & {
                userId: import("mongoose").Types.ObjectId;
                coinId: import("mongoose").Types.ObjectId;
                coinAmount: number;
                investedAmount: number;
                currentValue: number;
                profitLoss: number;
                profitLossPercentage: number;
            } & import("mongoose").DefaultTimestampProps & {
                _id: import("mongoose").Types.ObjectId;
            } & {
                __v: number;
            };
        }>;
        updateInvestment: (_: any, { id, data }: {
            id: string;
            data: any;
        }, context: AuthContext) => Promise<{
            success: boolean;
            message: string;
            data: import("mongoose").Document<unknown, {}, {
                userId: import("mongoose").Types.ObjectId;
                coinId: import("mongoose").Types.ObjectId;
                coinAmount: number;
                investedAmount: number;
                currentValue: number;
                profitLoss: number;
                profitLossPercentage: number;
            } & import("mongoose").DefaultTimestampProps, {}, {
                timestamps: true;
            }> & {
                userId: import("mongoose").Types.ObjectId;
                coinId: import("mongoose").Types.ObjectId;
                coinAmount: number;
                investedAmount: number;
                currentValue: number;
                profitLoss: number;
                profitLossPercentage: number;
            } & import("mongoose").DefaultTimestampProps & {
                _id: import("mongoose").Types.ObjectId;
            } & {
                __v: number;
            };
        }>;
        addToInvestment: (_: any, { userId, coinId, amount }: {
            userId: string;
            coinId: string;
            amount: number;
        }, context: AuthContext) => Promise<{
            success: boolean;
            message: string;
            data: import("mongoose").Document<unknown, {}, {
                userId: import("mongoose").Types.ObjectId;
                coinId: import("mongoose").Types.ObjectId;
                coinAmount: number;
                investedAmount: number;
                currentValue: number;
                profitLoss: number;
                profitLossPercentage: number;
            } & import("mongoose").DefaultTimestampProps, {}, {
                timestamps: true;
            }> & {
                userId: import("mongoose").Types.ObjectId;
                coinId: import("mongoose").Types.ObjectId;
                coinAmount: number;
                investedAmount: number;
                currentValue: number;
                profitLoss: number;
                profitLossPercentage: number;
            } & import("mongoose").DefaultTimestampProps & {
                _id: import("mongoose").Types.ObjectId;
            } & {
                __v: number;
            };
        }>;
        reduceInvestment: (_: any, { userId, coinId, amount }: {
            userId: string;
            coinId: string;
            amount: number;
        }, context: AuthContext) => Promise<{
            success: boolean;
            message: string;
            data: null;
        } | {
            success: boolean;
            message: string;
            data: import("mongoose").Document<unknown, {}, {
                userId: import("mongoose").Types.ObjectId;
                coinId: import("mongoose").Types.ObjectId;
                coinAmount: number;
                investedAmount: number;
                currentValue: number;
                profitLoss: number;
                profitLossPercentage: number;
            } & import("mongoose").DefaultTimestampProps, {}, {
                timestamps: true;
            }> & {
                userId: import("mongoose").Types.ObjectId;
                coinId: import("mongoose").Types.ObjectId;
                coinAmount: number;
                investedAmount: number;
                currentValue: number;
                profitLoss: number;
                profitLossPercentage: number;
            } & import("mongoose").DefaultTimestampProps & {
                _id: import("mongoose").Types.ObjectId;
            } & {
                __v: number;
            };
        }>;
        deleteInvestment: (_: any, { id }: {
            id: string;
        }, context: AuthContext) => Promise<{
            success: boolean;
            message: string;
            data: null;
        }>;
        adminAddInvestment: (_: any, { data }: {
            data: {
                userId: string;
                coinId: string;
                coinAmount: number;
                notes?: string;
            };
        }, context: AuthContext) => Promise<{
            success: boolean;
            message: string;
            data: import("mongoose").Document<unknown, {}, {
                userId: import("mongoose").Types.ObjectId;
                coinId: import("mongoose").Types.ObjectId;
                coinAmount: number;
                investedAmount: number;
                currentValue: number;
                profitLoss: number;
                profitLossPercentage: number;
            } & import("mongoose").DefaultTimestampProps, {}, {
                timestamps: true;
            }> & {
                userId: import("mongoose").Types.ObjectId;
                coinId: import("mongoose").Types.ObjectId;
                coinAmount: number;
                investedAmount: number;
                currentValue: number;
                profitLoss: number;
                profitLossPercentage: number;
            } & import("mongoose").DefaultTimestampProps & {
                _id: import("mongoose").Types.ObjectId;
            } & {
                __v: number;
            };
        }>;
        adminReduceInvestment: (_: any, { data }: {
            data: {
                userId: string;
                coinId: string;
                coinAmount: number;
                notes?: string;
            };
        }, context: AuthContext) => Promise<{
            success: boolean;
            message: string;
            data: null;
        } | {
            success: boolean;
            message: string;
            data: import("mongoose").Document<unknown, {}, {
                userId: import("mongoose").Types.ObjectId;
                coinId: import("mongoose").Types.ObjectId;
                coinAmount: number;
                investedAmount: number;
                currentValue: number;
                profitLoss: number;
                profitLossPercentage: number;
            } & import("mongoose").DefaultTimestampProps, {}, {
                timestamps: true;
            }> & {
                userId: import("mongoose").Types.ObjectId;
                coinId: import("mongoose").Types.ObjectId;
                coinAmount: number;
                investedAmount: number;
                currentValue: number;
                profitLoss: number;
                profitLossPercentage: number;
            } & import("mongoose").DefaultTimestampProps & {
                _id: import("mongoose").Types.ObjectId;
            } & {
                __v: number;
            };
        }>;
    };
};
export default investmentResolvers;
//# sourceMappingURL=investment.resolvers.d.ts.map