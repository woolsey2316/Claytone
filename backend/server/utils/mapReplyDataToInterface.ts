import mongoose from "mongoose"
import { IComment } from "../models/comment"
import { IReply } from '../../../common/reply.type'

export const mapReplyDataToInterface = (reply: IReply) => {
  let reply_: IComment = {
    user: reply.user,
    createdAt: reply.createdAt,
    updatedAt: reply.updatedAt,
    comment: reply.comment,
    parentCommentId: new mongoose.Types.ObjectId(reply.parentCommentId),
    blogpostId: new mongoose.Types.ObjectId(reply.blogpostId),
    _id: new mongoose.Types.ObjectId()
  }
  return reply_
}