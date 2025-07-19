import Sidebar from '../../shared/components/Sidebar';
import { Box, Text, Button, Group, Flex } from '@chakra-ui/react';
import TableArea from '../../shared/components/Table';
import TableBodyLessons from '../components/TableBody/TableBodyLessons';
import { useEffect, useState } from 'react';
import AddButton from '../../shared/components/AddButon';
import { getAllLesson, deleteLessonById } from '../../utils/lessons';
const LessonsMentorpage = () => {
  const [lessons, setLessons] = useState([]);
  const headers = ['Topic', 'Title Videos', 'Total Videos', 'Header Articles', 'Title Articles'];
  useEffect(() => {
    getAllLesson()
      .then(({ data }) => {
        setLessons(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const deleteLessonHandler = (lessonId) => {
    deleteLessonById(lessonId)
      .then(({ error, message }) => {
        if (error) {
          alert(message);
        } else {
          const lesson = lessons.filter((lesson) => lesson._id !== lessonId);
          setLessons(lesson);
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  return (
    <Sidebar type={'mentor'}>
      <Box color={'textBlue'}>
        <Flex justifyContent={'space-between'} alignItems={'center'} mb={1}>
          <Text fontSize={'xl'}>My Lessons</Text>
          <AddButton label={'Add Lessons'} toLink={'/mylessons/add'} />
        </Flex>
        <TableArea headers={headers}>
          <TableBodyLessons items={lessons} onDeleteById={deleteLessonHandler} />
        </TableArea>
      </Box>
    </Sidebar>
  );
};

export default LessonsMentorpage;
