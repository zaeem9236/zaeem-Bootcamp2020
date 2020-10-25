import React, { useContext } from 'react';
import CentralisedData from '../CentralisedData';


function TransactionHistory() {

    let [transactionsHistory, dispatch] = useContext(CentralisedData);
    return (
        <React.Fragment>
            <div className='transaction_history'>
                <div className='transaction_history_text'>
                    <h2>Transaction History</h2>
                </div>
                <ul>{transactionsHistory.map(function (transObj, index) {
                    return (<li className={`transaction_li ${transObj.amount > 0 ? 'transaction_amount_positive' : 'transaction_amount_negative'}`} key={index}>
                        <span className='transaction_description'>{transObj.description}</span>
                        <span className='transaction_amount'>
                            $ {transObj.amount}

                            {/* delete Icon */}
                            <svg onClick={(e) => {
                                dispatch({
                                    type: 'Delete_Transaction',
                                    transactionsHistory: transactionsHistory,
                                    target: e,
                                    index
                                })
                            }}
                                width="1em" height="1em" viewBox="0 0 16 16" className="delete_icon" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                                <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                            </svg>
                        </span>
                    </li>);
                })}
                </ul>
            </div>
        </React.Fragment>
    );
}


export default TransactionHistory;