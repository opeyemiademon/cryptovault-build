import mongoose from 'mongoose';
const { Schema } = mongoose;
const investmentHistorySchema = new Schema({
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    coinId: { type: Schema.Types.ObjectId, ref: 'Coin', required: true },
    investmentId: { type: Schema.Types.ObjectId, ref: 'Investment', required: true },
    action: { type: String, enum: ['add', 'reduce', 'buy', 'sell'], required: true },
    coinAmount: { type: Number, required: true },
    usdAmount: { type: Number, required: true },
    coinPrice: { type: Number, required: true },
    performedBy: { type: Schema.Types.ObjectId, ref: 'User' },
    notes: { type: String },
}, { timestamps: true });
investmentHistorySchema.index({ userId: 1, coinId: 1, createdAt: -1 });
investmentHistorySchema.index({ createdAt: -1 });
const InvestmentHistory = mongoose.model('InvestmentHistory', investmentHistorySchema);
export default InvestmentHistory;
//# sourceMappingURL=investmentHistory.model.js.map