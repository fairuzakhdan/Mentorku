import FormInput from '../../../components/Elements/FormInput';
import { Flex, Box, Stack, Button } from '@chakra-ui/react';
import useInput from '../../../hooks/useInput';

const FormLiveSession = ({ initialData = {}, onSubmit }) => {
  const isEdit = Boolean(initialData && Object.keys(initialData).length > 0);

  const [scheduleType, onChangeScheduleType] = useInput(initialData.scheduleType || '');
  const [meetingPerWeek, onChangeMeetingPerWeek] = useInput(initialData.meetingPerWeek || '');

  const handleSubmit = () => {
    onSubmit({
      scheduleType,
      meetingPerWeek: Number(meetingPerWeek),
    });
  };

  return (
    <Stack rowGap={5} bgColor={'white'} p={5} mt={5} rounded={'xl'} shadow={'sm'}>
      <FormInput
        label={isEdit ? 'Edit Schedule Type' : 'Add Schedule Type'}
        required
        value={scheduleType}
        onChange={onChangeScheduleType}
        placeholder={'month/week'}
        type="text"
      />
      <FormInput
        label={isEdit ? 'Edit Meetings per Week' : 'Add Meetings per Week'}
        required
        value={meetingPerWeek}
        onChange={onChangeMeetingPerWeek}
        placeholder={'2'}
        type="number"
        min={1}
      />
      <Button colorPalette={'teal'} onClick={handleSubmit}>
        {isEdit ? 'Update Schedule' : 'Add Schedule'}
      </Button>
    </Stack>
  );
};

export default FormLiveSession;
