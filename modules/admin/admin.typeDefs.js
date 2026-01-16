import { gql } from 'graphql-tag';
const adminTypeDefs = gql `
  type Admin {
    id: ID!
    name: String!
    email: String!
    role: String!
    isActive: Boolean!
    lastLogin: String
    createdAt: String!
    updatedAt: String!
  }

  type AdminAuthPayload {
    token: String!
    admin: Admin!
  }

  type AdminResponsePayload {
    success: Boolean!
    message: String!
    data: Admin
  }

  input AdminLoginInput {
    email: String!
    password: String!
  }

  type Query {
    getCurrentAdmin: Admin
    getAllAdmins: [Admin!]!
    getAdmin(id: ID!): Admin
  }

  type Mutation {
    adminLogin(data: AdminLoginInput!): AdminAuthPayload!
    createAdmin(name: String!, email: String!, password: String!): AdminResponsePayload!
    toggleAdminStatus(adminId: ID!, isActive: Boolean!): AdminResponsePayload!
  }
`;
export default adminTypeDefs;
//# sourceMappingURL=admin.typeDefs.js.map