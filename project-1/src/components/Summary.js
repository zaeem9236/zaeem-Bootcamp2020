import React from 'react';

export default function Summary() {
    return(
        <React.Fragment>
            <div className='summary'>
                <div className='summary_income'>
                    <h4>Income</h4>
                    <h4 className='income_amount'>$ 0.00</h4>
                </div>
                <div className='summary_expense'>
                    <h4>Expense</h4>
                    <h4 className='expense_amount'>$ 0.00</h4>
                </div>
            </div>
        </React.Fragment>
    );
}