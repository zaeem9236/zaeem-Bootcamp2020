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
};

export type actionType = {
    type: string;
}