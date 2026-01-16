import { AuthContext } from '../../middleware/auth.js';
declare const settingsResolvers: {
    Query: {
        getPlatformSettings: () => Promise<import("mongoose").Document<unknown, {}, {
            withdrawalsEnabled: boolean;
            depositWallet?: string | null | undefined;
        } & import("mongoose").DefaultTimestampProps, {}, {
            timestamps: true;
        }> & {
            withdrawalsEnabled: boolean;
            depositWallet?: string | null | undefined;
        } & import("mongoose").DefaultTimestampProps & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        }>;
    };
    Mutation: {
        updatePlatformSettings: (_: any, { data }: {
            data: {
                depositWallet: string;
                withdrawalsEnabled: boolean;
            };
        }, context: AuthContext) => Promise<{
            success: boolean;
            message: string;
        }>;
    };
};
export default settingsResolvers;
//# sourceMappingURL=settings.resolvers.d.ts.map