import React from 'react';
import Navbar from './components/Navbar.js';
import covid19_icon from './images/covid19.png';
import SummaryView from './components/SummaryView';
import Visualization from './components/Visualization';
import './App.css';

function App() {
  return (
    <React.Fragment>
      <div className='main_div'>
        <Navbar />
        <div className='image_and_stats'>
          <img className='covid_image' src={covid19_icon} alt=''></img>
          <SummaryView />
        </div>
        {/* <Visualization/> */}
      </div>
    </React.Fragment>
  );
}

export default App;
