/** * Primary file for GraphQL Schema */
import { gql } from 'apollo-server-express';
import { ApolloServerExpressConfig } from 'apollo-server-express';

import resolvers from '../resolvers/index';
const typeDefs = gql`
  type Query {
    products: [Product!]!
    product(productId: ID!): Product!
    login(email: String!, password: String!): AuthData!
  }
  type Mutation {
    createProduct(productInput: ProductInput): AuthData!
    updateProduct(productId: ID!, updateProduct: UpdateProduct): Product!
  }
  type Subscription {
    productAdded: Product
  }
  type Product {
    _id: ID!
    email: String!
    name: String!
    password: String
    createdAt: String!
    updatedAt: String!
  }
  type AuthData {
    productId: ID!
    token: String!
    tokenExpiration: Int!
  }
  input ProductInput {
    email: String!
    name: String!
    password: String!
  }
  input UpdateProduct {
    email: String
    name: String
    password: String
  }
`;
const schema: ApolloServerExpressConfig = {
  typeDefs,
  resolvers,
  introspection: true,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  context: async ({ req, connection, payload }: any) => {
    if (connection) {
      return { isAuth: payload.authToken };
    }
    return { isAuth: req.body.isAuth };
  },
  playground: true
};
export default schema;
