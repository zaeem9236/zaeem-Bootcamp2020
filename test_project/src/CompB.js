import React, { useContext } from 'react';
import CompC from './CompC';
import { secretName } from './CompX';

function CompB(){
    let secretNameB = useContext(secretName);
    return(
        <React.Fragment>
            <CompC />
            <h2>this is B component, and secret value I have is :{secretNameB}</h2>
        </React.Fragment>
    );
}

export default CompB;