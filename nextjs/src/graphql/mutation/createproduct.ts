/**
 * Create Product Mutation
 *
 */

import { gql } from '@apollo/client';

const CREATE_PRODUCT = gql(/* GraphQL */`
  mutation createProduct($productInput: ProductInput) {
    createProduct(productInput: $productInput) {
      token
      productId
    }
  }
`);

export default CREATE_PRODUCT;
