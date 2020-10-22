import { createContext, useReducer } from 'react';
import TransactionReducer from './TransactionReducer';


// Context API
let initialTransactions = [
    { amount: 1600, desc: 'hair medicine ' },
    { amount: 3000, desc: 'car petrol ' },
    { amount: 200, desc: 'hair cut  ' }
];

let TransactionContext = createContext(initialTransactions);

export default TransactionContext;


// useReducer
let[state, dispatch] = useReducer(TransactionReducer, initialTransactions);



