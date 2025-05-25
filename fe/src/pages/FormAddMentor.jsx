import {
  Box,
  Grid,
  GridItem,
  Image,
  Text,
  Stack,
  Flex,
  Button,
  Group,
  Span,
} from '@chakra-ui/react';
import FormInput from '../components/Elements/FormInput';
import { FormSelect } from '../components/Elements/FormInput';
import { PasswordInput } from '@/components/ui/password-input';
const FormAddMentor = () => {
  return (
    <Flex columnGap={5} mt={5}>
      <Stack rowGap={5} flex={1}>
        <FormInput
          required
          label={'Nama Lengkap'}
          placeholder={'Masukkan Nama Lengkap'}
          type="text"
          name="name"
        />
        <FormInput
          required
          label={'Tanggal Lahir'}
          placeholder={'Masukkan Tanggal Lahir'}
          type="date"
          name="date"
        />
        <FormSelect
          label={'Kebangsaan'}
          values={[{ value: 'Indonesia' }, { value: 'Singapore' }, { value: 'Malaysia' }]}
        />
      </Stack>
      <Stack rowGap={5} flex={1}>
        <FormInput
          required
          label={'Email'}
          placeholder={'me@example.com'}
          type="email"
          name="email"
        />
        <PasswordInput />
      </Stack>
    </Flex>
  );
};
export default FormAddMentor;
