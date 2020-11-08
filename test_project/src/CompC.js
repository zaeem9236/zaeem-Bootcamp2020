import React, { useContext } from 'react';
import { secretNumber } from './App';

function CompC(){
    let f = useContext(secretNumber);
    return(
        <React.Fragment>
            <h2>this is C component, and secret value I have is {f}</h2>
        </React.Fragment>
    );
}

export default CompC;