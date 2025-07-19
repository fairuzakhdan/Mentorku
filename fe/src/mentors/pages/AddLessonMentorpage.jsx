import Sidebar from '../../shared/components/Sidebar';
import { Box, Text, Flex, Group } from '@chakra-ui/react';
import FormLesson from '../components/Forms/FormLesson';
import { createLesson } from '../../utils/lessons';
import { useNavigate } from 'react-router';
const AddLessonMentorpage = () => {
  const navigate = useNavigate();
  const createLessonHandler = ({ topic, videos, articles }) => {
    createLesson({ topic, videos, articles }).then(({ message, error }) => {
      if (error) {
        alert(message);
      } else {
        alert(message);
        navigate('/mylessons');
      }
    });
  };
  return (
    <Sidebar type="mentor">
      <Box>
        <FormLesson type="add" onSubmitLesson={createLessonHandler} />
      </Box>
    </Sidebar>
  );
};

export default AddLessonMentorpage;
