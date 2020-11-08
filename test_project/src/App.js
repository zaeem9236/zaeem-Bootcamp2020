import React, { createContext } from 'react';
import CompA from './CompA';
import './App.css';

const secretNumber = createContext('6549');

function App() {

  return(
    <React.Fragment>
      <CompA/>
    </React.Fragment>
  );
  
}
export default App;
export { secretNumber };