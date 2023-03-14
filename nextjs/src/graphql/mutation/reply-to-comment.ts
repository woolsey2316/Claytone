import { graphql } from '../../__generated__';

export const replyToComment = graphql(/* GraphQL */`
  mutation REPLY_TO_COMMENT ($reply: InputReply!) {
    replyToComment(reply: $reply) {
      
    }
  }
`);