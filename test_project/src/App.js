import React from 'react';
import Parent from './Parent.js';
import globalStates from './globalStates.js';

function App() {
  return(
    <React.Fragment>
      <globalStates.Provider value={23}>
      <Parent />
      </globalStates.Provider>
    </React.Fragment>
  );
}

export default App;