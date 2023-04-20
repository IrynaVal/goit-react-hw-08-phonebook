import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';

export const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  const onDelete = () => dispatch(deleteContact(contact.id));

  return (
    <>
      <p>{contact.name}:</p>
      <p>{contact.number}</p>
      <Button variant="contained" type="button" onClick={onDelete}>
        Delete
      </Button>
    </>
  );
};

Contact.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};
