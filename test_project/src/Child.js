import React, { useContext } from 'react';
import globalStates from './globalStates.js';

function Child() {
    let [value, updateValue] = useContext(globalStates);
    return (
        <React.Fragment>
            <h1>This is First child, Increment is performed using context API and useState</h1>
            <h1>child value: {value}</h1>
            <button onClick={()=> {updateValue(++value)}}>
                Increment
            </button>
        </React.Fragment>
    );
}

export default Child;