import React from 'react';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
//
import './style.css';

export default function App() {
  const client = new ApolloClient({
    uri: 'https://api.spacex.land/graphql/',
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <div>
        <h1>Hello World!</h1>
      </div>
    </ApolloProvider>
  );
}
