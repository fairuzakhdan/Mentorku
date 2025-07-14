import { Stack, Field, Button } from '@chakra-ui/react';
import FormInput from '../Elements/FormInput';
import useInput from '../../hooks/useInput';
import { PasswordInput } from '@/components/ui/password-input';
import { Check } from '../Elements/FormInput';

const FormRegister = ({ onRegister }) => {
  const [fullName, onChangeFullName] = useInput('');
  const [email, onChangeEmail] = useInput('');
  const [password, onChangePassword] = useInput('');
  const registerHandler = () => {
    onRegister({ fullName, email, password });
  };
  return (
    <Stack rowGap={4}>
      <FormInput
        type="text"
        label={'Full Name'}
        placeholder={'Enter your full name'}
        value={fullName}
        onChange={onChangeFullName}
        required
      />
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
      <Check label={'Accept terms and conditions'} />
      <Button colorPalette={'teal'} onClick={registerHandler}>
        SignUp
      </Button>
    </Stack>
  );
};

export default FormRegister;
