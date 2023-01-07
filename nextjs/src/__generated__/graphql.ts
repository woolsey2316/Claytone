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
  login: AuthData;
  product: Product;
  products: Array<Product>;
  reviews: Array<Review>;
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
  description: Scalars['String'];
  name: Scalars['String'];
  productId: Scalars['String'];
  rating: Scalars['Float'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createProduct: AuthData;
  createReview: AuthData;
  updateProduct: Product;
};


export type MutationCreateProductArgs = {
  productInput?: InputMaybe<InputProduct>;
};


export type MutationCreateReviewArgs = {
  reviewInput?: InputMaybe<InputReview>;
};


export type MutationUpdateProductArgs = {
  updateProduct?: InputMaybe<UpdateProduct>;
};

export type InputProduct = {
  _id: Scalars['String'];
  brand: Scalars['String'];
  createdAt: Scalars['String'];
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

export type UpdateProduct = {
  _id: Scalars['String'];
  brand: Scalars['String'];
  createdAt: Scalars['String'];
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
  productAdded?: Maybe<Product>;
  reviewAdded?: Maybe<Review>;
};

export enum CacheControlScope {
  Private = 'PRIVATE',
  Public = 'PUBLIC'
}

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

export type Product_By_SlugQueryVariables = Exact<{
  slug: Scalars['String'];
}>;


export type Product_By_SlugQuery = { __typename?: 'Query', product: { __typename?: 'Product', _id: string, createdAt: string, updatedAt: string, slug: string, title: string, price: number, oldPrice?: number | null, imageurl: string, rating: number, brand: string, productCode: string, stock: number } };

export type Product_SlugQueryVariables = Exact<{ [key: string]: never; }>;


export type Product_SlugQuery = { __typename?: 'Query', products: Array<{ __typename?: 'Product', _id: string, slug: string }> };

export type ProductsQueryVariables = Exact<{ [key: string]: never; }>;


export type ProductsQuery = { __typename?: 'Query', products: Array<{ __typename?: 'Product', title: string, _id: string, imageurl: string, price: number, oldPrice?: number | null, rating: number }> };

export type ReviewsQueryVariables = Exact<{
  productId: Scalars['String'];
}>;


export type ReviewsQuery = { __typename?: 'Query', reviews: Array<{ __typename?: 'Review', name: string }> };


export const CreateReviewDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createReview"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"reviewInput"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"InputReview"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createReview"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"reviewInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"reviewInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"token"}}]}}]}}]} as unknown as DocumentNode<CreateReviewMutation, CreateReviewMutationVariables>;
export const CreateProductDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createProduct"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"productInput"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"InputProduct"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createProduct"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"productInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"productInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"token"}}]}}]}}]} as unknown as DocumentNode<CreateProductMutation, CreateProductMutationVariables>;
export const UpdateProductDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updateProduct"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"updateProduct"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateProduct"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateProduct"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"updateProduct"},"value":{"kind":"Variable","name":{"kind":"Name","value":"updateProduct"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"imageurl"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"rating"}},{"kind":"Field","name":{"kind":"Name","value":"oldPrice"}}]}}]}}]} as unknown as DocumentNode<UpdateProductMutation, UpdateProductMutationVariables>;
export const Product_By_SlugDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"PRODUCT_BY_SLUG"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"slug"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"product"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"slug"},"value":{"kind":"Variable","name":{"kind":"Name","value":"slug"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"oldPrice"}},{"kind":"Field","name":{"kind":"Name","value":"imageurl"}},{"kind":"Field","name":{"kind":"Name","value":"rating"}},{"kind":"Field","name":{"kind":"Name","value":"brand"}},{"kind":"Field","name":{"kind":"Name","value":"productCode"}},{"kind":"Field","name":{"kind":"Name","value":"stock"}}]}}]}}]} as unknown as DocumentNode<Product_By_SlugQuery, Product_By_SlugQueryVariables>;
export const Product_SlugDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"PRODUCT_SLUG"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"products"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}}]}}]} as unknown as DocumentNode<Product_SlugQuery, Product_SlugQueryVariables>;
export const ProductsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"PRODUCTS"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"products"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"imageurl"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"oldPrice"}},{"kind":"Field","name":{"kind":"Name","value":"rating"}}]}}]}}]} as unknown as DocumentNode<ProductsQuery, ProductsQueryVariables>;
export const ReviewsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"REVIEWS"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"productId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"reviews"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"productId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"productId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<ReviewsQuery, ReviewsQueryVariables>;