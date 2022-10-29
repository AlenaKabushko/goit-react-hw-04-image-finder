import { Component } from 'react';
import ContactList from './Contacts/Contacts';
import { Form } from './Form/Form';
import Filter from './Filter/Filter';
import { Notify } from 'notiflix';

export class App extends Component {
  state = {
    contacts: [
      // { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      // { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      // { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      // { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidMount() {
    const contactsFromLocal = localStorage.getItem('contacts');
    const parseContactsFromLocal = JSON.parse(contactsFromLocal);
    if (parseContactsFromLocal) {
      this.setState({ contacts: parseContactsFromLocal });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  formData = data => {
    if (this.state.contacts.find(contact => contact.name === data.name)) {
      Notify.warning(`${data.name} is already in contacts`);
      return false;
    }
    this.setState(prevState => ({
      contacts: [data, ...prevState.contacts],
    }));
    return true;
  };

  deleteContacts = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  onFilterChange = value => {
    this.setState({ filter: value });
  };

  render() {
    let fromFilter = this.state.contacts;
    if (this.state.filter) {
      fromFilter = this.state.contacts.filter(({ name }) => {
        return name.toLowerCase().includes(this.state.filter.toLowerCase());
      });
    }
    return (
      <section style={{ marginLeft: '40px' }}>
        <h1>Phonebook</h1>
        <Form formData={this.formData} />
        <h2>Contacts</h2>
        <Filter onChange={this.onFilterChange} />
        <ContactList allContacts={fromFilter} onDelete={this.deleteContacts} />
      </section>
    );
  }
}
