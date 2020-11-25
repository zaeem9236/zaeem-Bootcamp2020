import React from 'react';
import './App.css';

function show(obj: {name:string, age: number, jobless: boolean}){
  console.log(obj.name,'yr');
}

function App() {
let Data = {
  name: 'zaeem',
  age: 26,
  jobless: true
}
  return (
    <div className="App">
       {show(Data)};
    </div>
  );
}

export default App;
