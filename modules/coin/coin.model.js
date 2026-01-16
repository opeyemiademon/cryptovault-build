import mongoose from 'mongoose';
const { Schema } = mongoose;
const coinSchema = new Schema({
    name: { type: String, required: true, trim: true },
    symbol: { type: String, required: true, unique: true, trim: true, uppercase: true },
    coingeckoId: { type: String, required: true, trim: true },
    priceApiUrl: { type: String, required: true, trim: true },
    currentPrice: { type: Number, required: true, min: 0 },
    price_change_24h: { type: Number, default: 0 },
    iconUrl: { type: String },
    isActive: { type: Boolean, default: true }
}, { timestamps: true });
const Coin = mongoose.model('Coin', coinSchema);
export default Coin;
//# sourceMappingURL=coin.model.js.map