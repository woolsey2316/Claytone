/**
 * Define model for product
 * @author David Woolsey <woolsey2316@gmail.com>
 */

import mongoose from 'mongoose';


export type IProduct = {
  title: string;
  _id: string;
  imageurl: string;
  slug: string;
  price: number;
  oldPrice?: number;
  date: string;
  rating: number;
  description: string;
  createdAt: Date;
  updatedAt: Date;
  brand: string;
  productCode: string;
  stock: number;

}

/**
 * Product Schema
 */
const productSchema = new mongoose.Schema<IProduct>(
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
    price: {
      type: Number,
      required: true
    },
    oldPrice: {
      type: Number,
      required: false
    },
    createdAt: {
      type: Date,
      required: true
    },
    updatedAt: {
      type: Date,
      required: true
    },
    description: {
      type: String,
      required: false
    },
    rating: {
      type: Number
    },
    brand: {
      type: String
    },
    productCode: {
      type: String
    },
    stock: {
      type: Number
    }
  },
  {
    timestamps: true
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
  }
};

export default mongoose.model('product', productSchema);
