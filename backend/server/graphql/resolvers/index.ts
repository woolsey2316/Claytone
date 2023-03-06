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
const rootResolver = {
  Query: {
    ...ProductQueries,
    ...ReviewQueries,
    ...BlogPostQueries,
    ...CommentQueries
  },
  Mutation: {
    ...ProductMutation,
    ...ReviewMutation,
    ...BlogPostMutation,
    ...CommentMutation
  },
  Subscription: {
    ...ProductSubscription,
    ...ReviewSubscription,
    ...BlogPostSubscription,
    ...CommentSubscription
  }
};
export default rootResolver;
