import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ContactList } from 'components/ContactList/ContactList';
import { fetchContacts } from 'redux/contacts/operations';
import { selectIsLoading, selectError } from 'redux/contacts/selectors';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { Typography, CircularProgress } from '@mui/material';

const Contacts = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <Typography
        variant="h4"
        textAlign={'center'}
        marginTop={'30px'}
        fontWeight={'700'}
        color={'#1976d2'}
      >
        Phonebook
      </Typography>
      <ContactForm />

      <Typography
        variant="h5"
        textAlign={'center'}
        marginTop={'30px'}
        fontWeight={'700'}
        color={'#1976d2'}
      >
        Contacts
      </Typography>
      <Filter />
      {isLoading && !error && <CircularProgress />}
      <ContactList />
    </div>
  );
};

export default Contacts;
