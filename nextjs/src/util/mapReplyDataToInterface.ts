
import { Comment } from '../__generated__/graphql'
import { IComment } from "../../../common/comment.type"

export const mapReplyDataToInterface = (comment: Comment) => {
  const reply: IComment = {
    user: comment?.user,
    createdAt: comment?.createdAt,
    updatedAt: comment?.updatedAt,
    comment: comment?.comment,
    parentCommentId: comment?.parentCommentId ?? undefined,
    _id: comment._id
  }
  return reply
}