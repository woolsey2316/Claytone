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
import {
  CommentMutation,
  CommentQueries,
  CommentSubscription
} from './comment';
import {
  CartMutation,
  CartQueries,
  CartSubscription
} from './cart';
const rootResolver = {
  Query: {
    ...ProductQueries,
    ...ReviewQueries,
    ...BlogPostQueries,
    ...CommentQueries,
    ...CartQueries
  },
  Mutation: {
    ...ProductMutation,
    ...ReviewMutation,
    ...BlogPostMutation,
    ...CommentMutation,
    ...CartMutation
  },
  Subscription: {
    ...ProductSubscription,
    ...ReviewSubscription,
    ...BlogPostSubscription,
    ...CommentSubscription,
    ...CartSubscription
  }
};
export default rootResolver;
