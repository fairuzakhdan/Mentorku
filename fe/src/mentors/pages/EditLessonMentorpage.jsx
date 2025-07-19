import Sidebar from '../../shared/components/Sidebar';
import { Text, Box } from '@chakra-ui/react';
import { useParams } from 'react-router';
import { useEffect, useState } from 'react';
import FormLesson from '../components/Forms/FormLesson';
import { useNavigate } from 'react-router';
import { getLessonById, updateLessonById } from '../../utils/lessons';
const EditLessonMentorpage = () => {
  const navigate = useNavigate();
  const { lessonId } = useParams();
  const [lesson, setLesson] = useState({});
  useEffect(() => {
    getLessonById(lessonId).then(({ data }) => {
      setLesson(data);
    });
  }, [lessonId]);

  const handleUpdateLesson = ({ topic, videos, articles }) => {
    updateLessonById(lessonId, { topic, videos, articles })
      .then(({ message, error }) => {
        if (error) {
          alert(message);
        } else {
          alert(message);
          navigate('/mylessons');
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  return (
    <Sidebar type={'mentor'}>
      <FormLesson type="edit" initialData={lesson} onSubmitLesson={handleUpdateLesson} />
    </Sidebar>
  );
};

export default EditLessonMentorpage;
