import { Component } from 'react';
import { nanoid } from 'nanoid';
import { FormStyle, LabelStyle, InputStyle, ButtonStyle } from './Form.styled';
import PropTypes from 'prop-types';

export class Form extends Component {
  state = {
    id: '',
    name: '',
    number: '',
  };

  inputChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ id: nanoid(4), [name]: value });
  };

  formSubmit = e => {
    e.preventDefault();
    this.props.formData(this.state);
    this.formReset();
  };

  formReset = () => {
    this.setState({ id: '', name: '', number: '' });
  };

  render() {
    return (
      <>
        <FormStyle onSubmit={this.formSubmit}>
          <LabelStyle>
            Name
            <InputStyle
              type="text"
              value={this.state.name}
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              onChange={this.inputChange}
              required
            />
          </LabelStyle>
          <LabelStyle>
            Number
            <InputStyle
              type="tel"
              name="number"
              value={this.state.number}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              onChange={this.inputChange}
              required
            />
          </LabelStyle>
          <ButtonStyle type="submit">Add contact</ButtonStyle>
        </FormStyle>
      </>
    );
  }
}

Form.propTypes = {
  formData: PropTypes.func.isRequired,
};
