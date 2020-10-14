import React from 'react';
// import logo from './logo.svg';
import './App.css';
import PiaicCourses from './components/PIAIC_courses';

function App() {
  return (
    <React.Fragment>
      <div className='heading_div'>
        <h1 className='heading'>PIAIC Couses</h1>
        <hr />
      </div>

      <div className='AI' >
        <PiaicCourses instructor='Muhammad Qasim' name='Artificial Intelligence' duration='1' />
      </div>

      <div className="IOT">
        <PiaicCourses instructor='Imran Ali' name='Internet of Things' duration='1.5' />
      </div>

      <div className='BC'>
        <PiaicCourses instructor='Ahmad Manzoor' name='Blockchain' duration='1' />
      </div>

      <div className='CNC'>
        <PiaicCourses instructor='Amir Pinger' name='Cloud Native Computing' duration='1' />
      </div>
    </React.Fragment>
  );
}

export default App;
