import { graphql } from '../../../src/__generated__';

export const replyToComment = graphql(/* GraphQL */`
  mutation REPLY_TO_COMMENT ($reply: InputComment!) {
    replyToComment(reply: $reply) {
      user
      comment
    }
  }
`);