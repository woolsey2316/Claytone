/**
 * Update product mutation
 *
 */

import { graphql } from '../../../src/__generated__';

const UPDATE_PRODUCT = graphql(/* GraphQL */ `
  mutation updateProduct($updateProduct: UpdateProduct) {
    updateProduct(updateProduct: $updateProduct) {
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
