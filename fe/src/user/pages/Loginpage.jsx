import AuthLayouts from '../../components/Layouts/AuthLayouts';
import { Text, Box } from '@chakra-ui/react';
import FormLogin from '../../components/Fragments/FormLogin';
const Loginpage = () => {
  return (
    <AuthLayouts type={'login'}>
      <FormLogin />
    </AuthLayouts>
  );
};
export default Loginpage;
