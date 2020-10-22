import React, { useContext } from 'react';
import TransContext from '../TransContext';

export default function TransactionHistory() {

    let transactions = useContext(TransContext)

    return (
        <React.Fragment>
            <div className='transaction_history'>
                <h4>Transaction_history</h4>
            <ul>
                {transactions.map((transObj, index) =>{
                    return (
                        <li>
                            <span>{transObj.description}</span>
                            <span>{transObj.amount}</span>
                        </li>
                    )
                })}
            </ul>
            </div>
        </React.Fragment>
    );
}