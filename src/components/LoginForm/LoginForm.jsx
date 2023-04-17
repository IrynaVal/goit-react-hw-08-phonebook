import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
// import css from './LoginForm.module.css';

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
    <form onSubmit={handleFormSubmit} autoComplete="off">
      <label>
        Email
        <input type="email" name="email" />
      </label>
      <label>
        Password
        <input type="password" name="password" />
      </label>
      <button type="submit">Log In</button>
    </form>
  );
};

/* <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
  <label className={css.label}>
    Email
    <input type="email" name="email" />
  </label>
  <label className={css.label}>
    Password
    <input type="password" name="password" />
  </label>
  <button type="submit">Log In</button>
</form>; */
