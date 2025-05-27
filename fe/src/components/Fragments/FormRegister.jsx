import { Stack } from '@chakra-ui/react';
import FormInput from '../Elements/FormInput';
import useInput from '../../hooks/useInput';
const FormRegister = () => {
  const [email, onChangeEmail] = useInput('');
  return (
    <Stack>
      <FormInput
        type="email"
        label={'Email'}
        placeholder={'Masukkan Email'}
        value={email}
        onChange={onChangeEmail}
        required
      />
    </Stack>
  );
};

export default FormRegister;
