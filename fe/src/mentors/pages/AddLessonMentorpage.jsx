import Sidebar from '../../shared/components/Sidebar';
import { Box, Text, Flex, Group } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import FormLesson from '../components/FormLesson';
const AddLessonMentorpage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [lesson, setLesson] = useState(null);
  const { lessonId } = useParams();
  const data = {
    id: '1',
    topic: 'Menjadi Fullstack Developer',
    videos: [
      {
        id: '1',
        title: 'Belajar React',
        link: 'https://youtu.be/2ehEWo4kaNA?si=A5XEJi0PPbZngLn1',
        createdAt: '2023-08-10',
      },
      {
        id: '2',
        title: 'Fundamental React',
        link: 'https://youtu.be/2ehEWo4kaNA?si=A5XEJi0PPbZngLn1',
        createdAt: '2023-08-10',
      },
    ],
    articles: [
      {
        id: '1',
        header: 'Pengenalan React',
        title: 'Belajar React',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex autem, molestias temporibus laborum debitis praesentium saepe. Ullam atque eum debitis porro. Cum voluptates natus labore optio? Inventore dolorem accusantium numquam. Eius libero possimus at, perferendis repudiandae rem dignissimos. Quod dolorum, officiis beatae eos consectetur neque animi culpa, voluptates rem necessitatibus obcaecati? Atque, doloremque et aspernatur hic saepe exercitationem similique molestias.',
      },
    ],
  };
  useEffect(() => {
    setIsLoading(true);
    setLesson(data);
    setIsLoading(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lessonId]);
  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <Sidebar type="mentor">
      <Text>{lesson.topic}</Text>
      <Box>
        <FormLesson type={'add'} />
      </Box>
    </Sidebar>
  );
};

export default AddLessonMentorpage;
