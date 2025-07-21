import { useState } from 'react';

const ContactForm = (props) => {
    const [ name, setName ] =  useState('');
    const [ number, setNumber ] =  useState('');

    const handleNameInputChange = (event) => {
        const { value } = event.target;
        setName(value);
    };

    const handleNumberInputChange = (event) => {
        const { value } = event.target;
        setNumber(value);
    };

    const submitContact = () => {
        const contact = { name, phoneNumber: number };
        const { onSubmitContact } = props;
        onSubmitContact(contact);
        setName('');
        setNumber('');
    };

    return (
        <div>
            <div className="add-contact">
                <div>
                    <label htmlFor="name" className="form-attribute">
                        Name:
                    </label>
                    <br />
                    <input
                        type="text"
                        id="name"
                        name="name"
                        onChange={handleNameInputChange} 
                        value={name}
                        required
                    />
                </div>
                <div>
                <label htmlFor="number" className="form-attribute">
                        Number:
                    </label>
                    <br />
                    <input
                        type="text"
                        id="number"
                        name="number"
                        onChange={handleNumberInputChange} 
                        value={number}
                        required
                    />
                </div>
                <input type="submit" onClick={submitContact} className="form-attribute button custom-btn btn-dark"/>
            </div>
        </div>
    );
};

export default ContactForm;