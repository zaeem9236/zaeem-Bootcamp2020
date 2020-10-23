import React, { useContext } from 'react';
import CentralisedData from './CentralisedData';


function Child2() {
    let [state, dispatch] = useContext(CentralisedData);
    console.log(state);
    return (
        <React.Fragment>
            <h1>Child 2</h1>
            <h4>value: {state.desc}</h4>
            <h4>value: {state.amount}</h4>
            <button onClick={() => { dispatch(
                {type: 'Add',
                payload:{
                    desc:'datketi', 
                    amount: 1000000
                    }}) }}>
                Do not press:)
            </button>
        </React.Fragment>
    );
}

export default Child2;