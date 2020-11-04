import React,{useState} from 'react';
import CovidData from './components/CovidData';
import Navbar from './components/Navbar';
import Select from './components/Select';
import SummaryView from './components/SummaryView';
import Visualization from './components/Visualization';
import './App.css';




function App() {
  const [country, updateCountry] = useState('-1');
  let[globalCovidData, setGlobalCovidData] = useState({});
  // console.log(globalCovidData.Countries,"in app component");
  // console.log(country,'selected Country');
  return (
    <React.Fragment>
      <div className='main_div'>
        <CovidData setGlobalCovidData={setGlobalCovidData} />
        <Navbar />
        <Select globalCovidData={globalCovidData} updateCountry={updateCountry} country={country}/>
        <SummaryView globalCovidData={globalCovidData} country={country} />
        <Visualization globalCovidData={globalCovidData} country={country} />
      </div>
    </React.Fragment>
  );
}

export default App;
