import React from 'react';
import { QuestionType } from '../Types/Types';


function QuesView(props: {Questions: QuestionType}) {
    {console.log(props.Questions.question,'quessdon check')};

    return (
        <div>
            <h1>{props.Questions.question}</h1>
            <p>{props.Questions.optionA}</p>
            <p>{props.Questions.optionB}</p>
            <p>{props.Questions.optionC}</p>
            <p>{props.Questions.optionD}</p>
        </div>
    );
}

export default QuesView;