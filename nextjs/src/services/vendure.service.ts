import {
  ApolloClient,
  ApolloQueryResult,
  InMemoryCache,
} from "@apollo/client";

import { Blog_By_SlugQuery,BlogsQuery, Comment_By_Blogpost_IdQuery,Get_Cart_ItemsQuery,Product_By_SlugQuery, Product_SlugQuery, ProductsQuery } from "@/__generated__/graphql";

import blogs from "../graphql/query/blog.query";
import carts from "../graphql/query/cart.query";
import { blogDetailsBySlug } from "../graphql/query/blog-details.query";
import { commentsByBlogPostId } from '../graphql/query/comment-id.query';
import products from "../graphql/query/product.query";
import { productDetailsBySlug } from "../graphql/query/product-details.query";
import { productSlug } from "../graphql/query/product-slug.query";

export class VendureService {
  private __client;

  constructor() {
    this.__client = new ApolloClient({
      uri: "http://localhost:5000/graphql",
      cache: new InMemoryCache(),
    });
  }
  public fetchCart = async (userId: string): Promise<ApolloQueryResult<Get_Cart_ItemsQuery>> => {
    const response = await this.__client.query({
      query: carts,
      variables: {userId}
    });
    return response;
  };

  public fetchProducts = async (): Promise<ApolloQueryResult<ProductsQuery>> => {
    const response = await this.__client.query({
      query: products,
    });
    return response;
  };

  public fetchBlogSlugs = async (): Promise<ApolloQueryResult<BlogsQuery>> => {
    const response = await this.__client.query({
      query: blogs,
    });
    return response;
  };

  public fetchProductSlugs = async (): Promise<ApolloQueryResult<Product_SlugQuery>> => {
    const response = await this.__client.query({
      query: productSlug,
    });
    return response;
  };

  public fetchProductBySlugs = async (
    slug: string
  ): Promise<ApolloQueryResult<Product_By_SlugQuery>> => {
    const response = await this.__client.query({
      query: productDetailsBySlug,
      variables: { slug },
    });
    return response;
  };

  public fetchBlogBySlugs = async (
    slug: string
  ): Promise<ApolloQueryResult<Blog_By_SlugQuery>> => {
    const response = await this.__client.query({
      query: blogDetailsBySlug,
      variables: { slug },
    });
    return response;
  };

  public fetchCommentsByBlogPostId = async (blogpostId: string) 
  : Promise<ApolloQueryResult<Comment_By_Blogpost_IdQuery>> => {
    const response = await this.__client.query({
      query: commentsByBlogPostId,
      variables: { blogpostId },
    });
    return response
  }
}
