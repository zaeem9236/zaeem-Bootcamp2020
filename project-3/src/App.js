import React, { useContext } from 'react';
import ShoesData from './ShoesData';
import './App.css';

function App() {
  let value = useContext(ShoesData)
  // console.log(value);
  return (
    <div>
      <h1>project - 3</h1>
    </div>
  );
}

export default App;
