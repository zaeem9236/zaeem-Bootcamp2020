import React,{useState} from 'react';
// import logo from './logo.svg';
import './App.css';

function App() {
  let[value, updateValue] = useState(0);
  let[color, updateColor] = useState(true);
  return (
    <div className={`App_${color ? '0' : '1' }`}>
      <h1>Value is {value}</h1>
      <hr />
      <button onClick={() => {updateColor(!color)}}>Change color</button>
      <button onClick={() => {updateValue(value+1)}}>update value</button>
    </div>
  );
}

export default App;
