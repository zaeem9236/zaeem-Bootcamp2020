import React from 'react';
import Header from './components/Header';
import Balance from './components/Balance';
import Summary from './components/Summary';
import Transaction_history from './components/Tranaction_history';
import Add_transaction from './components/Add_transaction';
import './App.css';

function App() {
  return (
    <React.Fragment>
      <div className='main_div'>
        <Header />
        <Balance />
        <Summary />
        <Transaction_history />
        <Add_transaction />
      </div>
    </React.Fragment>
  );
}

export default App;
