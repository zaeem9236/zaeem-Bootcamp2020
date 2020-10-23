import React, { useContext, useState } from 'react';
import CentralisedData from '../CentralisedData';

function AddTransaction() {

    let [state, dispatch] = useContext(CentralisedData);
    let [add_desc, set_desc] = useState('');
    let [add_amount, set_amount] = useState(0);

    function submitNewData(event) {
        event.preventDefault();
        dispatch({
            type: 'Add_Transaction',
            payload: { description: add_desc, amount: add_amount }
        })
    }
    return (
        <React.Fragment>
            <div className='add_transaction'>
                <form onSubmit={submitNewData}>
                    <br />
                    <label>
                        Description<br />
                        <input type='text' onChange={(ev) => { set_desc(ev.target.value) }} />
                    </label>

                    <br />
                    <label>
                        Amount<br />
                        <input type='number' onChange={(ev) => { set_amount(ev.target.value) }} />
                    </label>

                    <br />
                    <input type="submit" value='Add Transaction' />

                </form>
            </div>
        </React.Fragment>
    );
}

export default AddTransaction;