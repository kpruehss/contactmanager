import React, { Component } from 'react';
import Contact from './Contact';

class Contacts extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: 'John Doe',
        email: 'jdoe@gmail.com',
        phone: '555-555-5555'
      },
      {
        id: 2,
        name: 'Karen Smith',
        email: 'karen@gmail.com',
        phone: '666-666-6666'
      },
      {
        id: 3,
        name: 'Richard Johnson',
        email: 'dick@gmail.com',
        phone: '616-616-6969'
      }
    ]
  };
  

  render() {
    const {contacts} = this.state;
    return (
      // React.Fragment used instead of div. Won't be rendered
      <React.Fragment> 
        {contacts.map(contact => (
          <Contact
            key={contact.id}
            contact={contact}
          />
        ))}
      </React.Fragment>
    );
  }
}
export default Contacts;