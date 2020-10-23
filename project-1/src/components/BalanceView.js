import React from 'react';

function BalanceView() {
    let balance = 1.23;
    return (
        <React.Fragment>
            <div className='balance_view'>
                <h2>Current Balance</h2>
                <h1>${balance}</h1>
            </div>
        </React.Fragment>
    );
}

export default BalanceView;