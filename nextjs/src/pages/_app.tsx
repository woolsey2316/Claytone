import { ApolloProvider } from '@apollo/react-hooks';
import App from 'next/app';
/** * App Configuration */
import React from 'react';

import '../styles/globals.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader

import withData from '../configureClient';
class MyApp extends App<any> {
  render() {
    const { Component, pageProps, apollo } = this.props;
    return (
      <ApolloProvider client={apollo}>
        <Component {...pageProps} />
      </ApolloProvider>
    );
  }
} // Wraps all components in the tree with the data provider
export default withData(MyApp);
