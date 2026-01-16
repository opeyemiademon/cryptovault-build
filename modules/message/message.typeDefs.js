import { gql } from 'graphql-tag';
const messageTypeDefs = gql `
  type Message {
    id: ID!
    senderId: ID!
    sender: User
    recipientId: ID
    recipient: User
    recipientType: String!
    title: String!
    content: String!
    isRead: Boolean!
    readAt: String
    createdAt: String!
    updatedAt: String!
  }

  type MessageResponsePayload {
    success: Boolean!
    message: String!
    data: Message
  }

  type Query {
    getAllMessages: [Message!]!
    getMessage(id: ID!): Message
    getUserMessages(userId: ID!): [Message!]!
    getUnreadMessages(userId: ID!): [Message!]!
  }

  input CreateMessageInput {
    recipientId: ID
    recipientType: String!
    title: String!
    content: String!
  }

  type Mutation {
    createMessage(data: CreateMessageInput!): MessageResponsePayload!
    markMessageAsRead(id: ID!): MessageResponsePayload!
    deleteMessage(id: ID!): MessageResponsePayload!
  }
`;
export default messageTypeDefs;
//# sourceMappingURL=message.typeDefs.js.map