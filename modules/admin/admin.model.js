import mongoose from 'mongoose';
const { Schema } = mongoose;
const adminSchema = new Schema({
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, trim: true },
    password: { type: String, required: true },
    role: { type: String, enum: ['admin'], default: 'admin' },
    isActive: { type: Boolean, default: true },
    isDeleted: { type: Boolean, default: false },
    lastLogin: { type: Date },
    resetPasswordToken: String,
    resetPasswordExpires: Date,
}, { timestamps: true });
const Admin = mongoose.model('Admin', adminSchema);
export default Admin;
//# sourceMappingURL=admin.model.js.map