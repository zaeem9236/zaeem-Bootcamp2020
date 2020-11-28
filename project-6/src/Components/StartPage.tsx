import React, { useContext } from 'react';
import globalContext from '../Context&Reducer/ContextAPI';
import { stateType, actionType } from '../Types/Types';



function StartPage(){
    type ac = { type: string }

    let reducerFunc = useContext(globalContext) as { state: stateType, dispatch: (({ }: ac) => {}), h: string };

    return(
        <div className='start_page'>
            <button className='start_button' onClick={()=>{reducerFunc.dispatch({type: 'moveToQuiz'})}}><p>click here to start</p></button>
        </div>
    )
}


export default StartPage;