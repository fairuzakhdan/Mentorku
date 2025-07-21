import FormInput from '../../../components/Elements/FormInput';
import { Box, Flex, Stack, Group, Button } from '@chakra-ui/react';
import { useEffect } from 'react';
import useInput from '../../../hooks/useInput';
import UploadFile from '../../../components/Elements/FileUpload';
const FormUsersAdmin = ({ type = 'add', initialData = {}, onSubmit }) => {
  const [email, onChangeEmail, setEmail] = useInput('');
  const [password, onChangePassword, setPassword] = useInput('');
  const [fullName, onChangeFullName, setFullName] = useInput('');
  const [institution, onChangeInstitution, setInstitution] = useInput('');
  const [telephone, onChangeTelephone, setTelephone] = useInput('');
  // const [image, setImage] = useState([]);

  useEffect(() => {
    if (type === 'edit') {
      setEmail(initialData.email || '');
      setPassword(initialData.password || '');
      setFullName(initialData.fullName || '');
      setInstitution(initialData.institution || '');
      setTelephone(initialData.telephone || '');
      // setImage(initialData.image);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialData]);
  const onSubmitHandler = () => {
    onSubmit({
      email,
      password,
      fullName,
      institution,
      telephone,
      // image,
    });
  };
  return (
    <Stack rowGap={7}>
      <Flex columnGap={5}>
        <FormInput
          value={email}
          onChange={onChangeEmail}
          label={type === 'add' ? 'Add Email' : 'Edit Email'}
          name={'email'}
          placeholder={'example@gmail.com'}
          type={'email'}
        />
        <FormInput
          value={password}
          onChange={onChangePassword}
          label={type === 'add' ? 'Add Password' : 'Edit Password'}
          name={'password'}
          placeholder={'************'}
          type={'password'}
        />
      </Flex>
      <Flex columnGap={5}>
        <FormInput
          value={fullName}
          onChange={onChangeFullName}
          label={type === 'add' ? 'Add Fullname' : 'Edit Fullname'}
          name={'fullName'}
          placeholder={'Enter User Full Name'}
          type={'text'}
        />
        <FormInput
          value={telephone}
          onChange={onChangeTelephone}
          label={type === 'add' ? 'Add Telephone' : 'Edit Telephone'}
          name={'telephone'}
          placeholder={'Enter User Telephone'}
          type={'number'}
        />
      </Flex>

      <Flex columnGap={5} alignItems={'end'}>
        <Box flex={1}>
          <FormInput
            value={institution}
            onChange={onChangeInstitution}
            label={type === 'add' ? 'Add Institution' : 'Edit Institution'}
            name={'institution'}
            placeholder={'Enter User Institution'}
            type={'text'}
          />
        </Box>
        <Box flex={1}>
          <Button
            onClick={onSubmitHandler}
            colorPalette={'teal'}
            width={'fit-content'}
            alignSelf={'flex-end'}
          >
            {type === 'add' ? 'Add User' : 'Update User'}
          </Button>
        </Box>
      </Flex>
    </Stack>
  );
};
export default FormUsersAdmin;
