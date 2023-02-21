/**
 * Define model for product
 * @author David Woolsey <woolsey2316@gmail.com>
 */

import mongoose, { Schema } from 'mongoose';

export type IReview = {
  name: string;
  description: string;
  rating: number;
  productId: Schema.Types.ObjectId;

}

/**
 * Product Schema
 */
const reviewSchema = new mongoose.Schema<IReview>(
  {
    name: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    rating: {
      type: Number,
      required: true,
    },
    productId: {
      type: Schema.Types.ObjectId,
      ref: 'Product'
    },
  },
  {
    timestamps: true
  }
);

/**
 * Statics
 */
reviewSchema.statics = {
  /**
   * Get review
   * @param {ObjectId} id - The objectId of review.
   */
  get(id: string): mongoose.Document {
    return this.findById(id)
      .execAsync()
      .then((review: IReview) => {
        if (review) {
          return review;
        }
        return {};
      });
  }
};

export default mongoose.model('review', reviewSchema);
