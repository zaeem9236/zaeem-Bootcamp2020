import React, { useState } from 'react';


function App() {

  var [data, setdata] = useState(0);
  
   let raw = fetch('https://jsonplaceholder.typicode.com/todos/1');
      raw.then(function(a){
          return a.json();
      })
      raw.then(function(s){
        console.log(s.status);
        setdata(s);
      },)

  return (
    <React.Fragment>
      <h1>{data.status}</h1>
    </React.Fragment>
  );
}

export default App;