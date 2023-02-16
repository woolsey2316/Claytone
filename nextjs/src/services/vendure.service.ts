import {
  ApolloClient,
  ApolloQueryResult,
  InMemoryCache,
} from "@apollo/client";

import blogs from "../graphql/query/blog.query";
import { blogDetailsBySlug } from "../graphql/query/blog-details.query";
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

  public fetchProducts = async (): Promise<ApolloQueryResult<any>> => {
    const response = await this.__client.query({
      query: products,
    });
    return response;
  };

  public fetchBlogSlugs = async (): Promise<ApolloQueryResult<any>> => {
    const response = await this.__client.query({
      query: blogs,
    });
    return response;
  };

  public fetchProductSlugs = async (): Promise<ApolloQueryResult<any>> => {
    const response = await this.__client.query({
      query: productSlug,
    });
    return response;
  };

  public fetchProductBySlugs = async (
    slug: string
  ): Promise<ApolloQueryResult<any>> => {
    const response = await this.__client.query({
      query: productDetailsBySlug,
      variables: { slug },
    });
    return response;
  };

  public fetchBlogBySlugs = async (
    slug: string
  ): Promise<ApolloQueryResult<any>> => {
    const response = await this.__client.query({
      query: blogDetailsBySlug,
      variables: { slug },
    });
    return response;
  };
}
