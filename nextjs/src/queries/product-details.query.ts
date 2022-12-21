import { gql } from "@apollo/client";

export const productDetailsBySlug = gql`
  query ($slug: String!) {
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
`;
