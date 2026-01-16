import PlatformSettings from './settings.model.js';
const ensureSettings = async () => {
    let settings = await PlatformSettings.findOne();
    if (!settings) {
        settings = await PlatformSettings.create({
            depositWallet: '',
            withdrawalsEnabled: true,
        });
    }
    return settings;
};
const settingsResolvers = {
    Query: {
        getPlatformSettings: async () => {
            return ensureSettings();
        },
    },
    Mutation: {
        updatePlatformSettings: async (_, { data }, context) => {
            if (!data.depositWallet?.trim()) {
                throw new Error('Deposit wallet address is required');
            }
            const settings = await ensureSettings();
            settings.depositWallet = data.depositWallet.trim();
            settings.withdrawalsEnabled = data.withdrawalsEnabled;
            await settings.save();
            return {
                success: true,
                message: 'Platform settings updated successfully',
            };
        },
    },
};
export default settingsResolvers;
//# sourceMappingURL=settings.resolvers.js.map