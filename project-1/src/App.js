import React from 'react';
import Header from './components/Header.js';
import BalanceView from './components/BalanceView.js';
import Summary from './components/Summary.js';
import TransactionHistory from './components/TransactionHistory.js';
import AddTransaction from './components/AddTransaction.js';
import './App.css';

function App() {
  return (
    <React.Fragment>
      <div className='main_div'>
        <Header />
        <BalanceView />
        <Summary />
        <TransactionHistory />
        <AddTransaction />
      </div>
    </React.Fragment>
  );
}

export default App;
