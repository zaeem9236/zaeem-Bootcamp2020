import React,{useContext} from 'react';
import transContext from './transContext';

function Child() {

    let transactions = useContext(transContext);

    return (
        <React.Fragment>
            <h1>I am child component</h1>
            <ul>
                {transactions.map((item, index) => {
                    return (
                        <li>
                            <span>{item.desc}</span>
                            <span>{item.amount}</span>
                        </li>
                    )
                })};
            </ul>
        </React.Fragment>
    );
}

export default Child;