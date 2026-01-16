export declare const findUserById: (id: string) => Promise<import("mongoose").Document<unknown, {}, {
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
}>;
//# sourceMappingURL=user.service.d.ts.map