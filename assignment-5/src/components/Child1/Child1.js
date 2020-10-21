import React, { useContext } from 'react';
import CentralisedData from '../../CentralisedData';
import './Child1.css';

function Child1() {
    let [count, updateCount] = useContext(CentralisedData);
    console.log(count);
    return (
        <React.Fragment>
            <h1 className='child1_heading'>Increment is performed using Context-API</h1>
            <h3 className='child1_counter'>counter: {count}</h3>
            <div className='buttons'>
                <button onClick={() => { updateCount(++count) }} className='child1_button'>
                    <span className='child1_button_text'>Increment</span>
                </button>
                <button onClick={() => { updateCount(--count) }} className='child1_button'>
                    <span className='child1_button_text'>Decrement</span>
                </button>
            </div>
        </React.Fragment>
    );
}

export default Child1;