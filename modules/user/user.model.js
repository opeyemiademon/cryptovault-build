import mongoose from 'mongoose';
const { Schema } = mongoose;
const userSchema = new Schema({
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, trim: true },
    password: { type: String, required: true },
    role: { type: String, enum: ['user', 'admin'], default: 'user' },
    walletBalance: { type: Number, default: 0, min: 0 },
    portfolioValue: { type: Number, default: 0, min: 0 },
    isEmailVerified: { type: Boolean, default: false },
    isActive: { type: Boolean, default: true },
    isDeleted: { type: Boolean, default: false },
    resetPasswordToken: String,
    resetPasswordExpires: Date,
}, { timestamps: true });
const User = mongoose.model('User', userSchema);
export default User;
//# sourceMappingURL=user.model.js.map