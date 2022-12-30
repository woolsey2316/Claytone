/**
 * Create Product Mutation
 *
 */

import { graphql } from '../../../src/__generated__';

const CREATE_PRODUCT = graphql(/* GraphQL */`
  mutation createProduct($productInput: InputProduct) {
    createProduct(productInput: $productInput) {
      token
    }
  }
`);

export default CREATE_PRODUCT;
