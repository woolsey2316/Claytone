/** * Exporting all resolvers */
import {
  ProductMutation,
  ProductQueries,
  ProductSubscription,
} from './product';
const rootResolver = {
  Query: {
    ...ProductQueries, // Add other queries here
  },
  Mutation: {
    ...ProductMutation, // Add other mutations here
  },
  Subscription: {
    ...ProductSubscription, // Add other subscriptions here
  },
};
export default rootResolver;
