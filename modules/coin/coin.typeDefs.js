import { gql } from 'graphql-tag';
const coinTypeDefs = gql `
  type Coin {
    id: ID!
    name: String!
    symbol: String!
    coingeckoId: String!
    priceApiUrl: String!
    currentPrice: Float!
    price_change_24h: Float
    iconUrl: String
    isActive: Boolean!
    createdAt: String!
    updatedAt: String!
  }

  type CoinResponsePayload {
    success: Boolean!
    message: String!
    data: Coin
  }

  type Query {
    getAllCoins: [Coin!]!
    getActiveCoins: [Coin!]!
    getCoin(id: ID!): Coin
    getCoinBySymbol(symbol: String!): Coin
  }

  input CreateCoinInput {
    name: String!
    symbol: String!
    coingeckoId: String!
    priceApiUrl: String
    currentPrice: Float!
    iconUrl: String
    isActive: Boolean
  }

  input UpdateCoinInput {
    name: String
    coingeckoId: String
    priceApiUrl: String
    currentPrice: Float
    iconUrl: String
    isActive: Boolean
  }

  type Mutation {
    createCoin(data: CreateCoinInput!): CoinResponsePayload!
    updateCoin(id: ID!, data: UpdateCoinInput!): CoinResponsePayload!
    deleteCoin(id: ID!): CoinResponsePayload!
    toggleCoinStatus(id: ID!, isActive: Boolean!): CoinResponsePayload!
  }
`;
export default coinTypeDefs;
//# sourceMappingURL=coin.typeDefs.js.map