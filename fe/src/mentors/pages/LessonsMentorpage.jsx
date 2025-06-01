import Sidebar from '../../shared/components/Sidebar';
import { Box, Text, Button, Group, Flex } from '@chakra-ui/react';
import TableArea from '../../components/Fragments/Table';
import TableBodyLessons from '../components/TableBody/TableBodyLessons';
import { useEffect, useState } from 'react';
import AddButton from '../components/AddButon';
import { itemLesson } from '../utils/mentorrole';
const LessonsMentorpage = () => {
  const [lessons, setLessons] = useState([]);
  const headers = ['Topic', 'Title Videos', 'Total Videos', 'Header Articles', 'Title Articles'];
  useEffect(() => {
    setLessons(itemLesson);
  }, []);
  return (
    <Sidebar type={'mentor'}>
      <Box color={'textBlue'}>
        <Flex justifyContent={'space-between'} alignItems={'center'} mb={1}>
          <Text fontSize={'xl'}>My Lessons</Text>
          <AddButton label={'Add Lessons'} toLink={'/mylessons/add'} />
        </Flex>
        <TableArea headers={headers}>
          <TableBodyLessons items={lessons} />
        </TableArea>
      </Box>
    </Sidebar>
  );
};

export default LessonsMentorpage;
