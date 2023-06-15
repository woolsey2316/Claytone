/**
 * Delete Cart Mutation
 *
 */

import { graphql } from '../../../src/__generated__';

const DELETE_CART = graphql(/* GraphQL */`
  mutation deleteCart($deleteArgs: DeleteArgs) {
    deleteCart(deleteArgs: $deleteArgs) {
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

export default DELETE_CART;