import { gql } from 'graphql-tag';
const transactionTypeDefs = gql `
  type Transaction {
    id: ID!
    userId: ID!
    user: User
    type: String!
    coinId: ID
    coin: Coin
    amount: Float!
    coinAmount: Float
    withdrawSource: String
    bankName: String
    accountNumber: String
    shortCode: String
    status: String!
    walletAddress: String
    transactionHash: String
    notes: String
    processedBy: ID
    processedAt: String
    createdAt: String!
    updatedAt: String!
  }

  type TransactionResponsePayload {
    success: Boolean!
    message: String!
    data: Transaction
  }

  type Query {
    getAllTransactions: [Transaction!]!
    getTransaction(id: ID!): Transaction
    getUserTransactions(userId: ID!): [Transaction!]!
    getUserDepositRequests(userId: ID!): [Transaction!]!
    getTransactionsByType(type: String!): [Transaction!]!
    getTransactionsByStatus(status: String!): [Transaction!]!
    getPendingDeposits: [Transaction!]!
    getPendingWithdrawals: [Transaction!]!
  }

  input CreateTransactionInput {
    userId: ID!
    type: String!
    coinId: ID
    amount: Float!
    coinAmount: Float
    status: String
    walletAddress: String
    notes: String
  }

  input SubmitDepositRequestInput {
    userId: ID!
    amount: Float!
    walletAddress: String
    notes: String
  }

  input SubmitWithdrawalRequestInput {
    userId: ID!
    withdrawSource: String!
    amount: Float!
    coinId: ID
    coinAmount: Float
    bankName: String
    accountNumber: String
    shortCode: String
    notes: String
  }

  input UpdateTransactionInput {
    status: String
    transactionHash: String
    notes: String
  }

  type Mutation {
    createTransaction(data: CreateTransactionInput!): TransactionResponsePayload!
    submitDepositRequest(data: SubmitDepositRequestInput!): TransactionResponsePayload!
    submitWithdrawalRequest(data: SubmitWithdrawalRequestInput!): TransactionResponsePayload!
    updateTransaction(id: ID!, data: UpdateTransactionInput!): TransactionResponsePayload!
    approveTransaction(id: ID!): TransactionResponsePayload!
    rejectTransaction(id: ID!, reason: String): TransactionResponsePayload!
    deleteTransaction(id: ID!): TransactionResponsePayload!
  }
`;
export default transactionTypeDefs;
//# sourceMappingURL=transaction.typeDefs.js.map