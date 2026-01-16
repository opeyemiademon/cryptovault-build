import Message from './message.model.js';
import User from '../user/user.model.js';
import { requireAuth, requireAdmin } from '../../middleware/auth.js';
const messageResolvers = {
    Query: {
        getAllMessages: async (_, __, context) => {
            requireAdmin(context);
            return await Message.find().populate('senderId').populate('recipientId').sort({ createdAt: -1 });
        },
        getMessage: async (_, { id }, context) => {
            requireAuth(context);
            return await Message.findById(id).populate('senderId').populate('recipientId');
        },
        getUserMessages: async (_, { userId }, context) => {
            requireAuth(context);
            return await Message.find({ recipientId: userId }).populate('senderId').sort({ createdAt: -1 });
        },
        getUnreadMessages: async (_, { userId }, context) => {
            requireAuth(context);
            return await Message.find({ recipientId: userId, isRead: false }).populate('senderId').sort({ createdAt: -1 });
        },
    },
    Message: {
        sender: async (parent) => {
            return await User.findById(parent.senderId).select('-password');
        },
        recipient: async (parent) => {
            if (!parent.recipientId)
                return null;
            return await User.findById(parent.recipientId).select('-password');
        },
    },
    Mutation: {
        createMessage: async (_, { data }, context) => {
            requireAuth(context);
            const message = await Message.create({
                ...data,
                senderId: context.user?.id,
            });
            return {
                success: true,
                message: 'Message sent successfully',
                data: message,
            };
        },
        markMessageAsRead: async (_, { id }, context) => {
            requireAuth(context);
            const message = await Message.findByIdAndUpdate(id, { isRead: true, readAt: new Date() }, { new: true });
            if (!message) {
                throw new Error('Message not found');
            }
            return {
                success: true,
                message: 'Message marked as read',
                data: message,
            };
        },
        deleteMessage: async (_, { id }, context) => {
            requireAuth(context);
            const message = await Message.findByIdAndDelete(id);
            if (!message) {
                throw new Error('Message not found');
            }
            return {
                success: true,
                message: 'Message deleted successfully',
                data: null,
            };
        },
    },
};
export default messageResolvers;
//# sourceMappingURL=message.resolvers.js.map