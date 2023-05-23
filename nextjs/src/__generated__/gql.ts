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
    "\n  mutation addToCart($cartInput: InputCart) {\n    addToCart(cartInput: $cartInput) {\n      userId\n      contents {\n        productId\n        quantity\n      }\n      createdAt\n      updatedAt\n    }\n  }\n": types.AddToCartDocument,
    "\n  mutation createReview($reviewInput: InputReview) {\n    createReview(reviewInput: $reviewInput) {\n      token\n    }\n  }\n": types.CreateReviewDocument,
    "\n  mutation createProduct($productInput: InputProduct) {\n    createProduct(productInput: $productInput) {\n      token\n    }\n  }\n": types.CreateProductDocument,
    "\n  mutation REPLY_TO_COMMENT ($reply: InputComment!) {\n    replyToComment(reply: $reply) {\n      user\n      comment\n    }\n  }\n": types.Reply_To_CommentDocument,
    "\n  mutation updateProduct($updateProduct: UpdateProduct) {\n    updateProduct(updateProduct: $updateProduct) {\n      _id\n      title\n      imageurl\n      price\n      rating\n      oldPrice\n    }\n  }\n": types.UpdateProductDocument,
    "\n  query BLOG_BY_SLUG ($slug: String!) {\n    blogPost(slug: $slug) {\n      author {\n        username\n      }\n      _id\n      title\n      imageurl\n      createdAt\n      updatedAt\n      slug\n      excerpt\n      featuredPost\n      content\n    }\n  }\n": types.Blog_By_SlugDocument,
    "\n  query BLOGS {\n    blogPosts {\n      author {\n        username\n      }\n      _id\n      title\n      imageurl\n      createdAt\n      updatedAt\n      slug\n      excerpt\n      featuredPost\n      content\n    }\n  }\n": types.BlogsDocument,
    "\n  query GET_CART_ITEMS ($userId: String!) {\n    userCart(userId: $userId) {\n      contents {\n        productId\n        quantity\n      }\n    }\n  }\n": types.Get_Cart_ItemsDocument,
    "\n  query COMMENT_BY_BLOGPOST_ID ($blogpostId: String!) {\n    comments(blogpostId: $blogpostId) {\n      _id\n      comment\n      createdAt\n      updatedAt\n      user\n    }\n  }\n": types.Comment_By_Blogpost_IdDocument,
    "\n  query PRODUCT_BY_SLUG ($slug: String!) {\n    product(slug: $slug) {\n      _id\n      createdAt\n      updatedAt\n      slug\n      title\n      price\n      oldPrice\n      imageurl\n      description\n      rating\n      brand\n      productCode\n      stock\n    }\n  }\n": types.Product_By_SlugDocument,
    "\n  query PRODUCT_SLUG {\n    products {\n      _id\n      slug\n    }\n  }\n": types.Product_SlugDocument,
    "\n  query PRODUCTS {\n    products {\n      title\n      _id\n      imageurl\n      price\n      oldPrice\n      description\n      rating\n    }\n  }\n": types.ProductsDocument,
    "\n  query GET_REPLIES ($commentId: String!) {\n    replies(parentId: $commentId) {\n      _id\n      createdAt\n      updatedAt\n      comment\n      user\n    }\n  }\n": types.Get_RepliesDocument,
    "\n  query REVIEWS($productId: String!){\n    reviews(productId: $productId) {\n     \tname\n      description\n      rating\n      createdAt\n    }\n  }\n": types.ReviewsDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation addToCart($cartInput: InputCart) {\n    addToCart(cartInput: $cartInput) {\n      userId\n      contents {\n        productId\n        quantity\n      }\n      createdAt\n      updatedAt\n    }\n  }\n"): (typeof documents)["\n  mutation addToCart($cartInput: InputCart) {\n    addToCart(cartInput: $cartInput) {\n      userId\n      contents {\n        productId\n        quantity\n      }\n      createdAt\n      updatedAt\n    }\n  }\n"];
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
export function graphql(source: "\n  mutation REPLY_TO_COMMENT ($reply: InputComment!) {\n    replyToComment(reply: $reply) {\n      user\n      comment\n    }\n  }\n"): (typeof documents)["\n  mutation REPLY_TO_COMMENT ($reply: InputComment!) {\n    replyToComment(reply: $reply) {\n      user\n      comment\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation updateProduct($updateProduct: UpdateProduct) {\n    updateProduct(updateProduct: $updateProduct) {\n      _id\n      title\n      imageurl\n      price\n      rating\n      oldPrice\n    }\n  }\n"): (typeof documents)["\n  mutation updateProduct($updateProduct: UpdateProduct) {\n    updateProduct(updateProduct: $updateProduct) {\n      _id\n      title\n      imageurl\n      price\n      rating\n      oldPrice\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query BLOG_BY_SLUG ($slug: String!) {\n    blogPost(slug: $slug) {\n      author {\n        username\n      }\n      _id\n      title\n      imageurl\n      createdAt\n      updatedAt\n      slug\n      excerpt\n      featuredPost\n      content\n    }\n  }\n"): (typeof documents)["\n  query BLOG_BY_SLUG ($slug: String!) {\n    blogPost(slug: $slug) {\n      author {\n        username\n      }\n      _id\n      title\n      imageurl\n      createdAt\n      updatedAt\n      slug\n      excerpt\n      featuredPost\n      content\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query BLOGS {\n    blogPosts {\n      author {\n        username\n      }\n      _id\n      title\n      imageurl\n      createdAt\n      updatedAt\n      slug\n      excerpt\n      featuredPost\n      content\n    }\n  }\n"): (typeof documents)["\n  query BLOGS {\n    blogPosts {\n      author {\n        username\n      }\n      _id\n      title\n      imageurl\n      createdAt\n      updatedAt\n      slug\n      excerpt\n      featuredPost\n      content\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GET_CART_ITEMS ($userId: String!) {\n    userCart(userId: $userId) {\n      contents {\n        productId\n        quantity\n      }\n    }\n  }\n"): (typeof documents)["\n  query GET_CART_ITEMS ($userId: String!) {\n    userCart(userId: $userId) {\n      contents {\n        productId\n        quantity\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query COMMENT_BY_BLOGPOST_ID ($blogpostId: String!) {\n    comments(blogpostId: $blogpostId) {\n      _id\n      comment\n      createdAt\n      updatedAt\n      user\n    }\n  }\n"): (typeof documents)["\n  query COMMENT_BY_BLOGPOST_ID ($blogpostId: String!) {\n    comments(blogpostId: $blogpostId) {\n      _id\n      comment\n      createdAt\n      updatedAt\n      user\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query PRODUCT_BY_SLUG ($slug: String!) {\n    product(slug: $slug) {\n      _id\n      createdAt\n      updatedAt\n      slug\n      title\n      price\n      oldPrice\n      imageurl\n      description\n      rating\n      brand\n      productCode\n      stock\n    }\n  }\n"): (typeof documents)["\n  query PRODUCT_BY_SLUG ($slug: String!) {\n    product(slug: $slug) {\n      _id\n      createdAt\n      updatedAt\n      slug\n      title\n      price\n      oldPrice\n      imageurl\n      description\n      rating\n      brand\n      productCode\n      stock\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query PRODUCT_SLUG {\n    products {\n      _id\n      slug\n    }\n  }\n"): (typeof documents)["\n  query PRODUCT_SLUG {\n    products {\n      _id\n      slug\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query PRODUCTS {\n    products {\n      title\n      _id\n      imageurl\n      price\n      oldPrice\n      description\n      rating\n    }\n  }\n"): (typeof documents)["\n  query PRODUCTS {\n    products {\n      title\n      _id\n      imageurl\n      price\n      oldPrice\n      description\n      rating\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GET_REPLIES ($commentId: String!) {\n    replies(parentId: $commentId) {\n      _id\n      createdAt\n      updatedAt\n      comment\n      user\n    }\n  }\n"): (typeof documents)["\n  query GET_REPLIES ($commentId: String!) {\n    replies(parentId: $commentId) {\n      _id\n      createdAt\n      updatedAt\n      comment\n      user\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query REVIEWS($productId: String!){\n    reviews(productId: $productId) {\n     \tname\n      description\n      rating\n      createdAt\n    }\n  }\n"): (typeof documents)["\n  query REVIEWS($productId: String!){\n    reviews(productId: $productId) {\n     \tname\n      description\n      rating\n      createdAt\n    }\n  }\n"];

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