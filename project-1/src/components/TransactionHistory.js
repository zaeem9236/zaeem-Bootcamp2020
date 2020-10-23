import React, { useContext } from 'react';
import CentralisedData from '../CentralisedData';


function TransactionHistory() {
    //  let transactionsHistory = [
    //      {description: 'aloo', amount: 122},
    //      {description: 'chana', amount: 333},
    //      {description: 'caat', amount: 444}
    //  ];
    //  console.log(transactionsHistory);

      let [transactionsHistory,dispatch] = useContext(CentralisedData);
     console.log(transactionsHistory);
    return (
        <React.Fragment>
            <div className='transaction_history'>
                <ul>{transactionsHistory.map(function (transObj, index){
                    return (<li key={index}>
                        <span>{transObj.description}</span>
                        <span>{transObj.amount}</span>
                    </li>);
                })}
                </ul>
            </div>
        </React.Fragment>
    );
}

export default TransactionHistory;