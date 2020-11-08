import React from 'react';
import CompB from './CompB';

function CompA(){
    return(
        <React.Fragment>
            <CompB/>
        </React.Fragment>
    );
}

export default CompA;