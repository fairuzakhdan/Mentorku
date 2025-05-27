import AuthLayouts from '../components/Layouts/AuthLayouts';
import { Text, Box } from '@chakra-ui/react';
import FormRegister from '../components/Fragments/FormRegister';
const Registerpage = () => {
  return (
    <AuthLayouts type={'register'}>
      <FormRegister />
    </AuthLayouts>
  );
};

export default Registerpage;
