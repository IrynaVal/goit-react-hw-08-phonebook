import { NavLink } from 'react-router-dom';
import { authSelectors } from 'redux/auth/selectors';
import { useSelector } from 'react-redux';

export const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.selectIsLoggedIn);

  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      {/* <NavLink to="/contacts">Contacts</NavLink> */}
      {isLoggedIn && <NavLink to="/contacts">Contacts</NavLink>}
    </nav>
  );
};
