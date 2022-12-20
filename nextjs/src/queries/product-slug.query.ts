import { gql } from "@apollo/client";

export const productSlug = gql`
  query {
    products {
      _id
      slug
    }
  }
`;
