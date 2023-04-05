import React from "react";
import { nanoid } from "nanoid";

export class App extends React.Component {
  state = {
  contacts: [],
  name: ''
  }

  handleNameChange = (e) => { 
    this.setState({name: e.currentTarget.value})
  }

  resetForm = () => {
    this.setState({name: ''})
  }

  addContact = (e) => { 
    const id = nanoid();
    const name = this.state.name;
    const contact = {
      id,
      name
    }

    e.preventDefault();

    this.setState((prevState) => ({ 
      contacts: [contact, ...prevState.contacts]
    })
    )

    this.resetForm();
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
      <form onSubmit={this.addContact}>
        <label>
            Name
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            value={this.state.name}
            onChange={this.handleNameChange}
            required
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
        

        <h2>Contacts</h2>  
        <span></span>
    </div>
  );
  }
  
};
