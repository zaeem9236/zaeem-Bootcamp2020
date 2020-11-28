import React, { useReducer } from 'react';
import './App.css';
import { Questions } from './QuizData/Questions';
import StartPage from './Components/StartPage';
import QuesView from './Components/QuesView';
import Score from './Components/Score';
import { stateType, actionType } from './Types/Types';
import globalContext from './Context&Reducer/ContextAPI';
import { stat } from 'fs';
import { render } from '@testing-library/react';



function reducer(state: stateType, action: actionType) {
  switch (action.type) {
    case 'nextQuestion':
      return { ...state, currentQuestion: state.currentQuestion + 1, };
    case 'quizFinished':
      return { ...state, quizEnd: state.quizEnd = true };
    case 'scoreIncrement':
      return { ...state, score: state.score + 1 };
    case 'moveToQuiz':
        return { ...state, firstPage: state.firstPage = false };
    default:
      return state;
  }
}


let initalState = {
  currentQuestion: 0,
  totalQuestion: 3,
  quizEnd: false,
  score: 0,
  firstPage: true
}

function App() {
  let [state, dispatch] = useReducer(reducer, initalState);
  console.log(state.quizEnd, 'End check');

console.log(state.score,'Finaaal score')
  // if (state.currentQuestion === state.totalQuestion+1){
  //   console.log('muk gyaaaaaaaaaaa');
  // }
  // let renderComponent = <Score />;
  var renderComponent:JSX.Element = <StartPage />;
  if (state.firstPage === true){
    renderComponent = <StartPage />;
  }else if (state.quizEnd === false){
     renderComponent = <QuesView Questions={Questions[state.currentQuestion]} />;
  }else{
    renderComponent = <Score />
  }
  return (
    <div className="App">
      <globalContext.Provider value={{
        state,
        dispatch,
        h: "ertugral"
      }}>
        <h1>project 6</h1>
        
          
{renderComponent}
        
        {/* <button onClick={()=>{dispatch({type:'nextQuestion'})}}>df</button> */}
      </globalContext.Provider>

    </div>
  );
}

export default App;
