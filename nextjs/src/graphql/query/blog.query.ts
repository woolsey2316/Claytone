/**
 * Get all blogs query
 *
 */

import { graphql } from '../../../src/__generated__';

const GET_BLOGS = graphql(/* GraphQL */`
  query BLOGS {
    postsConnection {
      edges {
        node {
          author {
            bio
            name
            id
            photo {
              url
            }
          }
          createdAt
          slug
          title
          excerpt
          featuredImage {
            url
          }
          categories {
            name
            slug
          }
        }
      }
    }
  }
`);

export default GET_BLOGS;