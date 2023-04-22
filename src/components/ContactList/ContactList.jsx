import { useSelector } from 'react-redux';
import { selectFilteredContacts } from 'redux/contacts/selectors';
import { Contact } from 'components/Contact/Contact';
import { ListItem, Container } from './ContactList.styled';

export const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);

  return (
    contacts.length !== 0 && (
      <Container>
        {contacts.map(contact => (
          <ListItem key={contact.id}>
            <Contact contact={contact} />
          </ListItem>
        ))}
      </Container>
    )
  );
};
