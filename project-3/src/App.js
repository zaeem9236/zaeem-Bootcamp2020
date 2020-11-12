import React, { useContext } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CompA from './Components/CompA';
import CompB from './Components/CompB';
import CompC from './Components/CompC';

import ShoesData from './ShoesData';
import './App.css';

function App() {
  let value = useContext(ShoesData)
  // console.log(value);
  return (
    <div>
      <h1>project - 3</h1>
      <CompA />
      <CompB />
      <CompC />
    </div>
  );
}

export default App;
