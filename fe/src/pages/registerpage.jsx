import AuthLayouts from '../components/Layouts/AuthLayouts';
import { Text } from '@chakra-ui/react';
const Registerpage = () => {
  return (
    <AuthLayouts type={'register'}>
      <Text color={'black'}>Register</Text>
    </AuthLayouts>
  );
};

export default Registerpage;
