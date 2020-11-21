import React, { useReducer } from 'react';
import './App.css';

function reducer(state, action){
  switch(action){
    case 'increment':
      return state + 1;
    case 'decrement':
      return state - 1;
      default:
      return state;
  }
}

let initialState = 0;

function App() {
  let [count,dispatch] = useReducer(reducer, initialState);
  return (
    <React.Fragment>
      <h3>value: {count}</h3>
      <button onClick={()=>{dispatch('increment')}}>Increment</button>
      <button onClick={()=>{dispatch('decrement')}}>Decrement</button>
    </React.Fragment>
  );

}
export default App;
