import { LoginForm } from 'components/LoginForm/LoginForm';

const Login = () => {
  return <LoginForm />;
};

export default Login;

// import { useNavigate } from 'react-router-dom';
// import { LoginForm } from 'components/LoginForm/LoginForm';
// import axios from 'axios';

// const Login = () => {
//   const navigate = useNavigate();
//   const handleSubmit = async values => {
//     const response = await axios.login(values);
//     if (response.success) {
//       navigate('/contacts', { replace: true });
//     }
//   };
//   return <LoginForm onSubmit={handleSubmit} />;
// };
