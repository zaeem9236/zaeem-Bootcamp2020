import React, { useContext } from 'react';
import CentralisedData from '../CentralisedData';


function TransactionHistory() {
   
      let [transactionsHistory] = useContext(CentralisedData);
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