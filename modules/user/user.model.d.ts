import mongoose from 'mongoose';
declare const User: mongoose.Model<{
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
} & mongoose.DefaultTimestampProps, {}, {}, {}, mongoose.Document<unknown, {}, {
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
} & mongoose.DefaultTimestampProps, {}, {
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
} & mongoose.DefaultTimestampProps & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
}, {
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
} & mongoose.DefaultTimestampProps, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
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
} & mongoose.DefaultTimestampProps>, {}, mongoose.ResolveSchemaOptions<{
    timestamps: true;
}>> & mongoose.FlatRecord<{
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
} & mongoose.DefaultTimestampProps> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>>;
export default User;
//# sourceMappingURL=user.model.d.ts.map