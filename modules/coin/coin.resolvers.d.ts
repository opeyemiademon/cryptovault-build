import { AuthContext } from '../../middleware/auth.js';
declare const coinResolvers: {
    Query: {
        getAllCoins: () => Promise<any[]>;
        getActiveCoins: () => Promise<any[]>;
        getCoin: (_: any, { id }: {
            id: string;
        }) => Promise<any>;
        getCoinBySymbol: (_: any, { symbol }: {
            symbol: string;
        }) => Promise<any>;
    };
    Mutation: {
        createCoin: (_: any, { data }: {
            data: any;
        }, context: AuthContext) => Promise<{
            success: boolean;
            message: string;
            data: null;
        } | {
            success: boolean;
            message: string;
            data?: undefined;
        }>;
        updateCoin: (_: any, { id, data }: {
            id: string;
            data: any;
        }, context: AuthContext) => Promise<{
            success: boolean;
            message: string;
            data: import("mongoose").Document<unknown, {}, {
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
            };
        }>;
        deleteCoin: (_: any, { id }: {
            id: string;
        }, context: AuthContext) => Promise<{
            success: boolean;
            message: string;
            data: null;
        }>;
        toggleCoinStatus: (_: any, { id, isActive }: {
            id: string;
            isActive: boolean;
        }, context: AuthContext) => Promise<{
            success: boolean;
            message: string;
            data: null;
        } | {
            success: boolean;
            message: string;
            data?: undefined;
        }>;
    };
};
export default coinResolvers;
//# sourceMappingURL=coin.resolvers.d.ts.map