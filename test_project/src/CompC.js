import React, { useContext } from 'react';
import { secretName } from './CompX';

function CompC(){
    let secretNameC = useContext(secretName);
    return(
        <React.Fragment>
            <h2>this is C component, and secret value I have is :{secretNameC}</h2>
        </React.Fragment>
    );
}

export default CompC;