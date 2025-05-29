import Sidebar from '../../shared/components/Sidebar';
import { Text, Box } from '@chakra-ui/react';
import FormLesson from '../components/FormLesson';
const DetailLessonMentorpage = () => {
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
  return (
    <Sidebar type={'mentor'}>
      <Box color={'textBlue'}>
        <Text>Detail Lesson</Text>
        <FormLesson lessonData={data} />
      </Box>
    </Sidebar>
  );
};

export default DetailLessonMentorpage;
