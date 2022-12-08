/**
 * Create Product Mutation
 *
 */

import gql from 'graphql-tag';

const CREATE_PRODUCT = gql`
  mutation createProduct($productInput: ProductInput) {
    createProduct(productInput: $productInput) {
      token
      productId
    }
  }
`;

export default CREATE_PRODUCT;
