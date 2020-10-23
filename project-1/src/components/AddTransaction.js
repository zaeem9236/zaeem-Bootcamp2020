import React, { useContext, useState } from 'react';
import CentralisedData from '../CentralisedData';

function AddTransaction() {

    let dispatch = useContext(CentralisedData);
    let [add_desc, set_desc] = useState('');
    let [add_amount, set_amount] = useState('');

    function submitNewData(event) {
        event.preventDefault();
        dispatch[1]({
            type: 'Add_Transaction',
            payload: { description: add_desc, amount: add_amount }
        })

        set_desc('');
        set_amount('');
    }
    return (
        <React.Fragment>
            <div className='add_transaction'>
                <form onSubmit={submitNewData}>
                    <br />
                    <label>
                        Description<br />
                        <input type='text'
                        required
                        onChange={(ev) => { set_desc(ev.target.value) }}
                        placeholder='Detail of Tranaction' 
                        value={add_desc}
                        />
                    </label>

                    <br />
                    <label>
                        Amount<br />
                        <input type='number'
                        required 
                        onChange={(ev) => { set_amount(Number(ev.target.value)) }}
                        placeholder='Amount in Dollar'
                        value={add_amount} 
                        />
                    </label>

                    <br />
                    <input type="submit" value='Add Transaction' />

                </form>
            </div>
        </React.Fragment>
    );
}

export default AddTransaction;