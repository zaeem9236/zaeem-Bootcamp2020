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
    
    // console.log('income = ' + income);
    let expense = 2;
    return (
        <React.Fragment>
            <div className='summary'>
                <div className='income'>
                    <h3>Income</h3>
                    <h3>{get_income()}</h3>
                </div>

                <div className='expense'>
                    <h3>expense</h3>
                    <h3>{get_expense()}</h3>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Summary;