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

    this.setState((prevState) => ({contacts: [contact, ...prevState.contacts]}))
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
      <Form add={this.addContact}/>
      <Filter text={this.state.filter} toFilter={this.toFilter} />
        <Contacts contacts={this.state.contacts} filter={ this.state.filter} />
    </div>
  );
  }
};
