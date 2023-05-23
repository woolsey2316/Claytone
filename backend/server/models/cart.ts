/**
 * Define model for blogpost
 * @author David Woolsey <woolsey2316@gmail.com>
 */

import mongoose from 'mongoose';

type CartContents = {
  productId: string;
  quantity: number
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
      type: [{ productId: String, quantity: Number }],
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
