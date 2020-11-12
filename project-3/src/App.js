import React, { useContext } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Routing from './Components/Routing';
import Navbar from './Components/Navbar';

import ShoesData from './ShoesData';
import './App.css';

function App() {
  let value = useContext(ShoesData)
  // console.log(value);
  return (
    <React.Fragment>
      <BrowserRouter>
        <Navbar />
        <Routing />
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
