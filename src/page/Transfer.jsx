import axios from 'axios';
import React from 'react';
import CustomerForm from './CustomerForm';
import Customer from '../component/Customer';
import './CustomerForm.css';

const Transfer = () => {
  const [customers, setCustomers] = React.useState([]);
  const [transactions, setTransactions] = React.useState([]);
  const BASE_URL = 'http://localhost:8080';
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
      const response =  await axios.get(`${BASE_URL}${CUSTOMER_END_POINT}`);

      setCustomers(response.data);
    }

    fetchData();
  }, [transactions]);

  return (
    <div className='content-column'>
      <CustomerForm onSubmitCustomer={ (customerData) => createCustomer(customerData) }/>
      <div className='customer-content'>
        <Customer customer={customers[0]} targetAccount={customers[1]?.accountNo} setTransactions={setTransactions} transactions={transactions}/>
        <Customer customer={customers[1]} targetAccount={customers[0]?.accountNo} setTransactions={setTransactions} transactions={transactions}/>
      </div>
    </div>
  )
};

export default Transfer;
