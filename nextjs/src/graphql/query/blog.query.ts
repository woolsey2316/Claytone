/**
 * Get all blogs query
 *
 */

import { graphql } from '../../../src/__generated__';

const GET_BLOGS = graphql(/* GraphQL */`
  query BLOGS {
    blogPosts {
      author {
        username
      }
      createdAt
      slug
      title
      excerpt
    }
  }
`);

export default GET_BLOGS;