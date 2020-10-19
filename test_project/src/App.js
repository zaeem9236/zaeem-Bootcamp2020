import React from 'react';
import Parent from './Parent.js';
import globalStates from './globalStates.js';

function App() {
  return(
    <React.Fragment>
      <globalStates.Provider value={123}>
      <Parent />
      </globalStates.Provider>
    </React.Fragment>
  );
}

export default App;