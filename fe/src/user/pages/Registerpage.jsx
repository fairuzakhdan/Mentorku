import AuthLayouts from '../../components/Layouts/AuthLayouts';
import { Text, Box } from '@chakra-ui/react';
import FormRegister from '../../components/Fragments/FormRegister';
const Registerpage = () => {
  const onRegisterHandler = ({ fullName, email, password }) => {
    console.log({ fullName, email, password });
  };
  return (
    <AuthLayouts type={'register'}>
      <FormRegister onRegister={onRegisterHandler} />
    </AuthLayouts>
  );
};

export default Registerpage;
