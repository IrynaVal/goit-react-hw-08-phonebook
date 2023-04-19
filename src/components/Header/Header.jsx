import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import { useSelector } from 'react-redux';
// import css from './AppBar.module.css';

export const Header = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  // console.log(isLoggedIn);

  return (
    <header>
      <Navigation />
      {/* <AuthNav />
      <UserMenu /> */}
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};
