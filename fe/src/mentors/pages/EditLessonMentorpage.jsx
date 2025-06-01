import Sidebar from '../../shared/components/Sidebar';
import { Text, Box } from '@chakra-ui/react';
import { useParams } from 'react-router';
import { itemLesson } from '../utils/mentorrole';
import { useEffect, useState } from 'react';
import FormLesson from '../components/Forms/FormLesson';
const EditLessonMentorpage = () => {
  const { lessonId } = useParams();
  const [lesson, setLesson] = useState({});
  useEffect(() => {
    const lesson = itemLesson.find((item) => item.id === lessonId);
    setLesson(lesson);
  }, [lessonId]);
  return (
    <Sidebar type={'mentor'}>
      <FormLesson type="edit" initialData={lesson} onSubmitLesson={(data) => console.log(data)} />
    </Sidebar>
  );
};

export default EditLessonMentorpage;
