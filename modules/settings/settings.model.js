import mongoose from 'mongoose';
const { Schema } = mongoose;
const platformSettingsSchema = new Schema({
    depositWallet: { type: String },
    withdrawalsEnabled: { type: Boolean, default: true },
}, { timestamps: true });
const PlatformSettings = mongoose.model('PlatformSettings', platformSettingsSchema);
export default PlatformSettings;
//# sourceMappingURL=settings.model.js.map