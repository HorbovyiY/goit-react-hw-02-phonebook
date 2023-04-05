import React from "react";
import { nanoid } from "nanoid";

import { Form } from "./Form/Form";
import { Contacts } from "./Contacts/Contacts";
import { Filter } from "./Filter/Filter";

export class App extends React.Component {
  state = {
    contacts: [],
    filter: '',
  }

  addContact = (name, number) => { 
    const contact = {
      id: nanoid(),
      name: name,
      number: number,
    }
    const isNameInContacts = this.state.contacts.filter(item => item.name === name).length;

      (isNameInContacts) ?
      alert("This name is already in contacts"):
      this.setState((prevState) => ({ contacts: [contact, ...prevState.contacts] }))
  }

  deleteContact = (id) => { 
    this.setState((prevState) => ({ contacts: prevState.contacts.filter(item => item.id !== id) }))
  }

  toFilter = (text) => { 
    this.setState({filter: text})
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
        <Form add={this.addContact} />

      <h2>Contacts</h2>
        <Filter text={this.state.filter} toFilter={this.toFilter} />
        <Contacts contacts={this.state.contacts} filter={this.state.filter} del={ this.deleteContact} />
    </div>
  );
  }
};
