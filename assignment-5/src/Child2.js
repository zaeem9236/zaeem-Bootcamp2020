import React, { useReducer } from 'react';
import CentralisedStates from './CentralisedStates';

function Child2(){
    let [counter, dispatch] = useReducer(CentralisedStates, 0);
    return(
        <React.Fragment>
            <h1>Increment is performed using useReducer</h1>
            <h3>counter: {counter}</h3>
            <button onClick={() => { dispatch('Increment') }}>Increment</button>
            <button onClick={() => { dispatch('Decrement') }}>Decrement</button>
        </React.Fragment>
    );
}

export default Child2;