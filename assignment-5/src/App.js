import React, { useState } from 'react';
import Parent from './components/Parent/Parent.js';
import CentralisedData from './CentralisedData';
import './App.css';

function App() {
  let [count, updateCount] = useState(0);
  return (
    <React.Fragment>
        <CentralisedData.Provider value={[count, updateCount]}>
          <Parent />
        </CentralisedData.Provider>
    </React.Fragment>
  );
}

export default App;
