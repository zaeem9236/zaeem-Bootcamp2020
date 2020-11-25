import React, { useReducer } from 'react';
import './App.css';
import { Questions } from './QuizData/Questions';
import QuesView from './Components/QuesView';
import { stateType, actionType } from './Types/Types';
import globalContext from './Context&Reducer/ContextAPI';



function reducer(state: stateType, action : actionType){
  switch(action.type){
    default:
      return state;
  }
}

let initalState = {
  currentQuestion: '',
}

function App() {
 let [state, dispatch] = useReducer(reducer, initalState);
  return (
    <div className="App">
      <globalContext.Provider value='f'>
        <h1>project 6</h1>
        <QuesView Questions={Questions[0]} />
      </globalContext.Provider>

    </div>
  );
}

export default App;
