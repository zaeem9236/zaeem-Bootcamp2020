import React from 'react';
// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="main_div">
      <div className='color_change'>
        <button></button>
      </div>

      <div className='counter_section'>
        <button className='decrement_button'> - </button>
        <div className='counter'>
          <h1 className='counter_text'>1</h1>
        </div>
        <button className='increment_button'> + </button>
      </div>
    </div>
  );
}

export default App;
