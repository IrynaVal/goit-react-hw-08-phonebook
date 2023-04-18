import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth/selectors';
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
  //   const { isLoggedIn, isRefreshing } = useAuth();
  const isLoggedIn = useSelector(authSelectors.selectIsLoggedIn);
  //   const shouldRedirect = !isLoggedIn && !isRefreshing;
  const shouldRedirect = !isLoggedIn;

  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};
