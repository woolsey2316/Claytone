/** * File containing all user queries, mutations and subscriptions */
import { PubSub } from 'apollo-server';
import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';
import { mapReplyDataToInterface } from '../../../server/utils/mapReplyDataToInterface';
// import { mapReplyDataToInterface } from '../../utils/mapReplyDataToInterface';

import config from '../../../config';
import Comment from '../../models/comment';

const pubsub = new PubSub();
const COMMENT_ADDED = 'COMMENT_ADDED';
/** * Comment Queries */
const CommentQueries = {
  comments: async (_parent, { blogpostId }) => {
    const comments = await Comment.find({blogpostId});
    return comments
  },
  replies: async (_parent, { commentId }) => {
    const parentComment = await Comment.findById(commentId);
    return parentComment?.replies
  },
};
/** * Comment Mutations */
const CommentMutation = {
  replyToComment: async (_parent, { reply }) => {
    let reply_ = mapReplyDataToInterface(reply) 
    const newComment = await Comment.findByIdAndUpdate(
      reply_.parentCommentId,
      {$push:{replies: reply_}},
      {new: true}
    )
    return newComment
  },
  createComment: async (_parent, { commentInput } ) => {
    const newComment = new Comment({
      _id: new mongoose.Types.ObjectId(),
      user: commentInput.user,
      updatedAt: commentInput.updatedAt,
      createdAt: commentInput.createdAt,
      comment: commentInput.comment,
    });
    const savedComment = await newComment.save();
    pubsub.publish(COMMENT_ADDED, {
      commentAdded: savedComment
    });
    const token = jwt.sign({ commentId: savedComment.id }, config.jwtSecret, {
      expiresIn: '1h'
    });
    return { token };
  }
};
/** * Comment Subscriptions */
const CommentSubscription = {
  commentAdded: { subscribe: () => pubsub.asyncIterator([COMMENT_ADDED]) }
};
export { CommentMutation, CommentQueries, CommentSubscription };
