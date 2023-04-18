import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { Contact } from 'components/Contact/Contact';
import { ContactList } from 'components/ContactList/ContactList';
import { fetchContacts } from 'redux/contacts/operations';
import { selectIsLoading, selectError } from 'redux/contacts/selectors';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';

const Contacts = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  //   useEffect(() => {
  //     if (contactName === '') return;
  //     async function fetchContacts() {
  //       const contact = await API.getContacts(contactName);
  //       setContacts(contactName);
  //     }

  //     fetchContacts();
  //   }, [contactName]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />

      <h2>Contacts</h2>
      <Filter />
      {isLoading && !error && <b>Request in progress...</b>}
      <ContactList />
    </div>
  );
};

export default Contacts;
