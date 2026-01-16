import { AuthContext } from '../../middleware/auth.js';
declare const adminResolvers: {
    Query: {
        getCurrentAdmin: (_: any, __: any, context: AuthContext) => Promise<{
            id: import("mongoose").Types.ObjectId;
            name: string;
            email: string;
            role: "admin";
            isActive: boolean;
            lastLogin: NativeDate | null | undefined;
            createdAt: NativeDate;
            updatedAt: NativeDate;
        }>;
        getAllAdmins: (_: any, __: any, context: AuthContext) => Promise<(import("mongoose").Document<unknown, {}, {
            name: string;
            email: string;
            password: string;
            role: "admin";
            isActive: boolean;
            isDeleted: boolean;
            resetPasswordToken?: string | null | undefined;
            resetPasswordExpires?: NativeDate | null | undefined;
            lastLogin?: NativeDate | null | undefined;
        } & import("mongoose").DefaultTimestampProps, {}, {
            timestamps: true;
        }> & {
            name: string;
            email: string;
            password: string;
            role: "admin";
            isActive: boolean;
            isDeleted: boolean;
            resetPasswordToken?: string | null | undefined;
            resetPasswordExpires?: NativeDate | null | undefined;
            lastLogin?: NativeDate | null | undefined;
        } & import("mongoose").DefaultTimestampProps & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        })[]>;
        getAdmin: (_: any, { id }: {
            id: string;
        }, context: AuthContext) => Promise<{
            id: import("mongoose").Types.ObjectId;
            name: string;
            email: string;
            role: "admin";
            isActive: boolean;
            lastLogin: NativeDate | null | undefined;
            createdAt: NativeDate;
            updatedAt: NativeDate;
        }>;
    };
    Mutation: {
        adminLogin: (_: any, { data }: {
            data: any;
        }) => Promise<{
            token: string;
            admin: {
                id: import("mongoose").Types.ObjectId;
                name: string;
            };
        }>;
        createAdmin: (_: any, { name, email, password }: {
            name: string;
            email: string;
            password: string;
        }, context: AuthContext) => Promise<{
            success: boolean;
            message: string;
            data: {
                id: import("mongoose").Types.ObjectId;
                name: string;
                email: string;
                role: "admin";
                isActive: boolean;
                lastLogin: NativeDate | null | undefined;
                createdAt: NativeDate;
                updatedAt: NativeDate;
            };
        }>;
        toggleAdminStatus: (_: any, { adminId, isActive }: {
            adminId: string;
            isActive: boolean;
        }, context: AuthContext) => Promise<{
            success: boolean;
            message: string;
            data: {
                id: import("mongoose").Types.ObjectId;
                name: string;
                email: string;
                role: "admin";
                isActive: boolean;
                lastLogin: NativeDate | null | undefined;
                createdAt: NativeDate;
                updatedAt: NativeDate;
            };
        }>;
    };
};
export default adminResolvers;
//# sourceMappingURL=admin.resolvers.d.ts.map