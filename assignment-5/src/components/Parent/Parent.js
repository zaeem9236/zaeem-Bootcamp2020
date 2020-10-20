import React from 'react';
import Child1 from '../Child1/Child1.js';
import Child2 from '../Child2/Child2.js';


function Parent(){
    return(
        <React.Fragment>
            <Child1 />
            <Child2 />
        </React.Fragment>
    );
}

export default Parent;