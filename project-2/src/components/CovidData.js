import React, { useEffect } from 'react';


function CovidData(props) {
//   let set_GlobalCovidData = props.setGlobalCovidData();
    
function fetchBusinesses() {
    fetch('https://api.covid19api.com/summary')
    .then(response => response.json())
    .then(json => props.setGlobalCovidData(json))
  }

    useEffect(() => {

        
          fetchBusinesses()
        
    },[fetchBusinesses]);


    return (
        <React.Fragment>

        </React.Fragment>
    );
}

export default CovidData;






