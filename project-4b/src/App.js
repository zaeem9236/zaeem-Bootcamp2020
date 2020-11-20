import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import SecondPage from './components/SecondPage';
import ThirdPage from './components/ThirdPage';
import FourthPage from './components/FourthPage';

function App() {
  return (
    <div>
        <Navbar />
      <div className='home_page'>
        <p className='home_page_heading'>Internet of Things</p>
      </div>

      <SecondPage />
      <ThirdPage />
      <FourthPage />
    </div>
  );
}

export default App;
