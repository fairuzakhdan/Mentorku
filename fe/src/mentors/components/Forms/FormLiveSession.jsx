import FormInput from '../../../components/Elements/FormInput';
import { Flex, Box, Stack, Button } from '@chakra-ui/react';
import useInput from '../../../hooks/useInput';
const FormLiveSession = ({ initialData }) => {
  const [schedule, onChangeScheduleType, setScheduleType] = useInput('');
  const [meetingWeek, onChangeMeetingWeek, SetMeetingWeek] = useInput('');
  return (
    <Stack rowGap={5} bgColor={'white'} p={5} mt={5} rounded={'xl'} shadow={'sm'}>
      <FormInput
        label={initialData.length === 0 ? 'Add ScheduleType' : 'Edit ScheduleType'}
        required
        value={schedule}
        onChange={onChangeScheduleType}
        placeholder={'month/week'}
        type="text"
      />
      <FormInput
        label={initialData.length === 0 ? 'Add Meeting/Week' : 'Edit Meeting/Week'}
        required
        value={meetingWeek}
        onChange={onChangeMeetingWeek}
        placeholder={'2'}
        type="number"
      />
      <Button colorPalette={'teal'}>
        {initialData.length === 0 ? 'Add Schedule' : 'Edit Schedule'}
      </Button>
    </Stack>
  );
};
export default FormLiveSession;
