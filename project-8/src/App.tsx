import React from 'react';
import './App.css';
import { ApolloProvider } from "@apollo/client";
import client  from './config/gql_config';
import Student from './components/Student';

function App() {
  return (
    <ApolloProvider client={client}>
      <div>
        <h2>My first Apollo app 🚀</h2>
        <Student />
      </div>
    </ApolloProvider>
  );
}

export default App;
