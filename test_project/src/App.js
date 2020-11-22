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
  let[updatedState, dispatch] = useReducer(reducer, initialState);
  return (
    <React.Fragment>
      <h1>Counter: {updatedState}</h1>
      <button onClick={()=>{dispatch('increment')}}>Increment</button>
      <button onClick={()=>{dispatch('decrement')}}>Secrement</button>
    </React.Fragment>
  );

}
export default App;
