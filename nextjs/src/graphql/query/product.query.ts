/**
 * Get all products query
 *
 */

import { graphql } from '../../../src/__generated__';

const GET_PRODUCTS = graphql(/* GraphQL */`
  query PRODUCTS {
    products {
      title
      _id
      imageurl
      price
      oldPrice
      description
      briefDescription
      type
      rating
    }
  }
`);

export default GET_PRODUCTS;
