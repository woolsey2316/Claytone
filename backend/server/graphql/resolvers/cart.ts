/** * File containing all user queries, mutations and subscriptions */
import { PubSub } from 'apollo-server';
import mongoose from 'mongoose';

import Cart, { ICart } from '../../models/cart';

type CartInput = {
  cartInput : ICart
}
type DeleteArgs = {
  deleteArgs: {
    cartContentId: number
    userId: string
  }
}
const pubsub = new PubSub();
const CART_ADDED = 'CART_ADDED';
/** * Cart Queries */
const CartQueries = {
  userCart: async (_parent, { userId }) => {
    const userCart = await Cart.find({userId});
    if (userCart.length === 0) return
    return userCart[0]
  },
};
/** * Cart Mutations */
const CartMutation = {
  addToCart: async (_parent, { cartInput }: CartInput ) => {
    const userCart = await Cart.find({userId: cartInput.userId})
    if (userCart.length === 0) {
      const cart = new Cart({
        _id: new mongoose.Types.ObjectId(),
        createdAt: cartInput.createdAt,
        updatedAt: cartInput.updatedAt,
        userId: cartInput.userId,
        contents: cartInput.contents,
      });
      const savedCart = await cart.save();
      pubsub.publish(CART_ADDED, {
        blogAdded: savedCart
      });
      return savedCart
    } else {
      let oldContents = userCart[0]?.contents!

      // Updates product quantity 
      let newQuantity = oldContents?.map(oldProduct => {
        for (const newQuantity of cartInput.contents) {
          if (oldProduct.productId === newQuantity.productId) {
            return newQuantity
          }
        }
        return oldProduct
      })

      newQuantity = newQuantity.filter(elem => elem.quantity > 0)

      // Adds whole product if productId not already in cart
      const newContents = cartInput.contents?.reduce((acc, curr) => {
        let alreadyInCart = false
        for (let newProduct of newQuantity) {
          if (curr.productId === newProduct?.productId) {
            alreadyInCart = true
          }
        }
        if (!alreadyInCart) {
          return curr.quantity > 0 ? acc ? [...acc, curr] : [curr] : [...acc]
        } else {
          return acc
        }
        
      }, newQuantity)
      
      const newCart = await Cart.findOneAndUpdate(
        {userId: cartInput.userId},
        {contents: newContents},
        {new: true}
      )

      return newCart
    }
  },
  deleteCart: async (_parent, { deleteArgs }: DeleteArgs ) => {
    const userCart = await Cart.find({userId: deleteArgs.userId})
    if (userCart.length === 0) {
      return
    }
    let oldContents = userCart[0]?.contents!
    let newContents = oldContents.filter((_cartContent, index) => index !== deleteArgs.cartContentId)
    const newCart = await Cart.findOneAndUpdate(
        {userId: deleteArgs.userId},
        {contents: newContents},
        {new: true}
      )
    return newCart
  }
};
/** * Cart Subscriptions */
const CartSubscription = {
  cartAdded: { subscribe: () => pubsub.asyncIterator([CART_ADDED]) }
};
export { CartMutation, CartQueries, CartSubscription };
