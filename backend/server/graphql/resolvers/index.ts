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
import {
  BlogPostMutation,
  BlogPostQueries,
  BlogPostSubscription
} from './blogPost';
const rootResolver = {
  Query: {
    ...ProductQueries,
    ...ReviewQueries,
    ...BlogPostQueries
  },
  Mutation: {
    ...ProductMutation,
    ...ReviewMutation,
    ...BlogPostMutation
  },
  Subscription: {
    ...ProductSubscription,
    ...ReviewSubscription,
    ...BlogPostSubscription
  }
};
export default rootResolver;
