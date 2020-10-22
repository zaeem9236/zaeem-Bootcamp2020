import React from 'react';

export default function Summary() {
    return(
        <React.Fragment>
            <div className='summary'>
                <div>
                    <h4>Income</h4>
                    <h4>$ 0.00</h4>
                </div>
                <div>
                    <h4>Expense</h4>
                    <h4>$ 0.00</h4>
                </div>
            </div>
        </React.Fragment>
    );
}