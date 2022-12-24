/**
 * Update product mutation
 *
 */

import { gql } from '@apollo/client';

const UPDATE_PRODUCT = gql(/* GraphQL */ `
  mutation updateProduct($productId: ID!, $updateProduct: UpdateProduct) {
    updateProduct(productId: $productId, updateProduct: $updateProduct) {
      _id
      title
      imageurl
      price
      rating
      oldPrice
    }
  }
`);

export default UPDATE_PRODUCT;
