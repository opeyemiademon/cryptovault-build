import mongoose from 'mongoose';
declare const Message: mongoose.Model<{
    senderId: mongoose.Types.ObjectId;
    recipientType: "individual" | "broadcast";
    title: string;
    content: string;
    isRead: boolean;
    recipientId?: mongoose.Types.ObjectId | null | undefined;
    readAt?: NativeDate | null | undefined;
} & mongoose.DefaultTimestampProps, {}, {}, {}, mongoose.Document<unknown, {}, {
    senderId: mongoose.Types.ObjectId;
    recipientType: "individual" | "broadcast";
    title: string;
    content: string;
    isRead: boolean;
    recipientId?: mongoose.Types.ObjectId | null | undefined;
    readAt?: NativeDate | null | undefined;
} & mongoose.DefaultTimestampProps, {}, {
    timestamps: true;
}> & {
    senderId: mongoose.Types.ObjectId;
    recipientType: "individual" | "broadcast";
    title: string;
    content: string;
    isRead: boolean;
    recipientId?: mongoose.Types.ObjectId | null | undefined;
    readAt?: NativeDate | null | undefined;
} & mongoose.DefaultTimestampProps & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
}, {
    senderId: mongoose.Types.ObjectId;
    recipientType: "individual" | "broadcast";
    title: string;
    content: string;
    isRead: boolean;
    recipientId?: mongoose.Types.ObjectId | null | undefined;
    readAt?: NativeDate | null | undefined;
} & mongoose.DefaultTimestampProps, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    senderId: mongoose.Types.ObjectId;
    recipientType: "individual" | "broadcast";
    title: string;
    content: string;
    isRead: boolean;
    recipientId?: mongoose.Types.ObjectId | null | undefined;
    readAt?: NativeDate | null | undefined;
} & mongoose.DefaultTimestampProps>, {}, mongoose.ResolveSchemaOptions<{
    timestamps: true;
}>> & mongoose.FlatRecord<{
    senderId: mongoose.Types.ObjectId;
    recipientType: "individual" | "broadcast";
    title: string;
    content: string;
    isRead: boolean;
    recipientId?: mongoose.Types.ObjectId | null | undefined;
    readAt?: NativeDate | null | undefined;
} & mongoose.DefaultTimestampProps> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>>;
export default Message;
//# sourceMappingURL=message.model.d.ts.map