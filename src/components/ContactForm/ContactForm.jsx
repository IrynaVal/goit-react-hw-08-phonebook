import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/contacts/operations';
import { selectContacts } from 'redux/contacts/selectors';
import { Form, Label } from './ContactForm.styled';
import { Button } from '@mui/material';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleFormSubmit = evt => {
    evt.preventDefault();
    const form = evt.target;

    const repeatName = contacts.find(
      contact => contact.name === form.elements.name.value
    );

    if (repeatName) {
      return alert(`${form.elements.name.value} is already in contacts`);
    } else {
      dispatch(
        addContact({
          name: form.elements.name.value,
          number: form.elements.number.value,
        })
      );
      form.reset();
    }
  };

  return (
    <Form onSubmit={handleFormSubmit}>
      <Label>
        Name
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </Label>
      <Label>
        Number
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </Label>
      <Button variant="outlined" size="small" type="submit">
        Add contact
      </Button>
    </Form>
  );
};
