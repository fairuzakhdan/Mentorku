import AuthLayouts from '../../components/Layouts/AuthLayouts';
import { Text, Box } from '@chakra-ui/react';
import FormRegister from '../../components/Fragments/FormRegister';
import { register } from '../../utils/auth';
import { useNavigate } from 'react-router';

const Registerpage = () => {
  const navigate = useNavigate();
  const onRegisterHandler = ({ fullName, email, password }) => {
    register({ fullName, email, password })
      .then(({ data }) => {
        const { error } = data;
        if (error) return;
        alert('Register Success');
        navigate('/login');
      })
      .catch((err) => {
        alert(err.message);
      });
  };
  return (
    <AuthLayouts type={'register'}>
      <FormRegister onRegister={onRegisterHandler} />
    </AuthLayouts>
  );
};

export default Registerpage;
