import React, { createContext } from 'react';

let transactions = [
    { description: 'biryani', amount: 170 },
    { description: 'haircut', amount: 250 },
    { description: 'petrol', amount: 3000 }
];

 let GlobalTransactions = createContext(transactions);

 export default GlobalTransactions;

