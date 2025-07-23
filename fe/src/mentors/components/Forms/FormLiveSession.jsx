import FormInput from '../../../components/Elements/FormInput';
import { Flex, Box, Stack, Button } from '@chakra-ui/react';
import useInput from '../../../hooks/useInput';
const FormLiveSession = ({ type = 'add' }) => {
  const [schedule, onChangeScheduleType, setScheduleType] = useInput('');
  const [meetingWeek, onChangeMeetingWeek, SetMeetingWeek] = useInput('');
  return (
    <Stack rowGap={5} bgColor={'white'} p={5} mt={5} rounded={'xl'}>
      <FormInput
        label={type === 'add' ? 'Add ScheduleType' : 'Edit ScheduleType'}
        required
        value={schedule}
        onChange={onChangeScheduleType}
        placeholder={'month/week'}
        type="text"
      />
      <FormInput
        label={type === 'add' ? 'Add Meeting/Week' : 'Edit Meeting/Week'}
        required
        value={meetingWeek}
        onChange={onChangeMeetingWeek}
        placeholder={'2'}
        type="number"
      />
      <Button>Add Schedule</Button>
    </Stack>
  );
};
export default FormLiveSession;
