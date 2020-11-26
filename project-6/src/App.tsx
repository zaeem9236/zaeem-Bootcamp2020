import React, { useReducer } from 'react';
import './App.css';
import { Questions } from './QuizData/Questions';
import QuesView from './Components/QuesView';
import { stateType, actionType } from './Types/Types';
import globalContext from './Context&Reducer/ContextAPI';



function reducer(state: stateType, action : actionType){
  switch(action.type){
    case 'nextQuestion':
    return {...state,currentQuestion: state.currentQuestion+1,};
    default:
      return state;
  }
}


let initalState = {
  currentQuestion: 0,
  totalQuestion: 2 
}

function App() {
 let [state, dispatch] = useReducer(reducer, initalState);
//  console.log(state.currentQuestion,'ye wala')

  return (
    <div className="App">
      <globalContext.Provider value={{
        state,
        dispatch,
        h:"ertugral"
      }}>
        <h1>project 6</h1>
        <QuesView Questions={Questions[state.currentQuestion]} />
        {/* <button onClick={()=>{dispatch({type:'nextQuestion'})}}>df</button> */}
      </globalContext.Provider>

    </div>
  );
}

export default App;
