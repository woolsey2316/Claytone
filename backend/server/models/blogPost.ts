/**
 * Define model for blogpost
 * @author David Woolsey <woolsey2316@gmail.com>
 */

import mongoose from 'mongoose';
import { IUser } from 'server/models/author';


export type IBlogpost = {
  author: IUser; 
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
    author: {
      id: {
        type: mongoose.Types.ObjectId,
        ref: "User"
      },
      username: String
    },
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
    excerpt: {
      type: String,
      required: true,
      unique: false,
    },
    content: {
      type: String,
      required: true,
      unique: false,
    },
    createdAt: {
      type: Date,
      required: true
    },
    updatedAt: {
      type: Date,
      required: true
    },
    featuredPost: {
      type: Boolean,
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
   * @param {String} slug - The slug of blogpost.
   */
  get(slug: string): mongoose.Document {
    return this.find({slug: slug})
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
