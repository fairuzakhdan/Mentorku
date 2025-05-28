import Sidebar from '../../shared/components/Sidebar';
import { Box, Text, Button, Group, Flex } from '@chakra-ui/react';
import TableArea from '../../components/Fragments/Table';
const LessonsMentorpage = () => {
  return (
    <Sidebar type={'mentor'}>
      <Box color={'textBlue'}>
        <Flex justifyContent={'space-between'}>
          <Text fontSize={'xl'}>My Lessons</Text>
          <Button backgroundColor={'teal.600'} color={'white'}>
            Add Lessons
          </Button>
        </Flex>
        <TableArea>
            
        </TableArea>
      </Box>
    </Sidebar>
  );
};

export default LessonsMentorpage;
