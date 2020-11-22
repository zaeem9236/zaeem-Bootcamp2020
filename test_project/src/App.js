import React, { useReducer } from 'react';
import './App.css';

function reducer(state, action){
  switch(action.type){
    case 'voltage_increment':
      return {...state, voltage: state.voltage + 1};
    case 'voltage_decrement': 
      return {...state, voltage: state.voltage - 1};
    case 'current_increment':
      return {...state, current: state.current + 1};
    case 'current_decrement': 
      return {...state, current: state.current - 1};
    default:
      return state;
  }
}

let initialState = {
  voltage: 5,
  current: 1
};

function App() {
  let[parameter, dispatch] = useReducer(reducer, initialState);
  return (
    <React.Fragment>
      <h1>Voltage: {parameter.voltage}</h1>
      <button onClick={()=>{dispatch({type: 'voltage_increment'})}}>Increment</button>
      <button onClick={()=>{dispatch({type: 'voltage_decrement'})}}>Decrement</button>
      <hr />
      <h1>Current: {parameter.current}</h1>
      <button onClick={()=>{dispatch({type: 'current_increment'})}}>Increment</button>
      <button onClick={()=>{dispatch({type: 'current_decrement'})}}>Decrement</button>
    </React.Fragment>
  );

}
export default App;
