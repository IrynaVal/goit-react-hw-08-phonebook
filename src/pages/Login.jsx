import { useNavigate } from 'react-router-dom';
import { LoginForm } from 'components/LoginForm/LoginForm';
import axios from 'axios';

export const Login = () => {
  const navigate = useNavigate();
  const handleSubmit = async values => {
    const response = await axios.login(values);
    if (response.success) {
      navigate('/contacts', { replace: true });
    }
  };
  return <LoginForm onSubmit={handleSubmit} />;
};
