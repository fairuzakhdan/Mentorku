import FormInput from '../../../components/Elements/FormInput';
import { Stack, Button } from '@chakra-ui/react';
import useInput from '../../../hooks/useInput';
import { useEffect } from 'react';

const FormLiveSession = ({ initialData = {}, onSubmit }) => {
  const isEdit = Boolean(initialData && Object.keys(initialData).length > 0);

  const [scheduleType, onChangeScheduleType, setScheduleType] = useInput(
    initialData.scheduleType || '',
  );
  const [meetingPerWeek, onChangeMeetingPerWeek, setMeetingPerWeek] = useInput(
    initialData.meetingPerWeek || '',
  );

  useEffect(() => {
    if (initialData.scheduleType) {
      setScheduleType(initialData.scheduleType);
    }
    if (initialData.meetingPerWeek) {
      setMeetingPerWeek(initialData.meetingPerWeek);
    }
  }, [initialData, setMeetingPerWeek, setScheduleType]);

  const handleSubmit = () => {
    onSubmit({
      scheduleType,
      meetingPerWeek: Number(meetingPerWeek),
    });
  };

  return (
    <Stack rowGap={5} bgColor="white" p={5} mt={5} rounded="xl" shadow="sm">
      <FormInput
        label={isEdit ? 'Edit Schedule Type' : 'Add Schedule Type'}
        required
        value={scheduleType}
        onChange={onChangeScheduleType}
        placeholder="month/week"
        type="text"
      />
      <FormInput
        label={isEdit ? 'Edit Meetings per Week' : 'Add Meetings per Week'}
        required
        value={meetingPerWeek}
        onChange={onChangeMeetingPerWeek}
        placeholder="2"
        type="number"
        min={1}
      />

      <Button colorPalette="teal" onClick={handleSubmit}>
        {isEdit ? 'Update Schedule' : 'Add Schedule'}
      </Button>
    </Stack>
  );
};

export default FormLiveSession;
