import Sidebar from '../../shared/components/Sidebar';
import { Box, Text, Button } from '@chakra-ui/react';
const LessonsMentorpage = () => {
  return (
    <Sidebar type={'mentor'}>
      <Box>
        <Text>Lessons</Text>
        <Button>Upload</Button>
      </Box>
    </Sidebar>
  );
};

export default LessonsMentorpage;
