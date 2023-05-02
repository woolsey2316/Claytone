import { graphql } from '../../../src/__generated__';

export const GET_REPLIES = graphql(/* GraphQL */`
  query GET_REPLIES ($commentId: String!) {
    replies(parentId: $commentId) {
      _id
      createdAt
      updatedAt
      comment
      user
    }
  }
`);