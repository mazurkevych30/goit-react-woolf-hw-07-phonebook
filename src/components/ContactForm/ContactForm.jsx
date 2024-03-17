import { useState } from 'react';
import css from './ContactForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'store/selectors';
import { addContact } from 'store/contactSlice/thunks';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleSubmit = e => {
    e.preventDefault();
    if (
      contacts.find(
        contact => contact.name.toLocaleLowerCase() === name.toLocaleLowerCase()
      )
    ) {
      alert(`${name} is already in contacts.`);
      return;
    }
    dispatch(addContact({ name, phone }));
    setName('');
    setPhone('');
    e.target.reset();
  };

  const handleChange = ({ target }) => {
    switch (target.name) {
      case 'name':
        setName(target.value);
        break;
      case 'number':
        setPhone(target.value);
        break;
      default:
    }
  };

  return (
    <form onSubmit={handleSubmit} className={css.form_style}>
      <div className={css.input_container}>
        <label htmlFor="inputName">Name</label>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          onChange={handleChange}
          required
        />
      </div>
      <div className={css.input_container}>
        <label htmlFor="inputPhoneNumber">Number</label>
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Add contact</button>
    </form>
  );
};

export default ContactForm;
