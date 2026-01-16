import mongoose from 'mongoose';
declare const Transaction: mongoose.Model<{
    type: "deposit" | "withdrawal" | "buy" | "sell";
    userId: mongoose.Types.ObjectId;
    amount: number;
    status: "pending" | "completed" | "rejected" | "failed";
    coinId?: mongoose.Types.ObjectId | null | undefined;
    coinAmount?: number | null | undefined;
    withdrawSource?: "wallet" | "portfolio" | null | undefined;
    bankName?: string | null | undefined;
    accountNumber?: string | null | undefined;
    shortCode?: string | null | undefined;
    walletAddress?: string | null | undefined;
    transactionHash?: string | null | undefined;
    notes?: string | null | undefined;
    processedBy?: mongoose.Types.ObjectId | null | undefined;
    processedAt?: NativeDate | null | undefined;
} & mongoose.DefaultTimestampProps, {}, {}, {}, mongoose.Document<unknown, {}, {
    type: "deposit" | "withdrawal" | "buy" | "sell";
    userId: mongoose.Types.ObjectId;
    amount: number;
    status: "pending" | "completed" | "rejected" | "failed";
    coinId?: mongoose.Types.ObjectId | null | undefined;
    coinAmount?: number | null | undefined;
    withdrawSource?: "wallet" | "portfolio" | null | undefined;
    bankName?: string | null | undefined;
    accountNumber?: string | null | undefined;
    shortCode?: string | null | undefined;
    walletAddress?: string | null | undefined;
    transactionHash?: string | null | undefined;
    notes?: string | null | undefined;
    processedBy?: mongoose.Types.ObjectId | null | undefined;
    processedAt?: NativeDate | null | undefined;
} & mongoose.DefaultTimestampProps, {}, {
    timestamps: true;
}> & {
    type: "deposit" | "withdrawal" | "buy" | "sell";
    userId: mongoose.Types.ObjectId;
    amount: number;
    status: "pending" | "completed" | "rejected" | "failed";
    coinId?: mongoose.Types.ObjectId | null | undefined;
    coinAmount?: number | null | undefined;
    withdrawSource?: "wallet" | "portfolio" | null | undefined;
    bankName?: string | null | undefined;
    accountNumber?: string | null | undefined;
    shortCode?: string | null | undefined;
    walletAddress?: string | null | undefined;
    transactionHash?: string | null | undefined;
    notes?: string | null | undefined;
    processedBy?: mongoose.Types.ObjectId | null | undefined;
    processedAt?: NativeDate | null | undefined;
} & mongoose.DefaultTimestampProps & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
}, {
    type: "deposit" | "withdrawal" | "buy" | "sell";
    userId: mongoose.Types.ObjectId;
    amount: number;
    status: "pending" | "completed" | "rejected" | "failed";
    coinId?: mongoose.Types.ObjectId | null | undefined;
    coinAmount?: number | null | undefined;
    withdrawSource?: "wallet" | "portfolio" | null | undefined;
    bankName?: string | null | undefined;
    accountNumber?: string | null | undefined;
    shortCode?: string | null | undefined;
    walletAddress?: string | null | undefined;
    transactionHash?: string | null | undefined;
    notes?: string | null | undefined;
    processedBy?: mongoose.Types.ObjectId | null | undefined;
    processedAt?: NativeDate | null | undefined;
} & mongoose.DefaultTimestampProps, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    type: "deposit" | "withdrawal" | "buy" | "sell";
    userId: mongoose.Types.ObjectId;
    amount: number;
    status: "pending" | "completed" | "rejected" | "failed";
    coinId?: mongoose.Types.ObjectId | null | undefined;
    coinAmount?: number | null | undefined;
    withdrawSource?: "wallet" | "portfolio" | null | undefined;
    bankName?: string | null | undefined;
    accountNumber?: string | null | undefined;
    shortCode?: string | null | undefined;
    walletAddress?: string | null | undefined;
    transactionHash?: string | null | undefined;
    notes?: string | null | undefined;
    processedBy?: mongoose.Types.ObjectId | null | undefined;
    processedAt?: NativeDate | null | undefined;
} & mongoose.DefaultTimestampProps>, {}, mongoose.ResolveSchemaOptions<{
    timestamps: true;
}>> & mongoose.FlatRecord<{
    type: "deposit" | "withdrawal" | "buy" | "sell";
    userId: mongoose.Types.ObjectId;
    amount: number;
    status: "pending" | "completed" | "rejected" | "failed";
    coinId?: mongoose.Types.ObjectId | null | undefined;
    coinAmount?: number | null | undefined;
    withdrawSource?: "wallet" | "portfolio" | null | undefined;
    bankName?: string | null | undefined;
    accountNumber?: string | null | undefined;
    shortCode?: string | null | undefined;
    walletAddress?: string | null | undefined;
    transactionHash?: string | null | undefined;
    notes?: string | null | undefined;
    processedBy?: mongoose.Types.ObjectId | null | undefined;
    processedAt?: NativeDate | null | undefined;
} & mongoose.DefaultTimestampProps> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>>;
export default Transaction;
//# sourceMappingURL=transaction.model.d.ts.map