import React,{useState}from 'react';
import Parent from './Parent.js';
import globalStates from './globalStates.js';

function App(){
  let [value, updateValue] = useState(1);
  return(
    <React.Fragment>
      <globalStates.Provider value={[value, updateValue]}>
      <Parent />
      </globalStates.Provider>
    </React.Fragment>
  );
}

export default App;