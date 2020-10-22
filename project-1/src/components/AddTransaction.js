import React from 'react';

export default function AddTransaction() {
    return (
        <React.Fragment>
            <div className='add_transaction'>
                <h4>Add New Transaction</h4>

                <form>
                    <label>
                        Enter Description <br />
                        <input type='text' />
                    </label>
                    <br />
                    <label>
                        Enter Amount <br />
                        <input type='number' />
                    </label>
                    <br />
                    <input type='submit' value='Add_Transaction' />
                </form>
            </div>
        </React.Fragment>
    );
}