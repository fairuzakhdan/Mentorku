import Sidebar from '../../shared/components/Sidebar';
import { Box, Text, Button, Group, Flex } from '@chakra-ui/react';
import TableArea from '../../components/Fragments/Table';
import TableBodyLessons from '../components/TableBodyLessons';
import { useEffect, useState } from 'react';
import AddButton from '../components/AddButon';
const LessonsMentorpage = () => {
  const [lessons, setLessons] = useState([]);
  const headers = ['Topic', 'Title Videos', 'Total Videos', 'Header Articles', 'Title Articles'];
  const items = [
    {
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
    },
    {
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
    },
  ];
  useEffect(() => {
    setLessons(items);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Sidebar type={'mentor'}>
      <Box color={'textBlue'}>
        <Flex justifyContent={'space-between'} alignItems={'center'} mb={1}>
          <Text fontSize={'xl'}>My Lessons</Text>
          <AddButton label={'Add Lessons'} />
        </Flex>
        <TableArea headers={headers}>
          <TableBodyLessons items={lessons} />
        </TableArea>
      </Box>
    </Sidebar>
  );
};

export default LessonsMentorpage;
