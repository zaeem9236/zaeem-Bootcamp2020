import React, { createContext } from 'react';

let data = [
    {amount: 170,   desc: 'biryani'},
    {amount: 250,   desc: 'hair cut'},
    {amount: 3000,  desc: 'car Petrol'}
];

const GlobalData = createContext(data);

export default GlobalData;      

