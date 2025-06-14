import { Stack, Field, Button } from '@chakra-ui/react';
import FormInput from '../Elements/FormInput';
import useInput from '../../hooks/useInput';
import { PasswordInput } from '@/components/ui/password-input';
import { Check } from '../Elements/FormInput';
const FormLogin = () => {
  const [email, onChangeEmail] = useInput('');
  const [password, onChangePassword] = useInput('');
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
      <Button colorPalette={'teal'} mt={1}>
        Login
      </Button>
    </Stack>
  );
};
export default FormLogin;
