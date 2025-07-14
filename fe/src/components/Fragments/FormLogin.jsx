import { Stack, Field, Button } from '@chakra-ui/react';
import FormInput from '../Elements/FormInput';
import useInput from '../../hooks/useInput';

const FormLogin = ({ onLogin }) => {
  const [email, onChangeEmail] = useInput('');
  const [password, onChangePassword] = useInput('');

  const onLoginHandler = () => {
    onLogin({ email, password });
  };
  return (
    <Stack rowGap={10} mt={8}>
      <FormInput
        type="email"
        label={'Email'}
        placeholder={'example@gmail.com'}
        value={email}
        onChange={onChangeEmail}
        required
      />
      <FormInput
        type="password"
        label={'Password'}
        placeholder={'********'}
        value={password}
        onChange={onChangePassword}
        required
      />
      <Button colorPalette={'teal'} mt={1} onClick={onLoginHandler}>
        Login
      </Button>
    </Stack>
  );
};
export default FormLogin;
