import React, { useContext } from 'react';
import {globalData} from './CentralisedData';
function CompB(){
    let value = useContext(globalData);
    return(
        <React.Fragment>
            <h2>this is B component, and secret value I have is :{value}</h2>
        </React.Fragment>
    );
}

export default CompB;