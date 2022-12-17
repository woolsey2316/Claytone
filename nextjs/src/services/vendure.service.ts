import {
  ApolloClient,
  ApolloQueryResult,
  InMemoryCache,
} from "@apollo/client";

import { productListing } from "../queries/product.queries";
import { productDetailsBySlug } from "../queries/product-details.query";
import { productSlug } from "../queries/product-slug.query";

export class VendureService {
  private __client;

  constructor() {
    this.__client = new ApolloClient({
      uri: "http://localhost:5000/api",
      cache: new InMemoryCache(),
    });
  }

  public fetchProducts = async (): Promise<ApolloQueryResult<any>> => {
    const response = await this.__client.query({
      query: productListing,
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
}
