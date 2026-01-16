import mongoose from 'mongoose';
const { Schema } = mongoose;
const transactionSchema = new Schema({
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    type: { type: String, enum: ['deposit', 'withdrawal', 'buy', 'sell'], required: true },
    coinId: { type: Schema.Types.ObjectId, ref: 'Coin' },
    amount: { type: Number, required: true, min: 0 },
    coinAmount: { type: Number, min: 0 },
    withdrawSource: { type: String, enum: ['wallet', 'portfolio'] },
    bankName: { type: String },
    accountNumber: { type: String },
    shortCode: { type: String },
    status: { type: String, enum: ['pending', 'completed', 'rejected', 'failed'], default: 'pending' },
    walletAddress: { type: String },
    transactionHash: { type: String },
    notes: { type: String },
    processedBy: { type: Schema.Types.ObjectId, ref: 'User' },
    processedAt: { type: Date },
}, { timestamps: true });
const Transaction = mongoose.model('Transaction', transactionSchema);
export default Transaction;
//# sourceMappingURL=transaction.model.js.map