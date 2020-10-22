import React, { createContext, useReducer } from 'react';
import AddTransaction from './components/AddTransaction';
import TransactionReducer from './TransReducer';

let initialTransactions = [
    {amount: 500,description: 'kulchay'},
    {amount: 100,description: 'roti'},
    {amount: 200,description: 'Book'}
];

let Global_transaction = createContext(initialTransactions);

export default Global_transaction;

//Reducer

export const TransactionProvider = ({}) => {

    let [state, dispatch] = useReducer(TransactionReducer,initialTransactions);

    function addTransaction(transObj){
        dispatch({
            type: 'AddTransaction',
            payload: {
                amount: transObj.amount, 
                description: transObj.description
            },
        });
    }

}

