import { AuthContext } from '../../middleware/auth.js';
declare const messageResolvers: {
    Query: {
        getAllMessages: (_: any, __: any, context: AuthContext) => Promise<(import("mongoose").Document<unknown, {}, {
            senderId: import("mongoose").Types.ObjectId;
            recipientType: "individual" | "broadcast";
            title: string;
            content: string;
            isRead: boolean;
            recipientId?: import("mongoose").Types.ObjectId | null | undefined;
            readAt?: NativeDate | null | undefined;
        } & import("mongoose").DefaultTimestampProps, {}, {
            timestamps: true;
        }> & {
            senderId: import("mongoose").Types.ObjectId;
            recipientType: "individual" | "broadcast";
            title: string;
            content: string;
            isRead: boolean;
            recipientId?: import("mongoose").Types.ObjectId | null | undefined;
            readAt?: NativeDate | null | undefined;
        } & import("mongoose").DefaultTimestampProps & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        })[]>;
        getMessage: (_: any, { id }: {
            id: string;
        }, context: AuthContext) => Promise<(import("mongoose").Document<unknown, {}, {
            senderId: import("mongoose").Types.ObjectId;
            recipientType: "individual" | "broadcast";
            title: string;
            content: string;
            isRead: boolean;
            recipientId?: import("mongoose").Types.ObjectId | null | undefined;
            readAt?: NativeDate | null | undefined;
        } & import("mongoose").DefaultTimestampProps, {}, {
            timestamps: true;
        }> & {
            senderId: import("mongoose").Types.ObjectId;
            recipientType: "individual" | "broadcast";
            title: string;
            content: string;
            isRead: boolean;
            recipientId?: import("mongoose").Types.ObjectId | null | undefined;
            readAt?: NativeDate | null | undefined;
        } & import("mongoose").DefaultTimestampProps & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        }) | null>;
        getUserMessages: (_: any, { userId }: {
            userId: string;
        }, context: AuthContext) => Promise<(import("mongoose").Document<unknown, {}, {
            senderId: import("mongoose").Types.ObjectId;
            recipientType: "individual" | "broadcast";
            title: string;
            content: string;
            isRead: boolean;
            recipientId?: import("mongoose").Types.ObjectId | null | undefined;
            readAt?: NativeDate | null | undefined;
        } & import("mongoose").DefaultTimestampProps, {}, {
            timestamps: true;
        }> & {
            senderId: import("mongoose").Types.ObjectId;
            recipientType: "individual" | "broadcast";
            title: string;
            content: string;
            isRead: boolean;
            recipientId?: import("mongoose").Types.ObjectId | null | undefined;
            readAt?: NativeDate | null | undefined;
        } & import("mongoose").DefaultTimestampProps & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        })[]>;
        getUnreadMessages: (_: any, { userId }: {
            userId: string;
        }, context: AuthContext) => Promise<(import("mongoose").Document<unknown, {}, {
            senderId: import("mongoose").Types.ObjectId;
            recipientType: "individual" | "broadcast";
            title: string;
            content: string;
            isRead: boolean;
            recipientId?: import("mongoose").Types.ObjectId | null | undefined;
            readAt?: NativeDate | null | undefined;
        } & import("mongoose").DefaultTimestampProps, {}, {
            timestamps: true;
        }> & {
            senderId: import("mongoose").Types.ObjectId;
            recipientType: "individual" | "broadcast";
            title: string;
            content: string;
            isRead: boolean;
            recipientId?: import("mongoose").Types.ObjectId | null | undefined;
            readAt?: NativeDate | null | undefined;
        } & import("mongoose").DefaultTimestampProps & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        })[]>;
    };
    Message: {
        sender: (parent: any) => Promise<(import("mongoose").Document<unknown, {}, {
            name: string;
            email: string;
            password: string;
            role: "user" | "admin";
            walletBalance: number;
            portfolioValue: number;
            isEmailVerified: boolean;
            isActive: boolean;
            isDeleted: boolean;
            resetPasswordToken?: string | null | undefined;
            resetPasswordExpires?: NativeDate | null | undefined;
        } & import("mongoose").DefaultTimestampProps, {}, {
            timestamps: true;
        }> & {
            name: string;
            email: string;
            password: string;
            role: "user" | "admin";
            walletBalance: number;
            portfolioValue: number;
            isEmailVerified: boolean;
            isActive: boolean;
            isDeleted: boolean;
            resetPasswordToken?: string | null | undefined;
            resetPasswordExpires?: NativeDate | null | undefined;
        } & import("mongoose").DefaultTimestampProps & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        }) | null>;
        recipient: (parent: any) => Promise<(import("mongoose").Document<unknown, {}, {
            name: string;
            email: string;
            password: string;
            role: "user" | "admin";
            walletBalance: number;
            portfolioValue: number;
            isEmailVerified: boolean;
            isActive: boolean;
            isDeleted: boolean;
            resetPasswordToken?: string | null | undefined;
            resetPasswordExpires?: NativeDate | null | undefined;
        } & import("mongoose").DefaultTimestampProps, {}, {
            timestamps: true;
        }> & {
            name: string;
            email: string;
            password: string;
            role: "user" | "admin";
            walletBalance: number;
            portfolioValue: number;
            isEmailVerified: boolean;
            isActive: boolean;
            isDeleted: boolean;
            resetPasswordToken?: string | null | undefined;
            resetPasswordExpires?: NativeDate | null | undefined;
        } & import("mongoose").DefaultTimestampProps & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        }) | null>;
    };
    Mutation: {
        createMessage: (_: any, { data }: {
            data: any;
        }, context: AuthContext) => Promise<{
            success: boolean;
            message: string;
            data: import("mongoose").Document<unknown, {}, {
                senderId: import("mongoose").Types.ObjectId;
                recipientType: "individual" | "broadcast";
                title: string;
                content: string;
                isRead: boolean;
                recipientId?: import("mongoose").Types.ObjectId | null | undefined;
                readAt?: NativeDate | null | undefined;
            } & import("mongoose").DefaultTimestampProps, {}, {
                timestamps: true;
            }> & {
                senderId: import("mongoose").Types.ObjectId;
                recipientType: "individual" | "broadcast";
                title: string;
                content: string;
                isRead: boolean;
                recipientId?: import("mongoose").Types.ObjectId | null | undefined;
                readAt?: NativeDate | null | undefined;
            } & import("mongoose").DefaultTimestampProps & {
                _id: import("mongoose").Types.ObjectId;
            } & {
                __v: number;
            };
        }>;
        markMessageAsRead: (_: any, { id }: {
            id: string;
        }, context: AuthContext) => Promise<{
            success: boolean;
            message: string;
            data: import("mongoose").Document<unknown, {}, {
                senderId: import("mongoose").Types.ObjectId;
                recipientType: "individual" | "broadcast";
                title: string;
                content: string;
                isRead: boolean;
                recipientId?: import("mongoose").Types.ObjectId | null | undefined;
                readAt?: NativeDate | null | undefined;
            } & import("mongoose").DefaultTimestampProps, {}, {
                timestamps: true;
            }> & {
                senderId: import("mongoose").Types.ObjectId;
                recipientType: "individual" | "broadcast";
                title: string;
                content: string;
                isRead: boolean;
                recipientId?: import("mongoose").Types.ObjectId | null | undefined;
                readAt?: NativeDate | null | undefined;
            } & import("mongoose").DefaultTimestampProps & {
                _id: import("mongoose").Types.ObjectId;
            } & {
                __v: number;
            };
        }>;
        deleteMessage: (_: any, { id }: {
            id: string;
        }, context: AuthContext) => Promise<{
            success: boolean;
            message: string;
            data: null;
        }>;
    };
};
export default messageResolvers;
//# sourceMappingURL=message.resolvers.d.ts.map