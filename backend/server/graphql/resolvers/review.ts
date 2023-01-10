/** * File containing all user queries, mutations and subscriptions */
import { PubSub } from 'apollo-server';
import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';

import config from '../../../config';
import Review from '../../models/review';

// type InputReview = {
//   name: string
//   description: string
//   rating: string
//   productId: string
// }
const pubsub = new PubSub();
const REVIEW_ADDED = 'REVIEW_ADDED';
/** * Review Queries */
const ReviewQueries = {
  reviews: async (_parent, {productId}) => {
    const reviews = await Review.find({productId: productId});
    return reviews
  }
};
/** * Review Mutations */
const ReviewMutation = {
  createReview: async (_parent, { reviewInput } ) => {
    const newReview = new Review({
      _id: new mongoose.Types.ObjectId(),
      name: reviewInput.name,
      description: reviewInput.description,
      rating: reviewInput.rating,
      date: reviewInput.date,
      productId: reviewInput.productId,
    });
    const savedReview = await newReview.save();
    pubsub.publish(REVIEW_ADDED, {
      reviewAdded: savedReview
    });
    const token = jwt.sign({ reviewId: savedReview.id }, config.jwtSecret, {
      expiresIn: '1h'
    });
    return { token };
  }
};
/** * Review Subscriptions */
const ReviewSubscription = {
  reviewAdded: { subscribe: () => pubsub.asyncIterator([REVIEW_ADDED]) }
};
export { ReviewMutation, ReviewQueries, ReviewSubscription };
