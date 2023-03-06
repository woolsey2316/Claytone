import { graphql } from '../../../src/__generated__';

export const commentsByBlogPostId = graphql(/* GraphQL */`
  query COMMENT_BY_BLOGPOST_ID ($blogpostId: String!) {
    comments(blogpostId: $blogpostId) {
      comment
      createdAt
      updatedAt
      user {
        username
      }
    }
  }
`);