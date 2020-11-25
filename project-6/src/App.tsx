import React from 'react';
import './App.css';
import { Questions } from './QuizData/Questions';
import QuesView from './Components/QuesView';
import { QuestionType } from './Types/Types';


let file = {
  message: 'heloo world',
  text: '123'
};

function App() {
  // {console.log(add(2,3))};
  return (
    <div className="App">
       <h1>project 6</h1>
       <QuesView Questions ={Questions[0]} />

    </div>
  );
}

export default App;
