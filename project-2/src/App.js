import React from 'react';
import Navbar from './components/Navbar.js';
import SummaryView from './components/SummaryView';
import Visualization from './components/Visualization';
import './App.css';

function App() {
  return (
    <React.Fragment>
      <div className='main_div'>
        <Navbar/>
        {/* <SummaryView/> */}
        {/* <Visualization/> */}
      </div>
    </React.Fragment>
  );
}

export default App;
