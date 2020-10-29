import React, { useContext, useState } from 'react';
import CentralisedData from '../CentralisedData';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, InputGroup, FormControl } from 'react-bootstrap';
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
                        <InputGroup size="lg" >
                            <InputGroup.Prepend >
                            </InputGroup.Prepend>
                            <FormControl
                                type='text'
                                className='input_description'
                                required
                                onChange={(ev) => { set_desc(ev.target.value) }}
                                placeholder='Detail of Transaction'
                                value={add_desc}
                                aria-label="Large"
                                aria-describedby="inputGroup-sizing-sm"
                            />
                        </InputGroup>
                    </label>

                    <br />
                    <label>
                        Amount <span>Enter negative sign before amount for Expense</span><br />

                        <InputGroup size="lg" >
                            <InputGroup.Prepend >
                            </InputGroup.Prepend>
                            <FormControl
                                type='number'
                                className='input_amount'
                                required
                                onChange={(ev) => { set_amount(Number(ev.target.value)) }}
                                placeholder='Amount in Dollar'
                                value={add_amount}
                                aria-label="Large"
                                aria-describedby="inputGroup-sizing-sm"
                            />
                        </InputGroup>
                    </label>

                    <br />

                    <div className='button_section'>
                        <Button className='submit_button' variant="success" type='submit' value='Add Transaction'>Add Transaction</Button>
                    </div>
                </form>
            </div>
        </React.Fragment>
    );
}

export default AddTransaction;