/**
 * Define model for category
 * @author David Woolsey <woolsey2316@gmail.com>
 */

import mongoose from 'mongoose';

export type ICategory = {
  name: string;
  slug: string;
}

/**
 * category Schema
 */
const categorySchema = new mongoose.Schema<ICategory>(
  {
    name: {
      type: String,
      required: true
    },
    slug: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
);

/**
 * Statics
 */
categorySchema.statics = {
  /**
   * Get category
   * @param {ObjectId} id - The objectId of category.
   */
  get(id: string): mongoose.Document {
    return this.findById(id)
      .execAsync()
      .then((category: ICategory) => {
        if (category) {
          return category;
        }
        return {};
      });
  }
};

export default mongoose.model('category', categorySchema);