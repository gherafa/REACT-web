import React from 'react';
import Contact from '../component/Contact';
import ContactForm from './ContactForm';
import mockContactData from './MockContactData';

class HomePage extends React.PureComponent {
  constructor() {
    super();
    this.state = { contacts: mockContactData }
  }

  addContact(contact) {
    const { contacts } = this.state;
    const list = [...contacts];
    list.push(contact);
    this.setState({ contacts: [...list]});
  };

  render() {
    const { contacts } = this.state;
    return (
      <div>
        <ContactForm onSubmitContact={ (contact) => this.addContact(contact) }/>
      <ul>
        {
          contacts.map((contact) => (
            <li key={contact.phoneNumber}>
              <Contact contact={contact} />
            </li>
          ))
        }
      </ul>
    </div>
    )
  };
};

export default HomePage;