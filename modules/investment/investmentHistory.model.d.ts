import mongoose from 'mongoose';
declare const InvestmentHistory: mongoose.Model<{
    userId: mongoose.Types.ObjectId;
    coinId: mongoose.Types.ObjectId;
    coinAmount: number;
    investmentId: mongoose.Types.ObjectId;
    action: "reduce" | "buy" | "sell" | "add";
    usdAmount: number;
    coinPrice: number;
    notes?: string | null | undefined;
    performedBy?: mongoose.Types.ObjectId | null | undefined;
} & mongoose.DefaultTimestampProps, {}, {}, {}, mongoose.Document<unknown, {}, {
    userId: mongoose.Types.ObjectId;
    coinId: mongoose.Types.ObjectId;
    coinAmount: number;
    investmentId: mongoose.Types.ObjectId;
    action: "reduce" | "buy" | "sell" | "add";
    usdAmount: number;
    coinPrice: number;
    notes?: string | null | undefined;
    performedBy?: mongoose.Types.ObjectId | null | undefined;
} & mongoose.DefaultTimestampProps, {}, {
    timestamps: true;
}> & {
    userId: mongoose.Types.ObjectId;
    coinId: mongoose.Types.ObjectId;
    coinAmount: number;
    investmentId: mongoose.Types.ObjectId;
    action: "reduce" | "buy" | "sell" | "add";
    usdAmount: number;
    coinPrice: number;
    notes?: string | null | undefined;
    performedBy?: mongoose.Types.ObjectId | null | undefined;
} & mongoose.DefaultTimestampProps & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
}, {
    userId: mongoose.Types.ObjectId;
    coinId: mongoose.Types.ObjectId;
    coinAmount: number;
    investmentId: mongoose.Types.ObjectId;
    action: "reduce" | "buy" | "sell" | "add";
    usdAmount: number;
    coinPrice: number;
    notes?: string | null | undefined;
    performedBy?: mongoose.Types.ObjectId | null | undefined;
} & mongoose.DefaultTimestampProps, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    userId: mongoose.Types.ObjectId;
    coinId: mongoose.Types.ObjectId;
    coinAmount: number;
    investmentId: mongoose.Types.ObjectId;
    action: "reduce" | "buy" | "sell" | "add";
    usdAmount: number;
    coinPrice: number;
    notes?: string | null | undefined;
    performedBy?: mongoose.Types.ObjectId | null | undefined;
} & mongoose.DefaultTimestampProps>, {}, mongoose.ResolveSchemaOptions<{
    timestamps: true;
}>> & mongoose.FlatRecord<{
    userId: mongoose.Types.ObjectId;
    coinId: mongoose.Types.ObjectId;
    coinAmount: number;
    investmentId: mongoose.Types.ObjectId;
    action: "reduce" | "buy" | "sell" | "add";
    usdAmount: number;
    coinPrice: number;
    notes?: string | null | undefined;
    performedBy?: mongoose.Types.ObjectId | null | undefined;
} & mongoose.DefaultTimestampProps> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>>;
export default InvestmentHistory;
//# sourceMappingURL=investmentHistory.model.d.ts.map