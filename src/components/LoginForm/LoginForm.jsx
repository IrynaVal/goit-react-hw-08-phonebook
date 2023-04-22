import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { Form, Label } from './LoginForm.styled';
import { Button } from '@mui/material';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleFormSubmit = evt => {
    evt.preventDefault();
    const form = evt.target;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Form onSubmit={handleFormSubmit} autoComplete="off">
      <Label>
        Email
        <input type="email" name="email" />
      </Label>
      <Label>
        Password
        <input type="password" name="password" />
      </Label>
      <Button variant="outlined" size="small" type="submit">
        Log In
      </Button>
    </Form>
  );
};
