import React, { useState } from 'react';
// import logo from './logo.svg';
import './App.css';

function App() {
  let [display, displayUpdate] = useState(false);
  return (
    <div className='main_div'>
      <div className='box'>
        <div className='sub_box1'>
          {/* <p>sub box</p> */}
        </div>
        <div className='sub_box2'>
          {/* <p>sub box</p> */}
        </div>
        
      </div>
    </div>
  );
}

export default App;
