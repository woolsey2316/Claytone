/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type Query = {
  __typename?: 'Query';
  blogPost: BlogPost;
  blogPosts: Array<BlogPost>;
  comments?: Maybe<Array<Comment>>;
  login: AuthData;
  product: Product;
  products: Array<Product>;
  reviews: Array<Review>;
};


export type QueryBlogPostArgs = {
  slug: Scalars['String'];
};


export type QueryCommentsArgs = {
  blogpostId: Scalars['String'];
};


export type QueryLoginArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type QueryProductArgs = {
  slug: Scalars['String'];
};


export type QueryReviewsArgs = {
  productId: Scalars['String'];
};

export type BlogPost = {
  __typename?: 'BlogPost';
  _id: Scalars['String'];
  author: User;
  content: Scalars['String'];
  createdAt: Scalars['String'];
  excerpt: Scalars['String'];
  featuredPost: Scalars['Boolean'];
  imageurl: Scalars['String'];
  slug: Scalars['String'];
  title: Scalars['String'];
  updatedAt: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  password: Scalars['String'];
  username: Scalars['String'];
};

export type Comment = {
  __typename?: 'Comment';
  _id: Scalars['String'];
  blogpostId: Scalars['String'];
  comment: Scalars['String'];
  createdAt: Scalars['String'];
  reply?: Maybe<Comment>;
  updatedAt: Scalars['String'];
  user: User;
};

export type AuthData = {
  __typename?: 'AuthData';
  productId: Scalars['String'];
  token: Scalars['String'];
  tokenExpiration: Scalars['Int'];
};

export type Product = {
  __typename?: 'Product';
  _id: Scalars['String'];
  brand: Scalars['String'];
  createdAt: Scalars['String'];
  description: Scalars['String'];
  imageurl: Scalars['String'];
  oldPrice?: Maybe<Scalars['Float']>;
  price: Scalars['Float'];
  productCode: Scalars['String'];
  rating: Scalars['Float'];
  slug: Scalars['String'];
  stock: Scalars['Float'];
  title: Scalars['String'];
  updatedAt: Scalars['String'];
};

export type Review = {
  __typename?: 'Review';
  createdAt: Scalars['String'];
  description: Scalars['String'];
  name: Scalars['String'];
  productId: Scalars['String'];
  rating: Scalars['Float'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createBlogPost: AuthData;
  createComment: AuthData;
  createProduct: AuthData;
  createReview: AuthData;
  replyToComment: Comment;
  updateComment: Comment;
  updateProduct: Product;
};


export type MutationCreateBlogPostArgs = {
  blogPostInput?: InputMaybe<InputBlogPost>;
};


export type MutationCreateCommentArgs = {
  commentInput?: InputMaybe<InputComment>;
};


export type MutationCreateProductArgs = {
  productInput?: InputMaybe<InputProduct>;
};


export type MutationCreateReviewArgs = {
  reviewInput?: InputMaybe<InputReview>;
};


export type MutationReplyToCommentArgs = {
  reply?: InputMaybe<InputReply>;
};


export type MutationUpdateCommentArgs = {
  updateComment?: InputMaybe<UpdateComment>;
};


export type MutationUpdateProductArgs = {
  updateProduct?: InputMaybe<UpdateProduct>;
};

export type InputBlogPost = {
  _id: Scalars['String'];
  author: InputUser;
  content: Scalars['String'];
  createdAt: Scalars['String'];
  excerpt: Scalars['String'];
  featuredPost: Scalars['Boolean'];
  imageurl: Scalars['String'];
  slug: Scalars['String'];
  title: Scalars['String'];
  updatedAt: Scalars['String'];
};

export type InputUser = {
  password: Scalars['String'];
  username: Scalars['String'];
};

export type InputComment = {
  _id: Scalars['String'];
  blogpostId: Scalars['String'];
  comment: Scalars['String'];
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
  user: InputUser;
};

export type InputProduct = {
  _id: Scalars['String'];
  brand: Scalars['String'];
  createdAt: Scalars['String'];
  description: Scalars['String'];
  imageurl: Scalars['String'];
  oldPrice?: InputMaybe<Scalars['Float']>;
  price: Scalars['Float'];
  productCode: Scalars['String'];
  rating: Scalars['Float'];
  slug: Scalars['String'];
  stock: Scalars['Float'];
  title: Scalars['String'];
  updatedAt: Scalars['String'];
};

export type InputReview = {
  description: Scalars['String'];
  name: Scalars['String'];
  productId: Scalars['String'];
  rating: Scalars['Float'];
};

export type InputReply = {
  blogpostId: Scalars['String'];
  comment: Scalars['String'];
  createdAt: Scalars['String'];
  parentCommentId: Scalars['String'];
  updatedAt: Scalars['String'];
  user: InputUser;
};

export type UpdateComment = {
  _id: Scalars['String'];
  blogpostId: Scalars['String'];
  comment: Scalars['String'];
  createdAt: Scalars['String'];
  reply?: InputMaybe<InputComment>;
  updatedAt: Scalars['String'];
  user: InputUser;
};

export type UpdateProduct = {
  _id: Scalars['String'];
  brand: Scalars['String'];
  createdAt: Scalars['String'];
  description: Scalars['String'];
  imageurl: Scalars['String'];
  oldPrice?: InputMaybe<Scalars['Float']>;
  price: Scalars['Float'];
  productCode: Scalars['String'];
  rating: Scalars['Float'];
  slug: Scalars['String'];
  stock: Scalars['Float'];
  title: Scalars['String'];
  updatedAt: Scalars['String'];
};

export type Subscription = {
  __typename?: 'Subscription';
  blogPostAdded?: Maybe<BlogPost>;
  commentAdded?: Maybe<Comment>;
  productAdded?: Maybe<Product>;
  reviewAdded?: Maybe<Review>;
};

export enum CacheControlScope {
  Private = 'PRIVATE',
  Public = 'PUBLIC'
}

export type UpdateBlogPost = {
  _id: Scalars['String'];
  author: InputUser;
  content: Scalars['String'];
  excerpt: Scalars['String'];
  featuredPost: Scalars['Boolean'];
  imageurl: Scalars['String'];
  slug: Scalars['String'];
  title: Scalars['String'];
  updatedAt: Scalars['String'];
};

export type CreateReviewMutationVariables = Exact<{
  reviewInput?: InputMaybe<InputReview>;
}>;


export type CreateReviewMutation = { __typename?: 'Mutation', createReview: { __typename?: 'AuthData', token: string } };

export type CreateProductMutationVariables = Exact<{
  productInput?: InputMaybe<InputProduct>;
}>;


export type CreateProductMutation = { __typename?: 'Mutation', createProduct: { __typename?: 'AuthData', token: string } };

export type UpdateProductMutationVariables = Exact<{
  updateProduct?: InputMaybe<UpdateProduct>;
}>;


export type UpdateProductMutation = { __typename?: 'Mutation', updateProduct: { __typename?: 'Product', _id: string, title: string, imageurl: string, price: number, rating: number, oldPrice?: number | null } };

export type Blog_By_SlugQueryVariables = Exact<{
  slug: Scalars['String'];
}>;


export type Blog_By_SlugQuery = { __typename?: 'Query', blogPost: { __typename?: 'BlogPost', _id: string, title: string, imageurl: string, createdAt: string, updatedAt: string, slug: string, excerpt: string, featuredPost: boolean, content: string, author: { __typename?: 'User', username: string } } };

export type BlogsQueryVariables = Exact<{ [key: string]: never; }>;


export type BlogsQuery = { __typename?: 'Query', blogPosts: Array<{ __typename?: 'BlogPost', _id: string, title: string, imageurl: string, createdAt: string, updatedAt: string, slug: string, excerpt: string, featuredPost: boolean, content: string, author: { __typename?: 'User', username: string } }> };

export type Comment_By_Blogpost_IdQueryVariables = Exact<{
  blogpostId: Scalars['String'];
}>;


export type Comment_By_Blogpost_IdQuery = { __typename?: 'Query', comments?: Array<{ __typename?: 'Comment', comment: string, createdAt: string, updatedAt: string, user: { __typename?: 'User', username: string } }> | null };

export type Product_By_SlugQueryVariables = Exact<{
  slug: Scalars['String'];
}>;


export type Product_By_SlugQuery = { __typename?: 'Query', product: { __typename?: 'Product', _id: string, createdAt: string, updatedAt: string, slug: string, title: string, price: number, oldPrice?: number | null, imageurl: string, description: string, rating: number, brand: string, productCode: string, stock: number } };

export type Product_SlugQueryVariables = Exact<{ [key: string]: never; }>;


export type Product_SlugQuery = { __typename?: 'Query', products: Array<{ __typename?: 'Product', _id: string, slug: string }> };

export type ProductsQueryVariables = Exact<{ [key: string]: never; }>;


export type ProductsQuery = { __typename?: 'Query', products: Array<{ __typename?: 'Product', title: string, _id: string, imageurl: string, price: number, oldPrice?: number | null, description: string, rating: number }> };

export type ReviewsQueryVariables = Exact<{
  productId: Scalars['String'];
}>;


export type ReviewsQuery = { __typename?: 'Query', reviews: Array<{ __typename?: 'Review', name: string, description: string, rating: number, createdAt: string }> };


export const CreateReviewDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createReview"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"reviewInput"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"InputReview"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createReview"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"reviewInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"reviewInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"token"}}]}}]}}]} as unknown as DocumentNode<CreateReviewMutation, CreateReviewMutationVariables>;
export const CreateProductDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createProduct"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"productInput"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"InputProduct"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createProduct"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"productInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"productInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"token"}}]}}]}}]} as unknown as DocumentNode<CreateProductMutation, CreateProductMutationVariables>;
export const UpdateProductDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updateProduct"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"updateProduct"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateProduct"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateProduct"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"updateProduct"},"value":{"kind":"Variable","name":{"kind":"Name","value":"updateProduct"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"imageurl"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"rating"}},{"kind":"Field","name":{"kind":"Name","value":"oldPrice"}}]}}]}}]} as unknown as DocumentNode<UpdateProductMutation, UpdateProductMutationVariables>;
export const Blog_By_SlugDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"BLOG_BY_SLUG"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"slug"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"blogPost"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"slug"},"value":{"kind":"Variable","name":{"kind":"Name","value":"slug"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"username"}}]}},{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"imageurl"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"excerpt"}},{"kind":"Field","name":{"kind":"Name","value":"featuredPost"}},{"kind":"Field","name":{"kind":"Name","value":"content"}}]}}]}}]} as unknown as DocumentNode<Blog_By_SlugQuery, Blog_By_SlugQueryVariables>;
export const BlogsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"BLOGS"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"blogPosts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"username"}}]}},{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"imageurl"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"excerpt"}},{"kind":"Field","name":{"kind":"Name","value":"featuredPost"}},{"kind":"Field","name":{"kind":"Name","value":"content"}}]}}]}}]} as unknown as DocumentNode<BlogsQuery, BlogsQueryVariables>;
export const Comment_By_Blogpost_IdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"COMMENT_BY_BLOGPOST_ID"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"blogpostId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"comments"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"blogpostId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"blogpostId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"comment"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"username"}}]}}]}}]}}]} as unknown as DocumentNode<Comment_By_Blogpost_IdQuery, Comment_By_Blogpost_IdQueryVariables>;
export const Product_By_SlugDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"PRODUCT_BY_SLUG"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"slug"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"product"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"slug"},"value":{"kind":"Variable","name":{"kind":"Name","value":"slug"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"oldPrice"}},{"kind":"Field","name":{"kind":"Name","value":"imageurl"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"rating"}},{"kind":"Field","name":{"kind":"Name","value":"brand"}},{"kind":"Field","name":{"kind":"Name","value":"productCode"}},{"kind":"Field","name":{"kind":"Name","value":"stock"}}]}}]}}]} as unknown as DocumentNode<Product_By_SlugQuery, Product_By_SlugQueryVariables>;
export const Product_SlugDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"PRODUCT_SLUG"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"products"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}}]}}]} as unknown as DocumentNode<Product_SlugQuery, Product_SlugQueryVariables>;
export const ProductsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"PRODUCTS"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"products"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"imageurl"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"oldPrice"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"rating"}}]}}]}}]} as unknown as DocumentNode<ProductsQuery, ProductsQueryVariables>;
export const ReviewsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"REVIEWS"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"productId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"reviews"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"productId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"productId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"rating"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}}]}}]} as unknown as DocumentNode<ReviewsQuery, ReviewsQueryVariables>;