import { gql } from 'graphql-tag';
const investmentTypeDefs = gql `
  type Investment {
    id: ID!
    userId: ID!
    user: User
    coinId: ID!
    coin: Coin
    coinAmount: Float!
    investedAmount: Float!
    currentValue: Float!
    profitLoss: Float!
    profitLossPercentage: Float!
    createdAt: String!
    updatedAt: String!
  }

  type InvestmentHistory {
    id: ID!
    userId: ID!
    user: User
    coinId: ID!
    coin: Coin
    investmentId: ID!
    action: String!
    coinAmount: Float!
    usdAmount: Float!
    coinPrice: Float!
    performedBy: ID
    performedByUser: User
    notes: String
    createdAt: String!
    updatedAt: String!
  }

  type CoinPerformanceData {
    date: String!
    coins: [CoinPerformanceValue!]!
  }

  type CoinPerformanceValue {
    coinSymbol: String!
    coinName: String
    coinAmount: Float!
  }

  type InvestmentResponsePayload {
    success: Boolean!
    message: String!
    data: Investment
  }

  type Query {
    getAllInvestments: [Investment!]!
    getInvestment(id: ID!): Investment
    getUserInvestments(userId: ID!): [Investment!]!
    getUserInvestmentByCoin(userId: ID!, coinId: ID!): Investment
    getInvestmentHistory(userId: ID!, coinId: ID): [InvestmentHistory!]!
    getCoinPerformanceData(userId: ID!, days: Int): [CoinPerformanceData!]!
  }

  input CreateInvestmentInput {
    userId: ID!
    coinId: ID!
    coinAmount: Float!
    investedAmount: Float!
  }

  input UpdateInvestmentInput {
    coinAmount: Float
    investedAmount: Float
    currentValue: Float
    profitLoss: Float
    profitLossPercentage: Float
  }

  input BuyInvestmentInput {
    userId: ID!
    coinId: ID!
    amount: Float!
    notes: String
  }

  input AdminAddInvestmentInput {
    userId: ID!
    coinId: ID!
    coinAmount: Float!
    notes: String
  }

  input AdminReduceInvestmentInput {
    userId: ID!
    coinId: ID!
    coinAmount: Float!
    performedBy: ID
    notes: String
  }
    
  type Mutation {
    createInvestment(data: CreateInvestmentInput!): InvestmentResponsePayload!
    updateInvestment(id: ID!, data: UpdateInvestmentInput!): InvestmentResponsePayload!
    addToInvestment(userId: ID!, coinId: ID!, amount: Float!): InvestmentResponsePayload!
    reduceInvestment(userId: ID!, coinId: ID!, amount: Float!): InvestmentResponsePayload!
    deleteInvestment(id: ID!): InvestmentResponsePayload!

    buyInvestment(data: BuyInvestmentInput!): InvestmentResponsePayload!
    adminAddInvestment(data: AdminAddInvestmentInput!): InvestmentResponsePayload!
    adminReduceInvestment(data: AdminReduceInvestmentInput!): InvestmentResponsePayload!
  }
`;
export default investmentTypeDefs;
//# sourceMappingURL=investment.typeDefs.js.map