import { useDispatch } from 'react-redux';
import { changeFilter } from 'redux/contacts/filterSlice';
import { StyledInput } from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();

  const handleFilterChange = evt => {
    dispatch(changeFilter(evt.currentTarget.value));
  };

  return (
    <StyledInput>
      Find contacts by name
      <input type="text" onChange={handleFilterChange}></input>
    </StyledInput>
  );
};
