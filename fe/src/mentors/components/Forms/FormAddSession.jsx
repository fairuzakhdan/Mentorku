import { Box, Stack, Flex, Group, Button } from '@chakra-ui/react';
import FormInput from '../../../components/Elements/FormInput';
import useInput from '../../../hooks/useInput';
const FormAddSession = () => {
  const [day, onChangeDay] = useInput('');
  const [session, onChangeSession] = useInput('');

  return (
    <Stack rowGap={5} color={'textBlue'}>
      <Flex columnGap={5}>
        <FormInput
          label={'Add Day'}
          required
          value={day}
          onChange={onChangeDay}
          placeholder={'Enter day session'}
          type="text"
        />
        <FormInput
          label={'Add Session'}
          required
          value={session}
          onChange={onChangeSession}
          placeholder={'2 Sesssion/week'}
          type="number"
        />
      </Flex>
    </Stack>
  );
};
export default FormAddSession;
