import Sidebar from '../../shared/components/Sidebar';
import { Text, Box } from '@chakra-ui/react';
import FormEditLesson from '../components/Forms/FormEditLesson';
import { useParams } from 'react-router';
import { itemLesson } from '../utils/mentorrole';
import { useEffect, useState } from 'react';
import FormAddLesson from '../components/Forms/FormAddLesson';
const EditLessonMentorpage = () => {
  const { lessonId } = useParams();
  const [lesson, setLesson] = useState({});
  useEffect(() => {
    const lesson = itemLesson.find((item) => item.id === lessonId);
    setLesson(lesson);
  }, [lessonId]);
  return (
    <Sidebar type={'mentor'}>
      <FormAddLesson type="edit" initialData={lesson} addLessons="" />
    </Sidebar>
  );
};

export default EditLessonMentorpage;
