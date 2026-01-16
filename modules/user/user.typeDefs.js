import { gql } from 'graphql-tag';
const userTypeDefs = gql `
  type User {
    id: ID!
    name: String!
    email: String!
    role: String!
    walletBalance: Float!
    portfolioValue: Float!
    isEmailVerified: Boolean!
    isActive: Boolean!
    createdAt: String!
    updatedAt: String!
  }

  type AuthPayload {
    token: String!
    user: User!
  }

  type UserResponsePayload {
    success: Boolean!
    message: String!
    data: User
  } 

  type AdminDashboardStats {
    totalUsers: Int!
    totalPortfolioValue: Float!
    totalWalletBalance: Float!
    pendingDeposits: Int!
    pendingWithdrawals: Int!
  }

  type Query {
    getAllUsers: [User!]!
    getUser(id: ID!): User
    getUserByEmail(email: String!): User
    me: User
    getAdminDashboardStats: AdminDashboardStats!
  }

  input RegisterInput {
    name: String!
    email: String!
    role: String
    password: String!
  }

  input LoginInput {
    email: String!
    password: String!
  }

  input UpdateUserInput {
    name: String
    email: String
    walletBalance: Float
    portfolioValue: Float
    isActive: Boolean
  }

  type Mutation {
    register(data: RegisterInput!): AuthPayload!
    create_account(data: RegisterInput!): AuthPayload!
    login(data: LoginInput!): AuthPayload!
    updateUser(id: ID!, data: UpdateUserInput!): UserResponsePayload!
    changeUserPassword(id: ID!, currentPassword: String!, newPassword: String!): UserResponsePayload!
    deleteUser(id: ID!): UserResponsePayload!
    creditUserWallet(userId: ID!, amount: Float!): UserResponsePayload!
    debitUserWallet(userId: ID!, amount: Float!): UserResponsePayload!
  }
`;
export default userTypeDefs;
//# sourceMappingURL=user.typeDefs.js.map