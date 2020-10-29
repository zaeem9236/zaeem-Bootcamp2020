import React, { useEffect, useState } from 'react';


function App() {

  let postdata = fetch('https://jsonplaceholder.typicode.com/posts',
  {
    method:'POST',
    body: JSON.stringify({
      title: 'xyz',
      body: 'abc',
      userId: 1
    }),
    headers:{
      'Content-type': 'application/json; charset=UTF-8',
    }
  });
  postdata.then((resolve)=>{
    return ( resolve.json() );
  })
  .then((resolve)=>{
    console.log(resolve);
  });


  return (
    <React.Fragment>
      <h1>App.js</h1>
    </React.Fragment>
  );
}

export default App;