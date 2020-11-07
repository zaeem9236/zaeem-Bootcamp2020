import React, { useEffect } from 'react';


function CovidData(props) {
//   let set_GlobalCovidData = props.setGlobalCovidData();
    

    useEffect(() => {

        function fetchBusinesses() {
            fetch('https://api.covid19api.com/summary')
            .then(response => response.json())
            .then(json => props.setGlobalCovidData(json))
          }
          fetchBusinesses()
        
    },[]);


    return (
        <React.Fragment>

        </React.Fragment>
    );
}

export default CovidData;






