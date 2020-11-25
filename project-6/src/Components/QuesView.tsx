import React, { useContext } from 'react';
import { QuestionType } from '../Types/Types';
import globalContext from '../Context&Reducer/ContextAPI';
import { stateType, actionType } from '../Types/Types';



function QuesView(props: {Questions: QuestionType}) {
 let [state,dispatch] = useContext(globalContext);
// console.log(x.currentQuestion,'current Qus');
console.log(dispatch);

    return (
        <div>
            <h1>{props.Questions.question}</h1>
            <p>{props.Questions.optionA}</p>
            <p>{props.Questions.optionB}</p>
            <p>{props.Questions.optionC}</p>
            <p>{props.Questions.optionD}</p>
            {/* <button onClick={()=>{dispatch({type:'nextQuestion'})}}>Next</button> */}
        </div>
    );
}

export default QuesView;