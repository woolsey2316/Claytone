/** * File containing all user queries, mutations and subscriptions */
import { PubSub } from 'apollo-server';
import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';

import { transformProduct } from './merge';
import Product from '../../models/product';
import config from '../../../config';

import { IProduct } from '@/types/Product';

const pubsub = new PubSub();
const PRODUCT_ADDED = 'PRODUCT_ADDED';
/** * Product Queries */
const ProductQueries = {
  products: async (_parent, _args, _context) => {
    const products = await Product.find();
    return products.map((product: IProduct) => {
      return transformProduct(product);
    });
  },
  product: async (_parent, { productId }) => {
    const product = await Product.findById(productId);
    return transformProduct(product);
  },
};
/** * Product Mutations */
const ProductMutation = {
  createProduct: async (_parent, { productInput }) => {
    const product = await Product.findOne({ title: productInput.title });
    if (product) {
      throw new Error('product already Exists');
    } else {
      const newProduct = new Product({
        _id: new mongoose.Types.ObjectId(),
        title: productInput.title,
        imageUrl: productInput.imageUrl,
        price: productInput.price,
        oldPrice: productInput.oldPrice,
        date: productInput.date,
        description: productInput.description,
        rating: productInput.rating,
      });
      const savedProduct = await newProduct.save();
      pubsub.publish(PRODUCT_ADDED, {
        productAdded: transformProduct(savedProduct),
      });
      const token = jwt.sign({ productId: savedProduct.id }, config.jwtSecret, {
        expiresIn: '1h',
      });
      return { productId: savedProduct.id, token, tokenExpiration: 1 };
    }
  },
  updateProduct: async (_parent, { productId, updateProduct }, context) => {
    // If not authenticated throw error
    if (!context.isAuth) {
      throw new Error('Non Authenticated');
    }
    const product = await Product.findByIdAndUpdate(productId, updateProduct, {
      new: true,
    });
    return transformProduct(product);
  },
};
/** * Product Subscriptions */
const ProductSubscription = {
  productAdded: { subscribe: () => pubsub.asyncIterator([PRODUCT_ADDED]) },
};
export { ProductMutation, ProductQueries, ProductSubscription };
