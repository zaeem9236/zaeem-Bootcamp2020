import React from 'react';
import './App.css';


function App() {




  return (
    <React.Fragment>
      <div className='main_div'>
        <h1 className='heading_1'> heading1 </h1>
        <button onClick={() => {
          fetch('https://project-wm12375.firebaseio.com/iotData/.json', {
            method: 'GET',
            // body: JSON.stringify({
            //   title: 'foo',
            //   body: 'bar',
            //   userId: 1,
            // }),
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
          })
            .then((response) => response.json())
            .then((json) => console.log(json))
        }}>get Data</button>
      </div>
    </React.Fragment>
  );
}

export default App;