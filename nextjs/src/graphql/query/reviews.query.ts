import { graphql } from '../../../src/__generated__';

export const REVIEWS = graphql(/* GraphQL */`
  query REVIEWS($productId: String!){
    reviews(productId: $productId) {
     	name
    }
  }
`)