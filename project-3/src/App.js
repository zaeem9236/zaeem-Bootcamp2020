import React, { useState,createContext } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routing from './Components/Routing';
import Navbar from './Components/Navbar';

import './App.css';

const CartManagement = createContext('');
export { CartManagement };

function App() {
  const [cart, setCart] = useState([]);
  return (
    <React.Fragment>
      <CartManagement.Provider value={[cart, setCart]}>
        <BrowserRouter>
          <Navbar />
          <Routing />
        </BrowserRouter>
      </CartManagement.Provider>
    </React.Fragment>
  );
}

export default App;
