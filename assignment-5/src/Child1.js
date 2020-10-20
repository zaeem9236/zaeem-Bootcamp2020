import React,{ useContext} from 'react';
import CentralisedData from './CentralisedData.js';

function Child1(){
    let [count, updateCount] = useContext(CentralisedData);
    console.log(count);
    return(
        <React.Fragment>
            <h1>Increment is performed using Context-API</h1>
            <h3>counter: {count}</h3>
            <button onClick={() => { updateCount(++count) }}>Increment</button>
            <button onClick={() => { updateCount(--count) }}>Decrement</button>
        </React.Fragment>
    );
}

export default Child1;