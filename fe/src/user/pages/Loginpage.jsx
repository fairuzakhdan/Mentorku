import AuthLayouts from '../../components/Layouts/AuthLayouts';
import { Text, Box } from '@chakra-ui/react';
import FormLogin from '../../components/Fragments/FormLogin';
import { login } from '../../utils/auth';
const Loginpage = ({ onLoginSuccess }) => {
  const loginHandler = ({ email, password }) => {
    login({ email, password })
      .then(({ data }) => {
        onLoginSuccess(data);
      })
      .catch((err) => {
        alert(err.message);
      });
  };
  return (
    <AuthLayouts type={'login'}>
      <FormLogin onLogin={loginHandler} />
    </AuthLayouts>
  );
};
export default Loginpage;
