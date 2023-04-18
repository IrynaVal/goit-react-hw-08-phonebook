import { useEffect, lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { fetchContacts } from 'redux/contacts/operations';
// import { selectError, selectIsLoading } from 'redux/contacts/selectors';

import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from './SharedLayout/SharedLayout';
// import { Home } from 'pages/Home';
// import { Register } from 'pages/Register';
// import { Login } from 'pages/Login';
// import { Contacts } from 'pages/Contacts';
// import { NotFound } from 'pages/NotFound';
import { fetchCurrentUser } from 'redux/auth/operations';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';

// import { ContactForm } from './ContactForm/ContactForm';
// import { ContactList } from './ContactList/ContactList';
// import { Filter } from './Filter/Filter';
// import { GlobalStyle } from './GlobalStyle';

const Home = lazy(() => import('../pages/Home'));
const Register = lazy(() => import('../pages/Register'));
const Login = lazy(() => import('../pages/Login'));
const Contacts = lazy(() => import('../pages/Contacts'));
const NotFound = lazy(() => import('../pages/NotFound'));

export const App = () => {
  const dispatch = useDispatch();
  // const isLoading = useSelector(selectIsLoading);
  // const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<Register />} />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<Login />} />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<Contacts />} />
          }
        />

        {/* <PublicRoute index>
          <Home />
        </PublicRoute>

        <PublicRoute path="/register" restricted>
          <Register />
        </PublicRoute>

        <PublicRoute path="/login" restricted>
          <Login />
        </PublicRoute>

        <PrivateRoute path="/contacts">
          <Contacts />
        </PrivateRoute> */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
    // <div>
    //   <h1>Phonebook</h1>
    //   <ContactForm />

    //   <h2>Contacts</h2>
    //   <Filter />
    //   {isLoading && !error && <b>Request in progress...</b>}
    //   <ContactList />
    // </div>
  );
};
