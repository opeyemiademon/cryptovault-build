import mongoose from 'mongoose';
declare const PlatformSettings: mongoose.Model<{
    withdrawalsEnabled: boolean;
    depositWallet?: string | null | undefined;
} & mongoose.DefaultTimestampProps, {}, {}, {}, mongoose.Document<unknown, {}, {
    withdrawalsEnabled: boolean;
    depositWallet?: string | null | undefined;
} & mongoose.DefaultTimestampProps, {}, {
    timestamps: true;
}> & {
    withdrawalsEnabled: boolean;
    depositWallet?: string | null | undefined;
} & mongoose.DefaultTimestampProps & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
}, {
    withdrawalsEnabled: boolean;
    depositWallet?: string | null | undefined;
} & mongoose.DefaultTimestampProps, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    withdrawalsEnabled: boolean;
    depositWallet?: string | null | undefined;
} & mongoose.DefaultTimestampProps>, {}, mongoose.ResolveSchemaOptions<{
    timestamps: true;
}>> & mongoose.FlatRecord<{
    withdrawalsEnabled: boolean;
    depositWallet?: string | null | undefined;
} & mongoose.DefaultTimestampProps> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>>;
export default PlatformSettings;
//# sourceMappingURL=settings.model.d.ts.map