import React, { useReducer } from 'react';
import CentralisedStates from '../../CentralisedStates';
import './Child2.css';

function Child2() {
    let [counter, dispatch] = useReducer(CentralisedStates, 0);
    return (
        <React.Fragment>
            <h2 className='child2_heading'>Increment/Decrement is performed using <span className='child2_method'> useReducer</span></h2>
            <h3 className='child2_counter'>counter: {counter}</h3>
            <div className='buttons'>
                <button onClick={() => { dispatch('Increment') }} className='child2_button'>
                    <span className='child2_button_text'>Increment</span>
                </button>
                <button onClick={() => { dispatch('Decrement') }} className='child2_button'>
                    <span  className='child2_button_text'>Decrement</span>
                </button>
            </div>
        </React.Fragment>
    );
}

export default Child2;