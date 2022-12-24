import { gql } from '@apollo/client';

export const productDetailsBySlug = gql(/* GraphQL */`
  query PRODUCT_BY_SLUG ($slug: String!) {
    product(slug: $slug) {
      _id
      createdAt
      updatedAt
      title
      price
      oldPrice
      imageurl
      rating
    }
  }
`);
