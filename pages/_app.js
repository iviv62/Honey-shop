import 'tailwindcss/tailwind.css'
import Layout from '../components/Layout'
import '../public/styles.css'
import React from 'react';

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,

} from "@apollo/client";

const client = new ApolloClient({
  uri: 'https://48p1r2roz4.sse.codesandbox.io',
  cache: new InMemoryCache()
});

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
    <Layout>
    <Component {...pageProps} />
    </Layout>
    </ApolloProvider>
  )
  
}

export default MyApp
