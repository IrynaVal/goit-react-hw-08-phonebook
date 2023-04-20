import { useSelector } from 'react-redux';
import { selectFilteredContacts } from 'redux/contacts/selectors';
import { Contact } from 'components/Contact/Contact';
import css from './ContactList.module.css';

export const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);

  return (
    contacts.length !== 0 && (
      <ul>
        {contacts.map(contact => (
          <li key={contact.id} className={css.listItem}>
            <Contact contact={contact} />
          </li>
        ))}
      </ul>
    )
  );
};
