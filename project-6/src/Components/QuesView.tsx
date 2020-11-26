import React, { useContext } from 'react';
import { QuestionType } from '../Types/Types';
import globalContext from '../Context&Reducer/ContextAPI';
import { stateType, actionType } from '../Types/Types';



function QuesView(props: { Questions: QuestionType }) {

    type ac = { type: string }

    let reducerFunc = useContext(globalContext) as { state: stateType, dispatch: (({ }: ac) => {}), h: string };

    console.log(reducerFunc.state, 'current Qus');

    // console.log(x.dispatch('sd'));


    // console.log(dispatch('nextQuestion'));



    return (
        <div>
            <h1>{props.Questions.question}</h1>
            <p>{props.Questions.optionA}</p>
            <p>{props.Questions.optionB}</p>
            <p>{props.Questions.optionC}</p>
            <p>{props.Questions.optionD}</p>
            <button onClick={() => {
                if (reducerFunc.state.currentQuestion < reducerFunc.state.totalQuestion -1) {
                    reducerFunc.dispatch({
                        type: 'nextQuestion'
                    })
                }
            }}>Next</button>
        </div>
    );
}

export default QuesView;