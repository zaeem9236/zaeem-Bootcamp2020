import React from 'react';
// import logo from './logo.svg';
import './App.css';
import PIAIC_courses from './components/PIAIC_courses';

function App() {
  return (
    <React.Fragment>
      <div className='AI' >
      <PIAIC_courses instructor='Muhammad Qasim' name='Artificial Intelligence' duration='1'/>
      </div>
      
      <div className="IOT">
      <PIAIC_courses instructor='Imran Ali' name='Internet of Things' duration='1.5'/>
      </div>
      
      <div className='BC'>
      <PIAIC_courses instructor='Ahmad Manzoor' name='Blockchain' duration='1'/>
      </div>
      
      <div className='CNC'>
      <PIAIC_courses instructor='Amir Pinger' name='Cloud Native Computing' duration='1'/>
      </div>
    </React.Fragment>
  );
}

export default App;
