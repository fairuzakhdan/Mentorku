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
import FormInput from '../Elements/FormInput';
import { FormSelect } from '../Elements/FormInput';
import { PasswordInput } from '@/components/ui/password-input';
const FormAddProfileMentor = ({
  name,
  onChangeName,
  email,
  onChangeEmail,
  password,
  onChangePassword,
  date,
  onChangeDate,
  location,
  onChangeLocation,
}) => {
  return (
    <Flex columnGap={5} mt={5}>
      <Stack rowGap={5} flex={1}>
        <FormInput
          required
          label={'Nama Lengkap'}
          placeholder={'Masukkan Nama Lengkap'}
          type="text"
          name="name"
          value={name}
          onChange={onChangeName}
        />
        <FormInput
          required
          label={'Tanggal Lahir'}
          placeholder={'Masukkan Tanggal Lahir'}
          type="date"
          name="date"
          value={date}
          onChange={onChangeDate}
        />
        <FormInput label={'Location'} onChange={onChangeLocation} value={location} required />
      </Stack>
      <Stack rowGap={5} flex={1}>
        <FormInput
          required
          label={'Email'}
          placeholder={'me@example.com'}
          type="email"
          name="email"
          value={email}
          onChange={onChangeEmail}
        />
        <FormInput
          required
          label={'Password'}
          placeholder={'*********'}
          type="password"
          name="password"
          value={password}
          onChange={onChangePassword}
        />
      </Stack>
    </Flex>
  );
};
export default FormAddProfileMentor;
