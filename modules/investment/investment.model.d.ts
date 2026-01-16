import mongoose from 'mongoose';
declare const Investment: mongoose.Model<{
    userId: mongoose.Types.ObjectId;
    coinId: mongoose.Types.ObjectId;
    coinAmount: number;
    investedAmount: number;
    currentValue: number;
    profitLoss: number;
    profitLossPercentage: number;
} & mongoose.DefaultTimestampProps, {}, {}, {}, mongoose.Document<unknown, {}, {
    userId: mongoose.Types.ObjectId;
    coinId: mongoose.Types.ObjectId;
    coinAmount: number;
    investedAmount: number;
    currentValue: number;
    profitLoss: number;
    profitLossPercentage: number;
} & mongoose.DefaultTimestampProps, {}, {
    timestamps: true;
}> & {
    userId: mongoose.Types.ObjectId;
    coinId: mongoose.Types.ObjectId;
    coinAmount: number;
    investedAmount: number;
    currentValue: number;
    profitLoss: number;
    profitLossPercentage: number;
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
    investedAmount: number;
    currentValue: number;
    profitLoss: number;
    profitLossPercentage: number;
} & mongoose.DefaultTimestampProps, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    userId: mongoose.Types.ObjectId;
    coinId: mongoose.Types.ObjectId;
    coinAmount: number;
    investedAmount: number;
    currentValue: number;
    profitLoss: number;
    profitLossPercentage: number;
} & mongoose.DefaultTimestampProps>, {}, mongoose.ResolveSchemaOptions<{
    timestamps: true;
}>> & mongoose.FlatRecord<{
    userId: mongoose.Types.ObjectId;
    coinId: mongoose.Types.ObjectId;
    coinAmount: number;
    investedAmount: number;
    currentValue: number;
    profitLoss: number;
    profitLossPercentage: number;
} & mongoose.DefaultTimestampProps> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>>;
export default Investment;
//# sourceMappingURL=investment.model.d.ts.map