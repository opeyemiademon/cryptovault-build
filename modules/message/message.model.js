import mongoose from 'mongoose';
const { Schema } = mongoose;
const messageSchema = new Schema({
    senderId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    recipientId: { type: Schema.Types.ObjectId, ref: 'User' },
    recipientType: { type: String, enum: ['individual', 'broadcast'], default: 'individual' },
    title: { type: String, required: true },
    content: { type: String, required: true },
    isRead: { type: Boolean, default: false },
    readAt: { type: Date },
}, { timestamps: true });
messageSchema.index({ recipientId: 1 });
messageSchema.index({ senderId: 1 });
messageSchema.index({ isRead: 1 });
messageSchema.index({ createdAt: -1 });
const Message = mongoose.model('Message', messageSchema);
export default Message;
//# sourceMappingURL=message.model.js.map