import mongoose from 'mongoose';
const { Schema } = mongoose;
const investmentSchema = new Schema({
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    coinId: { type: Schema.Types.ObjectId, ref: 'Coin', required: true },
    coinAmount: { type: Number, required: true, min: 0 },
    investedAmount: { type: Number, required: true, min: 0 },
    currentValue: { type: Number, default: 0, min: 0 },
    profitLoss: { type: Number, default: 0 },
    profitLossPercentage: { type: Number, default: 0 },
}, { timestamps: true });
const Investment = mongoose.model('Investment', investmentSchema);
export default Investment;
//# sourceMappingURL=investment.model.js.map