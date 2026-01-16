import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import Admin from './admin.model.js';
import { TOKEN_SECRET, TOKEN_EXPIRY } from '../../utils/constants.js';
const adminResolvers = {
    Query: {
        getCurrentAdmin: async (_, __, context) => {
            const adminId = context.user?.id;
            if (!adminId) {
                throw new Error('Not authenticated');
            }
            const admin = await Admin.findById(adminId).select('-password');
            if (!admin) {
                throw new Error('Admin not found');
            }
            return {
                id: admin._id,
                name: admin.name,
                email: admin.email,
                role: admin.role,
                isActive: admin.isActive,
                lastLogin: admin.lastLogin,
                createdAt: admin.createdAt,
                updatedAt: admin.updatedAt,
            };
        },
        getAllAdmins: async (_, __, context) => {
            return await Admin.find({ isDeleted: false }).select('-password');
        },
        getAdmin: async (_, { id }, context) => {
            const admin = await Admin.findById(id).select('-password');
            if (!admin) {
                throw new Error('Admin not found');
            }
            return {
                id: admin._id,
                name: admin.name,
                email: admin.email,
                role: admin.role,
                isActive: admin.isActive,
                lastLogin: admin.lastLogin,
                createdAt: admin.createdAt,
                updatedAt: admin.updatedAt,
            };
        },
    },
    Mutation: {
        adminLogin: async (_, { data }) => {
            const { email, password } = data;
            const admin = await Admin.findOne({ email, isDeleted: false });
            if (!admin) {
                throw new Error('Invalid email or password');
            }
            const isValidPassword = await bcrypt.compare(password, admin.password);
            if (!isValidPassword) {
                throw new Error('Invalid email or password');
            }
            if (!admin.isActive) {
                throw new Error('Your admin account has been deactivated');
            }
            admin.lastLogin = new Date();
            await admin.save();
            const token = jwt.sign({ id: admin._id, role: 'admin' }, TOKEN_SECRET, { expiresIn: TOKEN_EXPIRY });
            return {
                token,
                admin: {
                    id: admin._id,
                    name: admin.name
                },
            };
        },
        createAdmin: async (_, { name, email, password }, context) => {
            const existingAdmin = await Admin.findOne({ email });
            if (existingAdmin) {
                throw new Error('Admin with this email already exists');
            }
            const hashedPassword = await bcrypt.hash(password, 10);
            const admin = await Admin.create({
                name,
                email,
                password: hashedPassword,
                role: 'admin',
            });
            return {
                success: true,
                message: 'Admin created successfully',
                data: {
                    id: admin._id,
                    name: admin.name,
                    email: admin.email,
                    role: admin.role,
                    isActive: admin.isActive,
                    lastLogin: admin.lastLogin,
                    createdAt: admin.createdAt,
                    updatedAt: admin.updatedAt,
                },
            };
        },
        toggleAdminStatus: async (_, { adminId, isActive }, context) => {
            const admin = await Admin.findById(adminId);
            if (!admin) {
                throw new Error('Admin not found');
            }
            if (admin.role !== 'admin') {
                throw new Error('User is not an admin');
            }
            admin.isActive = isActive;
            await admin.save();
            return {
                success: true,
                message: `Admin ${isActive ? 'enabled' : 'disabled'} successfully`,
                data: {
                    id: admin._id,
                    name: admin.name,
                    email: admin.email,
                    role: admin.role,
                    isActive: admin.isActive,
                    lastLogin: admin.lastLogin,
                    createdAt: admin.createdAt,
                    updatedAt: admin.updatedAt,
                },
            };
        },
    },
};
export default adminResolvers;
//# sourceMappingURL=admin.resolvers.js.map