/** * File containing all user queries, mutations and subscriptions */
import { PubSub } from 'apollo-server';
import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';

import config from '../../../config';
import Product from '../../models/product';

type ProductInput = {
  slug: string
  rating: number
  title: string
  price: number
  oldPrice?: number
  createdAt: string
  updatedAt: string
  imageurl: string
}
const pubsub = new PubSub();
const PRODUCT_ADDED = 'PRODUCT_ADDED';
/** * Product Queries */
const ProductQueries = {
  products: async (_parent, _args, _context) => {
    const products = await Product.find();
    return products
  },
  product: async (_parent, { slug }) => {
    const product = await Product.find({slug: slug});
    return product[0];
  }
};
/** * Product Mutations */
const ProductMutation = {
  createProduct: async (_parent, { productInput } ) => {
    const product = await Product.findOne({ title: productInput.title });
    if (product) {
      throw new Error('product already Exists');
    } else {
      const newProduct = new Product({
        _id: new mongoose.Types.ObjectId(),
        title: productInput.title,
        imageurl: productInput.imageurl,
        price: productInput.price,
        oldPrice: productInput.oldPrice,
        rating: productInput.rating,
        updatedAt: productInput.updatedAt,
        createdAt: productInput.createdAt,
        slug: productInput.slug
      });
      console.log("productInput = ", productInput)
      const savedProduct = await newProduct.save();
      pubsub.publish(PRODUCT_ADDED, {
        productAdded: savedProduct
      });
      const token = jwt.sign({ productId: savedProduct.id }, config.jwtSecret, {
        expiresIn: '1h'
      });
      return { productId: savedProduct.id, token, tokenExpiration: 1 };
    }
  },
  updateProduct: async (_parent, { updateProduct }, _context) => {
    // TODO If not authenticated throw error
    const product = await Product.findByIdAndUpdate(updateProduct._id, updateProduct, {
      new: true
    });
    return product;
  }
};
/** * Product Subscriptions */
const ProductSubscription = {
  productAdded: { subscribe: () => pubsub.asyncIterator([PRODUCT_ADDED]) }
};
export { ProductMutation, ProductQueries, ProductSubscription };
