/**
 * Create Cart Mutation
 *
 */

import { graphql } from '../../../src/__generated__';

const ADD_TO_CART = graphql(/* GraphQL */`
  mutation addToCart($cartInput: InputCart) {
    addToCart(cartInput: $cartInput) {
      userId
      contents {
        productId
        quantity
        price
        name
        image
        model
      }
      createdAt
      updatedAt
    }
  }
`);

export default ADD_TO_CART;