import { graphql } from '../../../src/__generated__';

const GET_CART_ITEMS = graphql(/* GraphQL */`
  query GET_CART_ITEMS ($userId: String!) {
    userCart(userId: $userId) {
      contents {
        productId
        quantity
      }
    }
  }
`)

export default GET_CART_ITEMS