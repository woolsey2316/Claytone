/**
 * Define model for comment
 * @author David Woolsey <woolsey2316@gmail.com>
 */

import mongoose from 'mongoose';
import { IUser } from 'server/models/author';

export type IComment = {
  _id: mongoose.Schema.Types.ObjectId;
  user: IUser;
  comment: string;
  createdAt: Date;
  updatedAt: Date;
  blogpostId: mongoose.Schema.Types.ObjectId;
}

/**
 * Comment Schema
 */
const commentSchema = new mongoose.Schema<IComment>(
  {
    user: {
      id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
      },
      username: String
    },
    comment: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      required: true
    },
    updatedAt: {
      type: Date,
      required: true
    },
    blogpostId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "BlogPost"
    }
  },
  {
    timestamps: true
  }
);

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