/**
 * Get all products query
 *
 */

import gql from 'graphql-tag';

const GET_PRODUCTS = gql`
  {
    products {
      title
      _id
      date
      imageUrl
      price
      oldPrice
      rating
    }
  }
`;

export default GET_PRODUCTS;