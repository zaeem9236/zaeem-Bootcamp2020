import React, { useEffect } from 'react';


function CovidData(props) {
//   let set_GlobalCovidData = props.setGlobalCovidData();
    


    useEffect(() => {

        
          fetchBusinesses()

          function fetchBusinesses() {
            fetch('https://api.covid19api.com/summary')
            .then(response => response.json())
            .then(json => props.setGlobalCovidData(json))
          }
        
    },[]);


    return (
        <React.Fragment>

        </React.Fragment>
    );
}

export default CovidData;






