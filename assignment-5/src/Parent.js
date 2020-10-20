import React from 'react';
import Child1 from './Child1';
import Child2 from './Child2';

function Parent(){
    return(
        <React.Fragment>
            <Child1/>
            <Child2/>
        </React.Fragment>
    );
}

export default Parent;