/** * Exporting all resolvers */
import {
  ProductMutation,
  ProductQueries,
  ProductSubscription
} from './product';
import {
  ReviewMutation,
  ReviewQueries,
  ReviewSubscription
} from './review';
const rootResolver = {
  Query: {
    ...ProductQueries,
    ...ReviewQueries
  },
  Mutation: {
    ...ProductMutation,
    ...ReviewMutation
  },
  Subscription: {
    ...ProductSubscription,
    ...ReviewSubscription
  }
};
export default rootResolver;
