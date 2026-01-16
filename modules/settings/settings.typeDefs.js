import { gql } from 'graphql-tag';
const settingsTypeDefs = gql `
  type PlatformSettings {
    id: ID!
    depositWallet: String!
    withdrawalsEnabled: Boolean!
    createdAt: String
    updatedAt: String
  }

  type PlatformSettingsResponse {
    success: Boolean!
    message: String!
    data: PlatformSettings
  }

  input UpdatePlatformSettingsInput {
    depositWallet: String!
    withdrawalsEnabled: Boolean!
  }

  type Query {
    getPlatformSettings: PlatformSettings!
  }

  type Mutation {
    updatePlatformSettings(data: UpdatePlatformSettingsInput!): PlatformSettingsResponse!
  }
`;
export default settingsTypeDefs;
//# sourceMappingURL=settings.typeDefs.js.map