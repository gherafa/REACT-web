import { useState } from 'react';
import './CustomerForm.css'; // Import the style file

const CustomerForm = (props) => {
    const [ name, setName ] =  useState('');
    const [ accountNo, setAccountNo ] =  useState('');

    const handleNameInputChange = (event) => setName(event.target.value);
    const handleAccountNoInputChange = (event) => setAccountNo(event.target.value);

    const submitCustomer = () => {
        const customer = { name, accountNo, balance: 10000 };
        props.onSubmitCustomer(customer);
        setName('');
        setAccountNo('');
    };

    return (
        <div class="form-container">
            <div class="customer-form">
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={handleNameInputChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="number">Account Number:</label>
                    <input
                        type="text"
                        id="number"
                        value={accountNo}
                        onChange={handleAccountNoInputChange}
                        required
                    />
                </div>
                <button type="submit" onClick={submitCustomer} className="submit-btn">
                    Add Customer
                </button>
            </div>
        </div>
        // <div className="customer-form">
        //     <div className="form-group">
        //         <label htmlFor="name">Name:</label>
        //         <input
        //             type="text"
        //             id="name"
        //             value={name}
        //             onChange={handleNameInputChange}
        //             required
        //         />
        //     </div>

        //     <div className="form-group">
        //         <label htmlFor="number">Account Number:</label>
        //         <input
        //             type="text"
        //             id="number"
        //             value={accountNo}
        //             onChange={handleAccountNoInputChange}
        //             required
        //         />
        //     </div>

        //     <button type="submit" onClick={submitCustomer} className="submit-btn">
        //         Add Customer
        //     </button>
        // </div>
    );
};

export default CustomerForm;
