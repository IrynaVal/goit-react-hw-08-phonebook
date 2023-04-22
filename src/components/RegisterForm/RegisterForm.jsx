import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { Button } from '@mui/material';
import { Form, Label } from './RegisterForm.styled';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleFormSubmit = evt => {
    evt.preventDefault();
    const form = evt.target;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Form onSubmit={handleFormSubmit} autoComplete="off">
      <Label>
        Username
        <input type="text" name="name" />
      </Label>
      <Label>
        Email
        <input type="email" name="email" />
      </Label>
      <Label>
        Password
        <input type="password" name="password" />
      </Label>
      <Button variant="outlined" size="small" type="submit">
        Register
      </Button>
    </Form>
  );
};
