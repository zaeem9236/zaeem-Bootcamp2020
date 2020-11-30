import React, { useContext, useReducer, useEffect } from 'react';
import Header from './components/Header.js';
import BalanceView from './components/BalanceView.js';
import Summary from './components/Summary.js';
import TransactionHistory from './components/TransactionHistory.js';
import AddTransaction from './components/AddTransaction.js';
import CentralisedData from './CentralisedData';
import AppReducer from './AppReducer';
import './App.css';
import { initNotification } from './Services/firebaseService';

function App() {
  let [state, dispatch] = useReducer(AppReducer,useContext(CentralisedData));

  useEffect(() => {
    
    initNotification();
  });
  return (
    <React.Fragment>
      <CentralisedData.Provider value={[state, dispatch]}>
        <div className='main_div'>
          <Header />
          <BalanceView />
          <Summary />
          <TransactionHistory />
          <AddTransaction />
          {/* <button onClick={initNotification}>initNotification</button> */}
        </div>
      </CentralisedData.Provider>
    </React.Fragment>
  );
}

export default App;
