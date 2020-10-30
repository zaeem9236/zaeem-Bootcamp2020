import React, { useState } from 'react';
import { Pie } from 'react-chartjs-2';





function Piechart() {
    let [data1, setdata1] = useState(0);
    let [data2, setdata2] = useState(0);

    const data = {
        labels: [
            'Red',
            'Blue',
            'Yellow'
        ],
        datasets: [{
            data: [data1, 50],
            backgroundColor: [
                '#FF6384',
                '#36A2EB',
                '#FFCE56'
            ],
            hoverBackgroundColor: [
                '#FF6384',
                '#36A2EB',
                '#FFCE56'
            ]
        }]
    };

    return (
        <div>
            <h2>Pie Example</h2>
            <Pie data={data} height={50} />
            <button onClick={()=>{
                setdata1(data1+1);
            }}>data1</button>

            <button onClick={()=>{
                setdata2(data2+1);
            }}>data2</button>
        </div>
    );
}

export default Piechart;
