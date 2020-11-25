export type QuestionType =  {
    question: string;
    optionA: string;
    optionB: string;
    optionC: string;
    optionD: string;
    correctAns: string;
};

export type stateType = {
    currentQuestion: string;
};

export type actionType = {
    type: string;
}