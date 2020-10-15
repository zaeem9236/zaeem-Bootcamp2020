import React, { useState } from 'react';
// import logo from './logo.svg';
import './App.css';

function App() {
  let [count, updateCount] = useState(0); 
  let [nightMode, updateMode] = useState(true);
  return (
    <div className="main_div">
      <div className='color_change'>
  <button className='color_change_button' onClick={()=>{updateMode(!nightMode)}}>{nightMode ? "Light Mode" : "Dark Mode"}</button>
      </div>

      <div className='counter_section'>
        <button className='decrement_button' onClick={()=>{
          if(count > 0){
            updateCount(count-1);
          }
        }}> - </button>
        <div className='counter'>
          <h1 className='counter_text'>{count}</h1>
        </div>
        <button className='increment_button' onClick={() =>{
          updateCount(count+1);
        }}> + </button>
      </div>
    </div>
  );
}

export default App;
