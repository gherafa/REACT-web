import axios from 'axios'

import './Customer.css';
import React from 'react';

const Customer = ({ customer, targetAccount, setTransactions, transactions }) => {
  const [transactionData, setTransactionData] = React.useState([]);

  const BASE_URL = 'https://java-app-transactions.onrender.com';
  const TRANSACTION_END_POINT = `/customers/transactions/${customer?.accountNo}/${targetAccount}`;
  const FETCH_TRANSACTION = `/customers/${customer?.accountNo}/transactions`;

  async function sendMoney() {
    const payload = {
      transactionType: 'transaksi',
      amount: 1000
    };
    let response;

    try {
      response = await axios.post(`${BASE_URL}${TRANSACTION_END_POINT}`, payload, {
        headers: {
          'Content-Type': 'application/json',
        }
      });

      setTransactions(response?.data);
    } catch (error) {
      console.error('Error send money:', error);
    }
  };

  async function fetchTransactions() {
      const response =  await axios.get(`${BASE_URL}${FETCH_TRANSACTION}`);

      setTransactionData(response.data);
  };

  React.useEffect(() => {   
    if (transactions.length > 0) {
      fetchTransactions();
    }
  }, [transactions]);


  return (
     <div className='customer-information'>
        { customer ?  
          <div className="customer-card">
            <a className="customer-name adjust-center">{customer.name}</a>
            <div className="customer-info">
                <span className='font-header'>Account No: {customer.accountNo}</span>
                <span className='font-header'>Balance: ${customer.balance}</span>
            </div>
            <button onClick={sendMoney}> Send Money </button>
            <button> Loan </button>
          </div> : 
          <div className="customer-card"> 
            <img 
              src="https://cdn-icons-png.flaticon.com/512/847/847969.png" 
              alt="Empty Person" 
              height={110}
              width={110}
            />
            <div className='customer-info'>Customer Not Found.</div>
          </div>
        }
        <div className="information-card">
          {transactionData.length === 0 ? (
            <div className="empty-table">
              <div className="empty-icon">📭</div>
              <a className="empty-message">No Records Found.</a>
            </div>
          ) : (
            <div>
              {[...transactionData].reverse().slice(0, 10).map((transaction, index) => (
                <div 
                  key={index} 
                  className={`transaction-item ${transaction.description === 'DEPOSIT' ? 'in' : 'out'}`}
                >
                  <span className="transaction-type">{transaction.transactionType}</span>
                  <span className={`transaction-amount ${transaction.description === 'DEPOSIT' ? 'in' : 'out'}`}>${transaction.amount}</span>
                  <span className="transaction-desc">{transaction.description}</span>
                </div>
              ))}
            </div>
          )}
        </div>
    </div>
  )
};
export default Customer;
