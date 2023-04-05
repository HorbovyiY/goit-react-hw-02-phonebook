import React from "react";


export class Form extends React.Component { 
    state={ 
        name: '',
        number: ''
    }

    handleInputChange = (e) => { 
        this.setState({[e.currentTarget.name]: e.currentTarget.value})
    }

    onSubmit = (e) => {
        e.preventDefault();

        this.props.add(this.state.name, this.state.number);
        this.resetForm();
    }

    resetForm = () => {
        this.setState({ 
        name: '',
        number: ''
    })
    }

    render() {
        return (<form onSubmit={this.onSubmit}>
            <label>
                Name
                <input
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    value={this.state.name}
                    onChange={this.handleInputChange}
                    required
                />
            </label>
            <label>
                Number
                <input
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    value={this.state.number}
                    onChange={this.handleInputChange}
                    required
                />
            </label>
            <button type="submit">Add contact</button>
        </form>)
        
    }
}