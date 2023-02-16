/**
 * Define model for author
 * @author David Woolsey <woolsey2316@gmail.com>
 */

import mongoose from 'mongoose';

export type IAuthor = {
  name: string;
  photo: string;
  bio: string;
}

/**
 * author Schema
 */
const authorSchema = new mongoose.Schema<IAuthor>(
  {
    name: {
      type: String,
      required: true
    },
    photo: {
      type: String,
      required: true
    },
    bio: {
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
authorSchema.statics = {
  /**
   * Get author
   * @param {ObjectId} id - The objectId of author.
   */
  get(id: string): mongoose.Document {
    return this.findById(id)
      .execAsync()
      .then((author: IAuthor) => {
        if (author) {
          return author;
        }
        return {};
      });
  }
};

export default mongoose.model('author', authorSchema);