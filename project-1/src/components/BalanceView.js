import React,{useContext} from 'react';
import CentralisedData from '../CentralisedData';

function BalanceView() {
    let [transactionsHistory] = useContext(CentralisedData);

    function get_balance(){
        let income = 0;
        let expense = 0;

        for(var i=0; i< transactionsHistory.length; i++){
            if(transactionsHistory[i].amount > 0){
                income += transactionsHistory[i].amount
            }
        }
        
        for(var i=0; i< transactionsHistory.length; i++){
            if(transactionsHistory[i].amount < 0){
                expense += transactionsHistory[i].amount
            }
        }

        return(income + expense);
    }

    return (
        <React.Fragment>
            <div className='balance_view'>
                <h2>Current Balance</h2>
                <h1>${get_balance()}</h1>
            </div>
        </React.Fragment>
    );
}

export default BalanceView;