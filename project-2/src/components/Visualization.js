import React from 'react';
import { Bar } from 'react-chartjs-2';

function Visualization(props) {

    var Confirmed = 0, Recovered = 0, Deaths = 0;

    if (props.globalCovidData.Countries !== undefined) { // check: Data is valid
        if (props.country === '-1') { //check: World Data
            Confirmed = props.globalCovidData.Global.TotalConfirmed;
            Recovered = props.globalCovidData.Global.TotalRecovered;
            Deaths = props.globalCovidData.Global.TotalDeaths;
        } else { //check: Selected Country Data
            Confirmed = props.globalCovidData.Countries[props.country].TotalConfirmed;
            Recovered = props.globalCovidData.Countries[props.country].TotalRecovered;
            Deaths = props.globalCovidData.Countries[props.country].TotalDeaths;
        }
    }

    const data = {
        labels: ['Infected', 'Recovered', 'Death'],
        datasets: [
            {
                label: 'Bar Graph view',
                backgroundColor: 'rgba(177, 7, 7, 0.63)',
                borderColor: 'rgba(255,99,132,1)',
                borderWidth: 1,
                hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                hoverBorderColor: 'rgba(255,99,132,1)',
                data: [Confirmed, Recovered, Deaths]
            },
        ]
    };

    return (
        <React.Fragment>
            <div className='bar_chart_div'>
                <div className='bar_chart'>
                    <Bar data={data} options={{
                        maintainAspectRatio: false
                    }} />
                </div>
            </div>
        </React.Fragment>
    );
}

export default Visualization;