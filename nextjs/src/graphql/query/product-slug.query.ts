import { graphql } from '../../../src/__generated__';
export const productSlug = graphql(/* GraphQL */`
  query PRODUCT_SLUG {
    products {
      _id
      slug
    }
  }
`);
