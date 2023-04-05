import React from "react";
import { nanoid } from "nanoid";

import { Form } from "./Form/Form";
import { Contacts } from "./Contacts/Contacts";

export class App extends React.Component {
  state = {
    contacts: [],
  }

  addContact = (name, number) => { 
    const contact = {
      id: nanoid(),
      name: name,
      number: number,
    }

    this.setState((prevState) => ({contacts: [contact, ...prevState.contacts]}))
  }

  render() { 
    return(
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <h2>Phonebook</h2>  
      <Form add={this.addContact}/>
      <Contacts contacts={ this.state.contacts} />
    </div>
  );
  }
};
