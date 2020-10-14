import React,{useState} from 'react';
// import logo from './logo.svg';
import './App.css';

function App() {
  let[value, updateValue] = useState(0);
  return (
    <div className="App">
      <h1>Value is {value}</h1>
      <hr />
      <button onClick={() => {updateValue(value+1)}}>update value</button>
    </div>
  );
}

export default App;
