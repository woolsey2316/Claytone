import { ApolloClient, ApolloProvider } from "@apollo/client";
import App from 'next/app';
/** * App Configuration */
import React from 'react';

import '../styles/globals.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { CustomInMemoryCache } from "@/cache";

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
  cache: CustomInMemoryCache,
});

class MyApp extends App<any> {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
    );
  }
} // Wraps all components in the tree with the data provider
export default MyApp;
