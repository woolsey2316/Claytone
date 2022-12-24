/* eslint-disable */
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

export type AuthData = {
  __typename?: 'AuthData';
  productId: Scalars['String'];
  token: Scalars['String'];
  tokenExpiration: Scalars['Int'];
};

export type Product = {
  __typename?: 'Product';
  _id: Scalars['String'];
  createdAt: Scalars['String'];
  imageurl: Scalars['String'];
  oldPrice?: Maybe<Scalars['Float']>;
  price: Scalars['Float'];
  rating: Scalars['Float'];
  slug: Scalars['String'];
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
  productId: Scalars['String'];
  updateProduct?: InputMaybe<UpdateProduct>;
};

export type InputProduct = {
  _id: Scalars['String'];
  createdAt: Scalars['String'];
  imageurl: Scalars['String'];
  oldPrice?: InputMaybe<Scalars['Float']>;
  price: Scalars['Float'];
  rating: Scalars['Float'];
  slug: Scalars['String'];
  title: Scalars['String'];
  updatedAt: Scalars['String'];
};

export type InputReview = {
  description: Scalars['String'];
  name: Scalars['String'];
  rating: Scalars['Float'];
};

export type UpdateProduct = {
  _id: Scalars['String'];
  createdAt: Scalars['String'];
  imageurl: Scalars['String'];
  oldPrice?: InputMaybe<Scalars['Float']>;
  price: Scalars['Float'];
  rating: Scalars['Float'];
  slug: Scalars['String'];
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
