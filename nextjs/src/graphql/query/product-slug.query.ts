import { gql } from '@apollo/client';

export const productSlug = gql(/* GraphQL */`
  query PRODUCT_SLUG {
    products {
      _id
      slug
    }
  }
`);
