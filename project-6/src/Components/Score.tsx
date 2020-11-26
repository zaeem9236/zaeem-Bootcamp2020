import React, {useContext} from 'react';
import globalContext from '../Context&Reducer/ContextAPI';
import { stateType, actionType } from '../Types/Types';



function Score(){
    type ac = { type: string }

    let reducerFunc = useContext(globalContext) as { state: stateType, dispatch: (({ }: ac) => {}), h: string };
    return(
        <div>
            <h1>hurrayyyy quiz finish ho gya</h1>
    <h3>Score: {reducerFunc.state.score}</h3>
        </div>
    );
}

export default Score;