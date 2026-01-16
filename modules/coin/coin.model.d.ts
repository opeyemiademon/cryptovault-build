import mongoose from 'mongoose';
declare const Coin: mongoose.Model<{
    symbol: string;
    name: string;
    isActive: boolean;
    coingeckoId: string;
    priceApiUrl: string;
    currentPrice: number;
    price_change_24h: number;
    iconUrl?: string | null | undefined;
} & mongoose.DefaultTimestampProps, {}, {}, {}, mongoose.Document<unknown, {}, {
    symbol: string;
    name: string;
    isActive: boolean;
    coingeckoId: string;
    priceApiUrl: string;
    currentPrice: number;
    price_change_24h: number;
    iconUrl?: string | null | undefined;
} & mongoose.DefaultTimestampProps, {}, {
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
} & mongoose.DefaultTimestampProps & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
}, {
    symbol: string;
    name: string;
    isActive: boolean;
    coingeckoId: string;
    priceApiUrl: string;
    currentPrice: number;
    price_change_24h: number;
    iconUrl?: string | null | undefined;
} & mongoose.DefaultTimestampProps, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    symbol: string;
    name: string;
    isActive: boolean;
    coingeckoId: string;
    priceApiUrl: string;
    currentPrice: number;
    price_change_24h: number;
    iconUrl?: string | null | undefined;
} & mongoose.DefaultTimestampProps>, {}, mongoose.ResolveSchemaOptions<{
    timestamps: true;
}>> & mongoose.FlatRecord<{
    symbol: string;
    name: string;
    isActive: boolean;
    coingeckoId: string;
    priceApiUrl: string;
    currentPrice: number;
    price_change_24h: number;
    iconUrl?: string | null | undefined;
} & mongoose.DefaultTimestampProps> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>>;
export default Coin;
//# sourceMappingURL=coin.model.d.ts.map