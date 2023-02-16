/**
 * Define model for comment
 * @author David Woolsey <woolsey2316@gmail.com>
 */

import mongoose from 'mongoose';

export type IComment = {
  name: string;
  email: string;
  comment: string;
}

/**
 * comment Schema
 */
const commentSchema = new mongoose.Schema<IComment>(
  {
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    comment: {
      type: String,
      required: true,
    },
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