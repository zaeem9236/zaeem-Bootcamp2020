import React, { useContext } from 'react';
import '../App.css';
import Voltage from '../stateManagement/GlobalContext';

function FineAdjust(){
    let [state, dispatch] = useContext(Voltage);
    return(
        <React.Fragment>
            <hr />
            <h4>Fine Adjust</h4>
            <button onClick={()=>{dispatch({type: 'fine+'})}}>Fine Adjust +</button>
            <button onClick={()=>{dispatch({type: 'fine-'})}}>Fine Adjust -</button>
            <hr />
        </React.Fragment>
    );
}

export default FineAdjust;