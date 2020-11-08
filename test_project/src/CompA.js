import React, { useContext } from 'react';
import CompB from './CompB';
import {secretName} from './CompX';

function CompA(){
    let secretNameA = useContext(secretName);
    return(
        <React.Fragment>
            <CompB/>
            <h2>this is A component, and secret value I have is :{secretNameA}</h2>

        </React.Fragment>
    );
}

export default CompA;