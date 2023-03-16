/**
 * Define model for comment
 * @author David Woolsey <woolsey2316@gmail.com>
 */

import mongoose, { Schema } from 'mongoose';

export interface IComment {
  _id: mongoose.Types.ObjectId;
  user: string;
  comment: string;
  createdAt: Date;
  updatedAt: Date;
  blogpostId: mongoose.Types.ObjectId;
  parentCommentId?: mongoose.Types.ObjectId;
  replies?: IComment[];
}

/**
 * Comment Schema
 */
const commentSchema = new Schema<IComment>(
  {
    user: {
      type: String,
      required: true
    },
    comment: {
      type: String,
      required: true
    },
    createdAt: {
      type: Date,
      required: true
    },
    updatedAt: {
      type: Date,
      required: true
    },
    parentCommentId: {
      type: mongoose.Schema.Types.ObjectId
    },
    blogpostId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "BlogPost"
    },
  },
  {
    timestamps: true
  }
);

commentSchema.add({ replies  : [commentSchema] })


/**
 * Statics
 */
commentSchema.statics = {
  /**
   * Get comment
   * @param {ObjectId} id - The objectId of comment.
   */
  get(id: string): mongoose.Document {
    return this.findById(id)
      .execAsync()
      .then((comment: IComment) => {
        if (comment) {
          return comment;
        }
        return {};
      });
  }
};

export default mongoose.model('comment', commentSchema);