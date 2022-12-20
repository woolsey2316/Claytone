/**
 * Update product mutation
 *
 */

import gql from 'graphql-tag';

const UPDATE_PRODUCT = gql`
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
`;

export default UPDATE_PRODUCT;
