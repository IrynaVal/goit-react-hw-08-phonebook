import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth/selectors';
import { Route, Navigate } from 'react-router-dom';

export const PublicRoute = ({
  //   component: Component,
  redirectTo = '/',
  children,
  restricted = false,
  ...routeProps
}) => {
  const isLoggedIn = useSelector(authSelectors.selectIsLoggedIn);
  const shouldRedirect = isLoggedIn && restricted;
  return (
    <Route {...routeProps}>
      {shouldRedirect ? <Navigate to={redirectTo} /> : children}
    </Route>
  );
};
