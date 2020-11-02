import React from 'react';
import Navbar from './components/Navbar';
import Select from './components/Select';
import SummaryView from './components/SummaryView';
import Visualization from './components/Visualization';
import './App.css';

function App() {
  return (
    <React.Fragment>
      <div className='main_div'>
        <Navbar />
        <Select/>
          {/* <SummaryView /> */}
        {/* <Visualization/> */}
      </div>
    </React.Fragment>
  );
}

export default App;
