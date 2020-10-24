import React, { useContext } from 'react';
import CentralisedData from '../CentralisedData';

function Summary() {
    let [transactionsHistory] = useContext(CentralisedData);

    function get_income() {
        let income = 0;

        for (var i = 0; i < transactionsHistory.length; i++) {
            if (transactionsHistory[i].amount > 0)
                income += transactionsHistory[i].amount;
        }
        return (income);
    }
    
    function get_expense() {
        let expense = 0;

        for (var i = 0; i < transactionsHistory.length; i++) {
            if (transactionsHistory[i].amount < 0)
                expense += transactionsHistory[i].amount;
        }
        return (expense);
    }
    
    return (
        <React.Fragment>
            <div className='summary'>
                <div className='income'>
                    <h3 className='summary_text'>INCOME</h3>
                    <h3 className='income_amount'>{get_income()}</h3>
                </div>

                <div className='expense'>
                    <h3 className='summary_text'>EXPENSE</h3>
                    <h3 className='expense_amount'>{get_expense()}</h3>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Summary;