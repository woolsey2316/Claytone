/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel-plugin for production.
 */
const documents = {
    "\n  mutation createReview($reviewInput: InputReview) {\n    createReview(reviewInput: $reviewInput) {\n      token\n    }\n  }\n": types.CreateReviewDocument,
    "\n  mutation createProduct($productInput: InputProduct) {\n    createProduct(productInput: $productInput) {\n      token\n    }\n  }\n": types.CreateProductDocument,
    "\n  mutation updateProduct($updateProduct: UpdateProduct) {\n    updateProduct(updateProduct: $updateProduct) {\n      _id\n      title\n      imageurl\n      price\n      rating\n      oldPrice\n    }\n  }\n": types.UpdateProductDocument,
    "\n  query PRODUCT_BY_SLUG ($slug: String!) {\n    product(slug: $slug) {\n      _id\n      createdAt\n      updatedAt\n      title\n      price\n      oldPrice\n      imageurl\n      rating\n    }\n  }\n": types.Product_By_SlugDocument,
    "\n  query PRODUCT_SLUG {\n    products {\n      _id\n      slug\n    }\n  }\n": types.Product_SlugDocument,
    "\n  query PRODUCTS {\n    products {\n      title\n      _id\n      imageurl\n      price\n      oldPrice\n      rating\n    }\n  }\n": types.ProductsDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation createReview($reviewInput: InputReview) {\n    createReview(reviewInput: $reviewInput) {\n      token\n    }\n  }\n"): (typeof documents)["\n  mutation createReview($reviewInput: InputReview) {\n    createReview(reviewInput: $reviewInput) {\n      token\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation createProduct($productInput: InputProduct) {\n    createProduct(productInput: $productInput) {\n      token\n    }\n  }\n"): (typeof documents)["\n  mutation createProduct($productInput: InputProduct) {\n    createProduct(productInput: $productInput) {\n      token\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation updateProduct($updateProduct: UpdateProduct) {\n    updateProduct(updateProduct: $updateProduct) {\n      _id\n      title\n      imageurl\n      price\n      rating\n      oldPrice\n    }\n  }\n"): (typeof documents)["\n  mutation updateProduct($updateProduct: UpdateProduct) {\n    updateProduct(updateProduct: $updateProduct) {\n      _id\n      title\n      imageurl\n      price\n      rating\n      oldPrice\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query PRODUCT_BY_SLUG ($slug: String!) {\n    product(slug: $slug) {\n      _id\n      createdAt\n      updatedAt\n      title\n      price\n      oldPrice\n      imageurl\n      rating\n    }\n  }\n"): (typeof documents)["\n  query PRODUCT_BY_SLUG ($slug: String!) {\n    product(slug: $slug) {\n      _id\n      createdAt\n      updatedAt\n      title\n      price\n      oldPrice\n      imageurl\n      rating\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query PRODUCT_SLUG {\n    products {\n      _id\n      slug\n    }\n  }\n"): (typeof documents)["\n  query PRODUCT_SLUG {\n    products {\n      _id\n      slug\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query PRODUCTS {\n    products {\n      title\n      _id\n      imageurl\n      price\n      oldPrice\n      rating\n    }\n  }\n"): (typeof documents)["\n  query PRODUCTS {\n    products {\n      title\n      _id\n      imageurl\n      price\n      oldPrice\n      rating\n    }\n  }\n"];

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
**/
export function graphql(source: string): unknown;

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;