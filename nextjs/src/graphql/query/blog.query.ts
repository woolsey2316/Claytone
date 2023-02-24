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
      title
      author
      nLikes
      nComments
      imageUrl
      createdAt
      updatedAt
      slug
      excerpt
      featuredPost
      content
    }
  }
`);

export default GET_BLOGS;