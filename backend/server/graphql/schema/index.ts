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
    comments(blogpostId: String!): [Comment!]
    replies(parentId: String!): [Comment!]
    userCart(userId: String!): Cart
  }
  type Mutation {
    createProduct(productInput: InputProduct): AuthData!
    createComment(commentInput: InputComment): AuthData!
    createBlogPost(blogPostInput: InputBlogPost): AuthData!
    createReview(reviewInput: InputReview): AuthData!
    updateProduct(updateProduct: UpdateProduct): Product!
    updateComment(updateComment: UpdateComment): Comment!
    replyToComment(reply: InputComment): Comment!
    addToCart(cartInput: InputCart): Cart
    deleteCart(deleteArgs: DeleteArgs): Cart
  }
  type Subscription {
    productAdded: Product
    reviewAdded: Review
    blogPostAdded: BlogPost
    commentAdded: Comment
    cartAdded: Cart
  }
  type User {
    username: String!
    password: String!
  }
  input InputUser {
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
    briefDescription: String!
    type: [String!]!
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
    briefDescription: String!
    type: [String!]!
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
    briefDescriptions: String!
    imageurl: String!
    brand: String!
    productCode: String!
    stock: Float!
    type: [String!]!
  }
  type BlogPost {
    author: User!
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
    author: InputUser!
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
    author: InputUser!
    title: String!
    _id: String!
    imageurl: String!
    slug: String!
    excerpt: String!
    content: String!
    updatedAt: String!
    featuredPost: Boolean!
  }
  type Comment {
    _id: String!
    comment: String!
    createdAt: String!
    updatedAt: String!
    blogpostId: String
    parentCommentId: String
    user: String!
  }
  input InputComment {
    comment: String!
    createdAt: String!
    updatedAt: String!
    blogpostId: String
    user: String!
    parentCommentId: String
  }
  input UpdateComment {
    _id: String!
    comment: String!
    createdAt: String!
    updatedAt: String!
    blogpostId: String
    user: String!
    reply: InputComment
  }
  type CartItem {
    productId: String!
    quantity: Float!
    price: Float!
    image: String!
    name: String!
    model: String!
  }
  input CartItemInput {
    productId: String!
    quantity: Float!
    price: Float!
    image: String!
    name: String!
    model: String!
  }
  input InputCart {
    userId: String!
    contents: [CartItemInput!]!
    updatedAt: String!
    createdAt: String!
  }
  type Cart {
    _id: String!
    userId: String!
    contents: [CartItem!]!
    updatedAt: String!
    createdAt: String!
  }
  input DeleteArgs {
    userId: String!
    cartContentId: Float!
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
