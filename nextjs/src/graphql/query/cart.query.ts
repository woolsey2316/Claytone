import { graphql } from '../../../src/__generated__';

const GET_CART_ITEMS = graphql(/* GraphQL */`
  query GET_CART_ITEMS ($userId: String!) {
    userCart(userId: $userId) {
      _id
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
`)

export default GET_CART_ITEMS