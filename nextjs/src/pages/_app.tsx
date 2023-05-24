import { ApolloClient, ApolloProvider } from "@apollo/client";
import App from 'next/app';
/** * App Configuration */
import React, { createContext } from 'react';

import '../styles/globals.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { CustomInMemoryCache } from "@/cache";
import { VendureService } from "../services/vendure.service";
import { Get_Cart_ItemsQuery } from "@/__generated__/graphql";
import { Cart } from "@/__generated__/graphql";

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
  cache: CustomInMemoryCache,
});

export const CartContext = createContext<Cart | null | undefined>(null);

type MyState = {
  userCart: Get_Cart_ItemsQuery["userCart"]
}
type MyProps = { /* additional props here */ }

class MyApp extends App<MyProps,any,MyState> {
  constructor(props: any) {
    super(props);
    this.state = {
      userCart: null
    };
  }
  async componentDidMount() {
    const vendureService = new VendureService();
    const resp = await vendureService.fetchCart("1");
    this.setState({userCart: resp.data.userCart})
  }
  render() {
    const { Component, pageProps } = this.props;
    return (
      <ApolloProvider client={client}>
        <CartContext.Provider value={this.state.userCart}>
          <Component {...pageProps} />
        </CartContext.Provider>
      </ApolloProvider>
    );
  }
} // Wraps all components in the tree with the data provider
export default MyApp;
