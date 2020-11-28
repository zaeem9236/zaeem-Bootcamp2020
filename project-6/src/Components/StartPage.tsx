import React, { useContext } from 'react';
import globalContext from '../Context&Reducer/ContextAPI';
import { stateType, actionType } from '../Types/Types';



function StartPage(){
    type ac = { type: string }

    let reducerFunc = useContext(globalContext) as { state: stateType, dispatch: (({ }: ac) => {}), h: string };

    return(
        <React.Fragment>
            <button onClick={()=>{reducerFunc.dispatch({type: 'moveToQuiz'})}}>click here to start</button>
        </React.Fragment>
    )
}


export default StartPage;