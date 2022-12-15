/**
 * Define model for product
 * @author David Woolsey <woolsey2316@gmail.com>
 */

import mongoose from 'mongoose';

export type IProduct = mongoose.Schema;

/**
 * Product Schema
 */
const productSchema = new mongoose.Schema(
  {
    _id: mongoose.Schema.Types.ObjectId,
    title: {
      type: String,
      required: true,
    },
    imageUrl: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    oldPrice: {
      type: Number,
      required: false,
    },
    date: {
      type: Date,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);

/**
 * Statics
 */
productSchema.statics = {
  /**
   * Get product
   * @param {ObjectId} id - The objectId of product.
   */
  get(id: string): mongoose.Document {
    return this.findById(id)
      .execAsync()
      .then((product: IProduct) => {
        if (product) {
          return product;
        }
        return {};
      });
  },
};

export default mongoose.model('product', productSchema);
