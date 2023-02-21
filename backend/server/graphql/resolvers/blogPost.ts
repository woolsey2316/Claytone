/** * File containing all user queries, mutations and subscriptions */
import { PubSub } from 'apollo-server';
import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';

import config from '../../../config';
import BlogPost from '../../models/blogPost';

const pubsub = new PubSub();
const BLOGPOST_ADDED = 'BLOGPOST_ADDED';
/** * BlogPost Queries */
const BlogPostQueries = {
  blogPosts: async (_parent, _args, _context) => {
    const blogPosts = await BlogPost.find();
    return blogPosts
  },
  blogPost: async (_parent, { slug }) => {
    const blogPosts = await BlogPost.find({slug: slug});
    return blogPosts[0];
  }
};
/** * BlogPost Mutations */
const BlogPostMutation = {
  createBlogPost: async (_parent, { blogInput } ) => {
    const newBlogPost = new BlogPost({
      _id: new mongoose.Types.ObjectId(),
      title: blogInput.title,
      author: blogInput.author,
      nLikes: blogInput.nLikes,
      nComments: blogInput.nComments,
      imageUrl: blogInput.imageUrl,
      updatedAt: blogInput.updatedAt,
      createdAt: blogInput.createdAt,
      slug: blogInput.slug,
      excerpt: blogInput.excerpt,
      featuredPost: blogInput.featuredPost,
      content: blogInput.content
    });
    const savedBlogPost = await newBlogPost.save();
    pubsub.publish(BLOGPOST_ADDED, {
      blogAdded: savedBlogPost
    });
    const token = jwt.sign({ blogId: savedBlogPost.id }, config.jwtSecret, {
      expiresIn: '1h'
    });
    return { token };
  }
};
/** * BlogPost Subscriptions */
const BlogPostSubscription = {
  blogPostAdded: { subscribe: () => pubsub.asyncIterator([BLOGPOST_ADDED]) }
};
export { BlogPostMutation, BlogPostQueries, BlogPostSubscription };
