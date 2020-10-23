import React from 'react';

function Summary() {
    let income = 2;
    let expense =2;
    return (
        <React.Fragment>
            <div className='summary'>
                <div className='income'>
                    <h3>Income</h3>
                    <h3>{income}</h3>
                </div>

                <div className='expense'>
                    <h3>expense</h3>
                    <h3>{expense}</h3>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Summary;