/**
 * Get all products query
 *
 */

import { gql } from '@apollo/client';

const GET_PRODUCTS = gql`
  query PRODUCTS {
    products {
      title
      _id
      imageurl
      price
      oldPrice
      rating
    }
  }
`;

export default GET_PRODUCTS;
