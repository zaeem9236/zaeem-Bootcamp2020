import React,{useContext} from 'react';
import globalStates from './globalStates.js';

function Child() {
  let value = useContext(globalStates);
    return(
    <React.Fragment>
        <h1>value is : {value}</h1>
    </React.Fragment>
  );
}

export default Child;