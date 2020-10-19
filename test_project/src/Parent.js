import React from 'react';
import Child from './Child.js';

function Parent(){
  return(
    <React.Fragment>
        <Child />
    </React.Fragment>
  );
}

export default Parent;