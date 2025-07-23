import FormInput from '../../../components/Elements/FormInput';
import { Flex, Box, Stack } from '@chakra-ui/react';
import useInput from '../../../hooks/useInput';
const FormLiveSession = ({ scheduleType, meetingPerWeek }) => {
  const [schedule, onChangeScheduleType, setScheduleType] = useInput('');
  const [meetingWeek, onChangeMeetingWeek, SetMeetingWeek] = useInput('');
  return (
    <Stack rowGap={5}>
      <FormInput
        label={type === 'add' ? 'Add ScheduleType' : 'Edit ScheduleType'}
        required
        value={schedule}
        onChange={onChangeScheduleType}
        placeholder={'[month/week]'}
        type="text"
      />
      <FormInput
        label={type === 'add' ? 'Add Meeting/Week' : 'Edit Meeting/Week'}
        required
        value={meetingPerWeek}
        onChange={onChangeMeetingWeek}
        placeholder={'2'}
        type="number"
      />
    </Stack>
  );
};
export default FormLiveSession;
