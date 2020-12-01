export type QuestionType =  {
    question: string;
    optionA: string;
    optionB: string;
    optionC: string;
    optionD: string;
    correctAns: string;
};

export type stateType = {
    currentQuestion: number;
    totalQuestion: number;
    quizEnd :boolean;
    score: number;
    firstPage: boolean;
};

export type actionType = {
    type: string;
}