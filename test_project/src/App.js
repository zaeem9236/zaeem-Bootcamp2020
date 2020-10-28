import React from 'react';


function App() {
  
  let promise = fetch('https://jsonplaceholder.typicode.com/todos/1');
    promise.then(function(response){
      return (response.json());
    })
    promise.then(function(response){
      console.log(response);
    })
  return (
    <React.Fragment>
      <h1>fetching data...</h1>
    </React.Fragment>
  );
}

export default App;