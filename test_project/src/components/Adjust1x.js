import React, { useContext } from 'react';
import '../App.css';
import Voltage from '../stateManagement/GlobalContext';


function Adjust1x(){
    let [state, dispatch] = useContext(Voltage);

    return(
        <React.Fragment>
            <h4>Adjust 1 x</h4>
            <button onClick={()=>{dispatch({type: 'adjust1x+'})}}>Adjust 1x +</button>
            <button onClick={()=>{dispatch({type: 'adjust1x-'})}}>Adjust 1x -</button>
            <hr />
        </React.Fragment>
    );
}

export default Adjust1x;