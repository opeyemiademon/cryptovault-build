import { makeExecutableSchema } from '@graphql-tools/schema';
import userTypeDefs from './modules/user/user.typeDefs.js';
import userResolvers from './modules/user/user.resolvers.js';
import adminTypeDefs from './modules/admin/admin.typeDefs.js';
import adminResolvers from './modules/admin/admin.resolvers.js';
import coinTypeDefs from './modules/coin/coin.typeDefs.js';
import coinResolvers from './modules/coin/coin.resolvers.js';
import transactionTypeDefs from './modules/transaction/transaction.typeDefs.js';
import transactionResolvers from './modules/transaction/transaction.resolvers.js';
import messageTypeDefs from './modules/message/message.typeDefs.js';
import messageResolvers from './modules/message/message.resolvers.js';
import investmentTypeDefs from './modules/investment/investment.typeDefs.js';
import investmentResolvers from './modules/investment/investment.resolvers.js';
import settingsTypeDefs from './modules/settings/settings.typeDefs.js';
import settingsResolvers from './modules/settings/settings.resolvers.js';
export const schema = makeExecutableSchema({
    typeDefs: [
        userTypeDefs,
        adminTypeDefs,
        coinTypeDefs,
        transactionTypeDefs,
        messageTypeDefs,
        investmentTypeDefs,
        settingsTypeDefs,
    ],
    resolvers: [
        userResolvers,
        adminResolvers,
        coinResolvers,
        transactionResolvers,
        messageResolvers,
        investmentResolvers,
        settingsResolvers,
    ]
});
//# sourceMappingURL=schema.js.map