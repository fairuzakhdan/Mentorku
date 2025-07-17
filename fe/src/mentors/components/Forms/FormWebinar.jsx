import FormInput from '../../../components/Elements/FormInput';
import { FormTextArea } from '../../../components/Elements/FormInput';
import useInput from '../../../hooks/useInput';
import { useEffect } from 'react';
import { Stack, Flex, Button } from '@chakra-ui/react';

const FormWebinar = ({ initialData = {}, type = 'add', onSubmit }) => {
  const [topic, onChangeTopic, setTopic] = useInput(initialData.title || '');
  const [linkWebinar, onChangeLinkWebinar, setLinkWebinar] = useInput(initialData.linkMeet || '');
  const [date, onChangeDate, setDate] = useInput(initialData.date || '');
  const [time, onChangeTime, setTime] = useInput(initialData.time || '');
  const [description, onChangeDescription, setDescription] = useInput(
    initialData.description || '',
  );

  const handleSubmit = () => {
    const data = { topic, linkWebinar, date, time, description };
    onSubmit(data);
  };

  useEffect(() => {
    if (type === 'edit' && initialData && Object.keys(initialData).length > 0) {
      setTopic(initialData.title || '');
      setLinkWebinar(initialData.linkMeet || '');
      setDate(initialData.date || '');
      setTime(initialData.time || '');
      setDescription(initialData.description || '');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialData, type]);
  // console.log({ topic, linkWebinar, date, time, description });
  return (
    <Stack rowGap={7} color={'textBlue'}>
      <Flex columnGap={5}>
        <FormInput
          label={type === 'add' ? 'Add Topic Webinar' : 'Update Topic Webinar'}
          placeholder={'Enter topic webinar'}
          type="text"
          value={topic}
          onChange={onChangeTopic}
          required
        />
        <FormInput
          label={type === 'add' ? 'Add Link Webinar' : 'Update Link Webinar'}
          placeholder={'Enter link webinar(https://meet.google.com/pre-ztbc-ohe)'}
          type="text"
          value={linkWebinar}
          onChange={onChangeLinkWebinar}
          required
        />
      </Flex>
      <Flex columnGap={5}>
        <FormInput
          label={type === 'add' ? 'Add Date Webinar' : 'Update Date Webinar'}
          placeholder={'Enter date webinar(2023/08/10)'}
          type="date"
          value={date}
          onChange={onChangeDate}
          required
        />
        <FormInput
          label={type === 'add' ? 'Add Time Webinar' : 'Update Time Webinar'}
          placeholder={'Enter time webinar(08:00-10:00)'}
          type="text"
          value={time}
          onChange={onChangeTime}
          required
        />
      </Flex>
      <FormTextArea
        label={type === 'add' ? 'Add Description' : 'Update Description'}
        placeholder={'Enter description webinar'}
        value={description}
        onChange={onChangeDescription}
        required
      />
      <Button colorPalette={'teal'} width={'fit-content'} alignSelf={'end'} onClick={handleSubmit}>
        {type === 'add' ? 'Add Webinar' : 'Update Webinar'}
      </Button>
    </Stack>
  );
};
export default FormWebinar;
