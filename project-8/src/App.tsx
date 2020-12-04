import React from 'react';
import './App.css';
import { ApolloProvider } from "@apollo/client";
import client  from './config/gql_config';
import Peoples from './components/Peoples';

function App() {
  return (
    <ApolloProvider client={client}>
      <div>
        <h2>My first Apollo app 🚀</h2>
        <Peoples />
      </div>
    </ApolloProvider>
  );
}

export default App;
