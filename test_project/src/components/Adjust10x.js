import React, { useContext } from 'react';
import '../App.css';
import Voltage from '../stateManagement/GlobalContext';

function Adjust10x(){
    let [state, dispatch] = useContext(Voltage);

    return(
        <React.Fragment>
            <h4>Adjust 10x</h4>
            <button onClick={()=>{dispatch({type: 'adjust10x+'})}}>Adjust 10x +</button>
            <button onClick={()=>{dispatch({type: 'adjust10x-'})}}>Adjust 10x -</button>
            <hr />
        </React.Fragment>
    );
}

export default Adjust10x;