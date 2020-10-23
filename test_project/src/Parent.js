import React from 'react';
import Child1 from './Child1.js';
import Child2 from './Child2.js';
import Child3 from './Child3.js';

function Parent(){
    return(
        <React.Fragment>
            <Child1 />
            <Child2 />
            <Child3 />
        </React.Fragment>
    );
}

export default Parent;