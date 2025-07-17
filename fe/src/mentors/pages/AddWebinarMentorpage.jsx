import { Box, Flex, Group, Text, Button } from '@chakra-ui/react';
import Sidebar from '../../shared/components/Sidebar';
import FormWebinar from '../components/Forms/FormWebinar';
import { useNavigate } from 'react-router';
import { createWebinar } from '../../utils/webinars';
const AddWebinarMentorpage = () => {
  const navigate = useNavigate();
  const addWebinarHandler = ({ topic, linkWebinar, date, time, description }) => {
    // console.log({ topic, linkWebinar, date, time, description });
    createWebinar({ title: topic, linkMeet: linkWebinar, date, time, description })
      .then(({ data }) => {
        const { error } = data;
        if (error) return;
        alert('Webinar success ditambahkan');
        navigate('/webinars');
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  return (
    <Sidebar type={'mentor'}>
      <FormWebinar onSubmit={addWebinarHandler} />
    </Sidebar>
  );
};
export default AddWebinarMentorpage;
