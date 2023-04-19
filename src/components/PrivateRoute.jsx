import { useSelector } from 'react-redux';
import {
  selectIsLoggedIn,
  selectIsCurrentUserFetching,
} from 'redux/auth/selectors';
import { Navigate } from 'react-router-dom';

// export const PrivateRoute = ({
// //   component: Component,
//   redirectTo = '/login',
//     children,
//     ...routeProps
// }) => {
//   const isLoggedIn = useSelector(authSelectors.selectIsLoggedIn);
//   return (
//     <Route {...routeProps}>
//       {isLoggedIn ? children : <Navigate to={redirectTo} />}
//     </Route>
//   );
// };

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isCurrentUserFetching = useSelector(selectIsCurrentUserFetching);
  const shouldRedirect = !isLoggedIn && !isCurrentUserFetching;

  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};
