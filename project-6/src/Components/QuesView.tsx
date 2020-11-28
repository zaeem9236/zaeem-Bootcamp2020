import React, { useContext, useState } from 'react';
import '../App.css';
import { QuestionType } from '../Types/Types';
import globalContext from '../Context&Reducer/ContextAPI';
import { stateType, actionType } from '../Types/Types';
import RadioButton from './RadioButton';
import { TargetElement } from '@testing-library/user-event';



function QuesView(props: { Questions: QuestionType }) {
    let [answer, updateAnnswer] = useState(false);
    console.log(answer, 'answer waali state');

    type ac = { type: string }

    let reducerFunc = useContext(globalContext) as { state: stateType, dispatch: (({ }: ac) => {}), h: string };

    console.log(reducerFunc.state.currentQuestion, reducerFunc.state.totalQuestion - 1, 'current Qus');

    // console.log(x.dispatch('sd'));


    // console.log(dispatch('nextQuestion'));
    function answercheck(e: any) {
        console.log(e.target.childNodes[0], 'ye masla');

        if (props.Questions.correctAns === e.target.childNodes[0].textContent as string) {
            console.log('correct Answer')
            updateAnnswer(true);
        } else {
            console.log('wrong Answer');
        }
    }


    return (
        <div>
            <h1>{props.Questions.question}</h1>
            <div><button onClick={answercheck} className='option_buttons'>{props.Questions.optionA}</button></div>
            <div><button onClick={answercheck} className='option_buttons'>{props.Questions.optionB}</button></div>
            <div><button onClick={answercheck} className='option_buttons'>{props.Questions.optionC}</button></div>
           <div><button onClick={answercheck} className='option_buttons'>{props.Questions.optionD}</button></div>
            <button onClick={() => {
                if (reducerFunc.state.currentQuestion !== reducerFunc.state.totalQuestion - 1) {
                    reducerFunc.dispatch({
                        type: 'nextQuestion' //move to next question
                    })

                if (answer === true){
                    reducerFunc.dispatch({
                        type: 'scoreIncrement' //move to next question
                    })

                    console.log(reducerFunc.state.score,'finaleee')

                }

                
                updateAnnswer(false); // again set answer to false

                



                } else {
                    console.log('else wala ol')
                    reducerFunc.dispatch({ type: 'quizFinished' })
                }
            }}>Next</button>
        </div>
    );
}

export default QuesView;