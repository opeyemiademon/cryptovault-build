import User from './user.model.js';
export const findUserById = async (id) => {
    if (!id) {
        throw new Error('User ID is required');
    }
    const user = await User.findById(id).select('-password');
    if (!user) {
        throw new Error('User not found');
    }
    return user;
};
//# sourceMappingURL=user.service.js.map