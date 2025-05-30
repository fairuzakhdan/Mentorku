import Sidebar from '../../shared/components/Sidebar';
import { Text, Box } from '@chakra-ui/react';
import FormEditLesson from '../components/Forms/FormEditLesson';
const EditLessonMentorpage = () => {
  return (
    <Sidebar type={'mentor'}>
      <FormEditLesson />
    </Sidebar>
  );
};

export default EditLessonMentorpage;
