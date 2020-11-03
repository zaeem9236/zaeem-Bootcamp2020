import React,{useState} from 'react';
import CovidData from './components/CovidData';
import Navbar from './components/Navbar';
import Select from './components/Select';
import SummaryView from './components/SummaryView';
import Visualization from './components/Visualization';
import './App.css';




function App() {
  let[globalCovidData, setGlobalCovidData] = useState({});
  console.log(globalCovidData,"in app component");
  return (
    <React.Fragment>
      <div className='main_div'>
        <CovidData setGlobalCovidData={setGlobalCovidData} />
        <Navbar />
        <Select />
        <SummaryView />
        {/* <Visualization/> */}
      </div>
    </React.Fragment>
  );
}

export default App;
