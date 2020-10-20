import React, { useReducer } from 'react';
import AppReducer from './AppReducer';

function Child2() {

    let[state, dispatch] = useReducer(AppReducer, 1);

    return (
        <React.Fragment>
            <h1>This is Second child, Increment is performed using useReducer </h1>
            <h1>child2 value: {state}</h1>
            <button onClick={() => {dispatch('Increment') }}>Increment</button>
        </React.Fragment>
    );
}

export default Child2;