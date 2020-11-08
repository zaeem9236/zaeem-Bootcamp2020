import React, { createContext } from 'react';
import CompA from './CompA';
import CompB from './CompB';
import CompC from './CompC';
import {globalData} from './CentralisedData';
import './App.css';


function App() {

  return (
    <React.Fragment>
      {/* <globalData.Provider> */}
        <CompA />
        <CompB />
        <CompC />
      {/* </globalData.Provider> */}
    </React.Fragment>
  );

}
export default App;
