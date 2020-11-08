import React, { useContext } from 'react';
import {globalData} from './CentralisedData';

function CompA(){
    const value = useContext(globalData);
    return(
        <React.Fragment>
            <h2>this is A component, and secret value I have is :{value}</h2>
        </React.Fragment>
    );
}

export default CompA;