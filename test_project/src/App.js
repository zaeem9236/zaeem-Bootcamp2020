import React, { useReducer } from 'react';
import './App.css';
import FineAdjust from './components/FineAdjust';
import Adjust1x from './components/Adjust1x';
import Adjust10x from './components/Adjust10x';

import Voltage from './stateManagement/GlobalContext';

function reducer(state, action) {
  switch (action.type) {
    case 'fine+':
      return {voltage: state.voltage + 0.1};
    case 'fine-':
      return {voltage: state.voltage - 0.1};
    case 'adjust1x+':
      return {voltage: state.voltage + 1};
    case 'adjust1x-':
      return {voltage: state.voltage - 1};
    case 'adjust10x+':
      return {voltage: state.voltage + 10};
    case 'adjust10x-':
      return {voltage: state.voltage - 10};
    default:
      return state;
  }
}
let initialState = {
  voltage: 3.3
};

function App() {
  let [state, dispatch] = useReducer(reducer, initialState);

  return (
    <React.Fragment>
      <h1>use Reducer with mutli state and actions</h1>

      <Voltage.Provider value={[state, dispatch]}>
        <h1>Voltage : {state.voltage}</h1>
        <FineAdjust />
        <Adjust1x />
        <Adjust10x />
      </Voltage.Provider>

    </React.Fragment>
  );

}
export default App;
