import React, { useContext } from 'react';
import CentralisedData from '../CentralisedData';
import EditIcon from '@material-ui/icons/Edit';


function TransactionHistory() {
   
      let [transactionsHistory] = useContext(CentralisedData);
     console.log(transactionsHistory);
    return (
        <React.Fragment>
            <div className='transaction_history'>
                <div className='transaction_history_text'>
                    <h2>Transaction History</h2>
                </div>
                <ul>{transactionsHistory.map(function (transObj, index){
                    return (<li className='transaction_li' key={index}>
                        <span className='transaction_description'>{transObj.description}</span>
                        <span className='transaction_amount'>
                            {transObj.amount}
                            <EditIcon />
                            </span>
                    </li>);
                })}
                </ul>
            </div>
        </React.Fragment>
    );
}

export default TransactionHistory;