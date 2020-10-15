import React,{useState} from 'react';
// import logo from './logo.svg';
import './App.css';

function App() {
    let[display, displayUpdate] = useState(false);
  return (
    <div>
      <button className='expand' onClick={()=> {displayUpdate(!display); console.log(display)} }>click to expand</button>
      <div className = 'parent_headings'>
      <h1 className='headings'>zaeem</h1>
      <h1 className='headings'>zaeem</h1>
      <h1 className='headings'>zaeem</h1>
      <h1 className='headings'>zaeem</h1>
      </div>
      <div className={`list ${display ? 'list_none' : ''}`}>
      <ul>
        <li>zaeem</li>
        <li>farhan</li>
        <li>hassan</li>
      </ul>
      </div>

    </div>
  );
}

export default App;
