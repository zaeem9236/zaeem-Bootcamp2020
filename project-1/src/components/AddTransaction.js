import React, { useContext, useState } from 'react';
import CentralisedData from '../CentralisedData';
import 'bootstrap/dist/css/bootstrap.min.css';
import { InputGroup, FormControl } from 'react-bootstrap';
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
                        {/* <input type='text' className='input_description'
                            required
                            onChange={(ev) => { set_desc(ev.target.value) }}
                            placeholder='Detail of Tranaction'
                            value={add_desc}
                        /> */}
                        <InputGroup size="lg" >
                            <InputGroup.Prepend >
                                {/* <InputGroup.Text id="inputGroup-sizing-lg">Large</InputGroup.Text> */}
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
                        Amount<br />
                        {/* <input type='number' className='input_amount'
                        required 
                        onChange={(ev) => { set_amount(Number(ev.target.value)) }}
                        placeholder='Amount in Dollar'
                        value={add_amount} 
                        /> */}
                        <InputGroup size="lg" >
                            <InputGroup.Prepend >
                                {/* <InputGroup.Text id="inputGroup-sizing-lg">Large</InputGroup.Text> */}
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
                    <input type="submit" value='Add Transaction' />

                </form>
            </div>
        </React.Fragment>
    );
}

export default AddTransaction;