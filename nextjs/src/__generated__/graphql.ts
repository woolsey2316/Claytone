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
  replies?: Maybe<Array<Comment>>;
  reviews: Array<Review>;
  userCart?: Maybe<Cart>;
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


export type QueryRepliesArgs = {
  parentId: Scalars['String'];
};


export type QueryReviewsArgs = {
  productId: Scalars['String'];
};


export type QueryUserCartArgs = {
  userId: Scalars['String'];
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
  blogpostId?: Maybe<Scalars['String']>;
  comment: Scalars['String'];
  createdAt: Scalars['String'];
  parentCommentId?: Maybe<Scalars['String']>;
  updatedAt: Scalars['String'];
  user: Scalars['String'];
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

export type Cart = {
  __typename?: 'Cart';
  _id: Scalars['String'];
  contents: Array<CartItem>;
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
  userId: Scalars['String'];
};

export type CartItem = {
  __typename?: 'CartItem';
  image: Scalars['String'];
  model: Scalars['String'];
  name: Scalars['String'];
  price: Scalars['Float'];
  productId: Scalars['String'];
  quantity: Scalars['Float'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addToCart?: Maybe<Cart>;
  createBlogPost: AuthData;
  createComment: AuthData;
  createProduct: AuthData;
  createReview: AuthData;
  deleteCart?: Maybe<Cart>;
  replyToComment: Comment;
  updateComment: Comment;
  updateProduct: Product;
};


export type MutationAddToCartArgs = {
  cartInput?: InputMaybe<InputCart>;
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


export type MutationDeleteCartArgs = {
  deleteArgs?: InputMaybe<DeleteArgs>;
};


export type MutationReplyToCommentArgs = {
  reply?: InputMaybe<InputComment>;
};


export type MutationUpdateCommentArgs = {
  updateComment?: InputMaybe<UpdateComment>;
};


export type MutationUpdateProductArgs = {
  updateProduct?: InputMaybe<UpdateProduct>;
};

export type InputCart = {
  contents: Array<CartItemInput>;
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
  userId: Scalars['String'];
};

export type CartItemInput = {
  image: Scalars['String'];
  model: Scalars['String'];
  name: Scalars['String'];
  price: Scalars['Float'];
  productId: Scalars['String'];
  quantity: Scalars['Float'];
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
  blogpostId?: InputMaybe<Scalars['String']>;
  comment: Scalars['String'];
  createdAt: Scalars['String'];
  parentCommentId?: InputMaybe<Scalars['String']>;
  updatedAt: Scalars['String'];
  user: Scalars['String'];
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

export type DeleteArgs = {
  cartContentId: Scalars['Float'];
  userId: Scalars['String'];
};

export type UpdateComment = {
  _id: Scalars['String'];
  blogpostId?: InputMaybe<Scalars['String']>;
  comment: Scalars['String'];
  createdAt: Scalars['String'];
  reply?: InputMaybe<InputComment>;
  updatedAt: Scalars['String'];
  user: Scalars['String'];
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
  cartAdded?: Maybe<Cart>;
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

export type AddToCartMutationVariables = Exact<{
  cartInput?: InputMaybe<InputCart>;
}>;


export type AddToCartMutation = { __typename?: 'Mutation', addToCart?: { __typename?: 'Cart', userId: string, createdAt: string, updatedAt: string, contents: Array<{ __typename?: 'CartItem', productId: string, quantity: number, price: number, name: string, image: string, model: string }> } | null };

export type CreateReviewMutationVariables = Exact<{
  reviewInput?: InputMaybe<InputReview>;
}>;


export type CreateReviewMutation = { __typename?: 'Mutation', createReview: { __typename?: 'AuthData', token: string } };

export type CreateProductMutationVariables = Exact<{
  productInput?: InputMaybe<InputProduct>;
}>;


export type CreateProductMutation = { __typename?: 'Mutation', createProduct: { __typename?: 'AuthData', token: string } };

export type DeleteCartMutationVariables = Exact<{
  deleteArgs?: InputMaybe<DeleteArgs>;
}>;


export type DeleteCartMutation = { __typename?: 'Mutation', deleteCart?: { __typename?: 'Cart', userId: string, createdAt: string, updatedAt: string, contents: Array<{ __typename?: 'CartItem', productId: string, quantity: number, price: number, name: string, image: string, model: string }> } | null };

export type Reply_To_CommentMutationVariables = Exact<{
  reply: InputComment;
}>;


export type Reply_To_CommentMutation = { __typename?: 'Mutation', replyToComment: { __typename?: 'Comment', user: string, comment: string } };

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

export type Get_Cart_ItemsQueryVariables = Exact<{
  userId: Scalars['String'];
}>;


export type Get_Cart_ItemsQuery = { __typename?: 'Query', userCart?: { __typename?: 'Cart', _id: string, userId: string, createdAt: string, updatedAt: string, contents: Array<{ __typename?: 'CartItem', productId: string, quantity: number, price: number, name: string, image: string, model: string }> } | null };

export type Comment_By_Blogpost_IdQueryVariables = Exact<{
  blogpostId: Scalars['String'];
}>;


export type Comment_By_Blogpost_IdQuery = { __typename?: 'Query', comments?: Array<{ __typename?: 'Comment', _id: string, comment: string, createdAt: string, updatedAt: string, user: string }> | null };

export type Product_By_SlugQueryVariables = Exact<{
  slug: Scalars['String'];
}>;


export type Product_By_SlugQuery = { __typename?: 'Query', product: { __typename?: 'Product', _id: string, createdAt: string, updatedAt: string, slug: string, title: string, price: number, oldPrice?: number | null, imageurl: string, description: string, rating: number, brand: string, productCode: string, stock: number } };

export type Product_SlugQueryVariables = Exact<{ [key: string]: never; }>;


export type Product_SlugQuery = { __typename?: 'Query', products: Array<{ __typename?: 'Product', _id: string, slug: string }> };

export type ProductsQueryVariables = Exact<{ [key: string]: never; }>;


export type ProductsQuery = { __typename?: 'Query', products: Array<{ __typename?: 'Product', title: string, _id: string, imageurl: string, price: number, oldPrice?: number | null, description: string, rating: number }> };

export type Get_RepliesQueryVariables = Exact<{
  commentId: Scalars['String'];
}>;


export type Get_RepliesQuery = { __typename?: 'Query', replies?: Array<{ __typename?: 'Comment', _id: string, createdAt: string, updatedAt: string, comment: string, user: string }> | null };

export type ReviewsQueryVariables = Exact<{
  productId: Scalars['String'];
}>;


export type ReviewsQuery = { __typename?: 'Query', reviews: Array<{ __typename?: 'Review', name: string, description: string, rating: number, createdAt: string }> };


export const AddToCartDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"addToCart"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"cartInput"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"InputCart"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addToCart"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"cartInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"cartInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"contents"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"productId"}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"model"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<AddToCartMutation, AddToCartMutationVariables>;
export const CreateReviewDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createReview"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"reviewInput"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"InputReview"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createReview"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"reviewInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"reviewInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"token"}}]}}]}}]} as unknown as DocumentNode<CreateReviewMutation, CreateReviewMutationVariables>;
export const CreateProductDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createProduct"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"productInput"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"InputProduct"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createProduct"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"productInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"productInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"token"}}]}}]}}]} as unknown as DocumentNode<CreateProductMutation, CreateProductMutationVariables>;
export const DeleteCartDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"deleteCart"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"deleteArgs"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"DeleteArgs"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteCart"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"deleteArgs"},"value":{"kind":"Variable","name":{"kind":"Name","value":"deleteArgs"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"contents"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"productId"}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"model"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<DeleteCartMutation, DeleteCartMutationVariables>;
export const Reply_To_CommentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"REPLY_TO_COMMENT"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"reply"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"InputComment"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"replyToComment"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"reply"},"value":{"kind":"Variable","name":{"kind":"Name","value":"reply"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"}},{"kind":"Field","name":{"kind":"Name","value":"comment"}}]}}]}}]} as unknown as DocumentNode<Reply_To_CommentMutation, Reply_To_CommentMutationVariables>;
export const UpdateProductDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updateProduct"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"updateProduct"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateProduct"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateProduct"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"updateProduct"},"value":{"kind":"Variable","name":{"kind":"Name","value":"updateProduct"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"imageurl"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"rating"}},{"kind":"Field","name":{"kind":"Name","value":"oldPrice"}}]}}]}}]} as unknown as DocumentNode<UpdateProductMutation, UpdateProductMutationVariables>;
export const Blog_By_SlugDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"BLOG_BY_SLUG"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"slug"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"blogPost"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"slug"},"value":{"kind":"Variable","name":{"kind":"Name","value":"slug"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"username"}}]}},{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"imageurl"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"excerpt"}},{"kind":"Field","name":{"kind":"Name","value":"featuredPost"}},{"kind":"Field","name":{"kind":"Name","value":"content"}}]}}]}}]} as unknown as DocumentNode<Blog_By_SlugQuery, Blog_By_SlugQueryVariables>;
export const BlogsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"BLOGS"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"blogPosts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"username"}}]}},{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"imageurl"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"excerpt"}},{"kind":"Field","name":{"kind":"Name","value":"featuredPost"}},{"kind":"Field","name":{"kind":"Name","value":"content"}}]}}]}}]} as unknown as DocumentNode<BlogsQuery, BlogsQueryVariables>;
export const Get_Cart_ItemsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GET_CART_ITEMS"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userCart"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"userId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"contents"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"productId"}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"model"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<Get_Cart_ItemsQuery, Get_Cart_ItemsQueryVariables>;
export const Comment_By_Blogpost_IdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"COMMENT_BY_BLOGPOST_ID"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"blogpostId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"comments"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"blogpostId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"blogpostId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"comment"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"user"}}]}}]}}]} as unknown as DocumentNode<Comment_By_Blogpost_IdQuery, Comment_By_Blogpost_IdQueryVariables>;
export const Product_By_SlugDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"PRODUCT_BY_SLUG"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"slug"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"product"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"slug"},"value":{"kind":"Variable","name":{"kind":"Name","value":"slug"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"oldPrice"}},{"kind":"Field","name":{"kind":"Name","value":"imageurl"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"rating"}},{"kind":"Field","name":{"kind":"Name","value":"brand"}},{"kind":"Field","name":{"kind":"Name","value":"productCode"}},{"kind":"Field","name":{"kind":"Name","value":"stock"}}]}}]}}]} as unknown as DocumentNode<Product_By_SlugQuery, Product_By_SlugQueryVariables>;
export const Product_SlugDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"PRODUCT_SLUG"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"products"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}}]}}]} as unknown as DocumentNode<Product_SlugQuery, Product_SlugQueryVariables>;
export const ProductsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"PRODUCTS"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"products"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"imageurl"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"oldPrice"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"rating"}}]}}]}}]} as unknown as DocumentNode<ProductsQuery, ProductsQueryVariables>;
export const Get_RepliesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GET_REPLIES"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"commentId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"replies"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"parentId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"commentId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"comment"}},{"kind":"Field","name":{"kind":"Name","value":"user"}}]}}]}}]} as unknown as DocumentNode<Get_RepliesQuery, Get_RepliesQueryVariables>;
export const ReviewsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"REVIEWS"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"productId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"reviews"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"productId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"productId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"rating"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}}]}}]} as unknown as DocumentNode<ReviewsQuery, ReviewsQueryVariables>;