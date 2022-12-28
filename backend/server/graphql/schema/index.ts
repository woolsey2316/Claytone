/** * Primary file for GraphQL Schema */
import { gql } from 'apollo-server-express';
import { ApolloServerExpressConfig } from 'apollo-server-express';

import resolvers from '../resolvers/index';
const typeDefs = gql`
  type Query {
    products: [Product!]!
    reviews: [Review!]!
    product(slug: String!): Product!
    login(email: String!, password: String!): AuthData!
  }
  type Mutation {
    createProduct(productInput: InputProduct): AuthData!
    createReview(reviewInput: InputReview): AuthData!
    updateProduct(updateProduct: UpdateProduct): Product!
  }
  type Subscription {
    productAdded: Product
    reviewAdded: Review
  }

  type Product {
    _id: String!
    slug: String!
    rating: Float!
    title: String!
    price: Float!
    oldPrice: Float
    createdAt: String!
    updatedAt: String!
    imageurl: String!
  }
  type Review {
    name: String!
    description: String!
    rating: Float!
    productId: String!
  }
  input InputReview {
    name: String!
    description: String!
    rating: Float!
    productId: String!
  }
  type AuthData {
    productId: String!
    token: String!
    tokenExpiration: Int!
  }
  input InputProduct {
    _id: String!
    slug: String!
    rating: Float!
    title: String!
    price: Float!
    oldPrice: Float
    createdAt: String!
    updatedAt: String!
    imageurl: String!
  }
  input UpdateProduct {
    _id: String!
    slug: String!
    rating: Float!
    title: String!
    price: Float!
    oldPrice: Float
    createdAt: String!
    updatedAt: String!
    imageurl: String!
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
