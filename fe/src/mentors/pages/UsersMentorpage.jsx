import Sidebar from '../../shared/components/Sidebar';
import { Text, Box } from '@chakra-ui/react';
const UsersMentorpage = () => {
  return (
    <Sidebar type={'mentor'}>
      <Box color={'textBlue'}>
        <Text>Mentees</Text>
      </Box>
    </Sidebar>
  );
};

export default UsersMentorpage;
