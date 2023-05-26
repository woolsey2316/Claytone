/**
 * Define model for blogpost
 * @author David Woolsey <woolsey2316@gmail.com>
 */

import mongoose from 'mongoose';

export type CartContents = {
  productId: string;
  quantity: number;
  price: number;
  image: string;
  name: string;
  model: string;
}

export type ICart = {
  userId: string; 
  contents: CartContents[];
  _id: string;
  createdAt: Date;
  updatedAt: Date;
}

/**
 * cart Schema
 */
const cartSchema = new mongoose.Schema<ICart>(
  {
    userId: {
      type: String,
      required: true
    },
    contents: {
      type: [{ 
        productId: String,
        quantity: Number,
        price: Number,
        name: String,
        model: String,
        image: String 
      }],
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
  },
  {
    timestamps: true
  }
);

export default mongoose.model('cart', cartSchema);
