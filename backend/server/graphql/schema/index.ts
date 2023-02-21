/** * Primary file for GraphQL Schema */
import { gql } from 'apollo-server-express';
import { ApolloServerExpressConfig } from 'apollo-server-express';

import resolvers from '../resolvers/index';
const typeDefs = gql`
  type Query {
    products: [Product!]!
    reviews(productId: String!): [Review!]!
    product(slug: String!): Product!
    blogPost(slug: String!): BlogPost!
    blogPosts: [BlogPost!]!
    login(email: String!, password: String!): AuthData!
  }
  type Mutation {
    createProduct(productInput: InputProduct): AuthData!
    createBlogPost(blogPostInput: InputBlogPost): AuthData!
    createReview(reviewInput: InputReview): AuthData!
    updateProduct(updateProduct: UpdateProduct): Product!
  }
  type Subscription {
    productAdded: Product
    reviewAdded: Review
    blogPostAdded: BlogPost
  }
  type Author {
    username: String!
    password: String!
  }
  input InputAuthor {
    username: String!
    password: String!
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
    brand: String!
    description: String!
    productCode: String!
    stock: Float!
  }
  type Review {
    name: String!
    description: String!
    rating: Float!
    createdAt: String!
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
    description: String!
    brand: String!
    productCode: String!
    stock: Float!
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
    description: String!
    imageurl: String!
    brand: String!
    productCode: String!
    stock: Float!
  }
  type BlogPost {
    author: Author!
    title: String!
    _id: String!
    imageurl: String!
    slug: String!
    excerpt: String!
    content: String!
    createdAt: String!
    updatedAt: String!
    featuredPost: Boolean!
  }
  input InputBlogPost {
    author: InputAuthor!
    title: String!
    _id: String!
    imageurl: String!
    slug: String!
    excerpt: String!
    content: String!
    createdAt: String!
    updatedAt: String!
    featuredPost: Boolean!
  }
  input updateBlogPost {
    author: InputAuthor!
    title: String!
    _id: String!
    imageurl: String!
    slug: String!
    excerpt: String!
    content: String!
    updatedAt: String!
    featuredPost: Boolean!
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
