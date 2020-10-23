import React, { useContext, useReducer } from 'react';
import Parent from './Parent.js';
import CentralisedData from './CentralisedData';
import AppReducer from './AppReducer';


function App() {
  let [state, dispatch] =useReducer(AppReducer, 12);
  return (
    <React.Fragment>
        <CentralisedData.Provider value={[state, dispatch]}>
        <Parent />
        </CentralisedData.Provider>
    </React.Fragment>
  );
}

export default App;