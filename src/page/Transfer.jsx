import axios from 'axios';
import React from 'react';
import CustomerForm from './CustomerForm';
import Customer from '../component/Customer';
import './CustomerForm.css';

const Transfer = ({onHover}) => {
  const [customers, setCustomers] = React.useState([]);
  const [transactions, setTransactions] = React.useState([]);

  const BASE_URL = 'https://java-app-transactions.onrender.com';
  const CUSTOMER_END_POINT = '/customers';

  async function createCustomer(customerData) {
    try {
      const response = await axios.post(`${BASE_URL}${CUSTOMER_END_POINT}`, customerData, {
        headers: {
          'Content-Type': 'application/json',
        }
      });
      setCustomers(prev => [...prev, response.data]); // Append new customer
    } catch (error) {
      console.error('Error posting data:', error);
    }
  };

  React.useEffect(() => {   
    async function fetchData() {
      try {
        const response =  await axios.get(`${BASE_URL}${CUSTOMER_END_POINT}`);

        setCustomers(response.data);
      } catch (error) {
        console.log('error', error);
      }
    };

    fetchData();
  }, [transactions]);

  return (
    <div className={`content-column ${onHover ? 'blur' : ''}`}>
      <CustomerForm onSubmitCustomer={ (customerData) => createCustomer(customerData) }/>
      <div className='customer-content'>
        <Customer customer={customers[0]} targetAccount={customers[1]?.accountNo} 
          setTransactions={setTransactions} transactions={transactions}
        />
        <Customer customer={customers[1]} targetAccount={customers[0]?.accountNo}
          setTransactions={setTransactions} transactions={transactions}
        />
      </div>
    </div>
  )
};

export default Transfer;
