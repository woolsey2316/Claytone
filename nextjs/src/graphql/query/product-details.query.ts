import { graphql } from '../../../src/__generated__';

export const productDetailsBySlug = graphql(/* GraphQL */`
  query PRODUCT_BY_SLUG ($slug: String!) {
    product(slug: $slug) {
      _id
      createdAt
      updatedAt
      slug
      title
      price
      oldPrice
      imageurl
      description
      rating
      brand
      productCode
      stock
    }
  }
`);
