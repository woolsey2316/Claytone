/**
 * Define model for blogpost
 * @author David Woolsey <woolsey2316@gmail.com>
 */

import mongoose from 'mongoose';


export type IBlogpost = {
  title: string;
  _id: string;
  imageurl: string;
  slug: string;
  excerpt: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
  featuredPost: boolean;

}

/**
 * blogPost Schema
 */
const blogPostSchema = new mongoose.Schema<IBlogpost>(
  {
    title: {
      type: String,
      required: true
    },
    imageurl: {
      type: String,
      required: true
    },
    slug: {
      type: String,
      required: true,
      unique: true,
    },
    createdAt: {
      type: Date,
      required: true
    },
    updatedAt: {
      type: Date,
      required: true
    },
  },
  {
    timestamps: true
  }
);

/**
 * Statics
 */
blogPostSchema.statics = {
  /**
   * Get blogpost
   * @param {ObjectId} id - The objectId of blogpost.
   */
  get(id: string): mongoose.Document {
    return this.findById(id)
      .execAsync()
      .then((blogpost: IBlogpost) => {
        if (blogpost) {
          return blogpost;
        }
        return {};
      });
  }
};

export default mongoose.model('blogpost', blogPostSchema);
