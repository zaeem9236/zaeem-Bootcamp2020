import React from 'react';
import Header from './components/Header';
import Balance from './components/Balance';
import Summary from './components/Summary';
import TransactionHistory from './components/TranactionHistory';
import AddTtransaction from './components/AddTransaction';
import './App.css';

function App() {
  return (
    <React.Fragment>
      <div className='main_div'>
        <Header />
        <Balance />
        <Summary />
        <TransactionHistory />
        <AddTransaction />
      </div>
    </React.Fragment>
  );
}

export default App;
