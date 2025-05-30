import FormInput from '../../../components/Elements/FormInput';
import { FormTextArea } from '../../../components/Elements/FormInput';
import useInput from '../../../hooks/useInput';
import { IoIosAddCircle } from 'react-icons/io';
import { Stack, Box, Flex, Text, Button } from '@chakra-ui/react';
const FormWebinar = ({ initialData = {}, type = 'add', onSubmit }) => {
  const [topic, onChangeTopic] = useInput(initialData.topic || '');
  const [linkWebinar, onChangeLinkWebinar] = useInput(initialData.linkWebinar || '');
  const [date, onChangeDate] = useInput(initialData.date || '');
  const [time, onChangeTime] = useInput(initialData.time || '');
  const [description, onChangeDescription] = useInput(initialData.description || '');

  const handleSubmit = () => {
    onSubmit({
      topic,
      linkWebinar,
      date,
      time,
      description,
    });
  };
  return (
    <Stack rowGap={7} color={'textBlue'}>
      <Flex columnGap={5}>
        <FormInput
          label={'Add Topic Webinar'}
          placeholder={'Enter topic webinar'}
          type="text"
          value={topic}
          onChange={onChangeTopic}
          required
        />
        <FormInput
          label={'Add Link Webinar'}
          placeholder={'Enter link webinar(https://meet.google.com/pre-ztbc-ohe)'}
          type="text"
          value={linkWebinar}
          onChange={onChangeLinkWebinar}
          required
        />
      </Flex>
      <Flex columnGap={5}>
        <FormInput
          label={'Add Date Webinar'}
          placeholder={'Enter date webinar(2023/08/10)'}
          type="date"
          value={date}
          onChange={onChangeDate}
          required
        />
        <FormInput
          label={'Add Time Webinar'}
          placeholder={'Enter time webinar(08:00-10:00)'}
          type="text"
          value={time}
          onChange={onChangeTime}
          required
        />
      </Flex>
      <FormTextArea
        label={'Add Description'}
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
