import Sidebar from '../../shared/components/Sidebar';
import { Box, Flex, Text } from '@chakra-ui/react';
import FormMentorAdmin from '../components/Forms/FormMentorAdmin';
const AddMentorAdminpage = () => {
  return (
    <Sidebar type={'admin'}>
      <Box color={'textBlue'}>
        <FormMentorAdmin type="add" onSubmit={(data) => console.log(data)} />
      </Box>
    </Sidebar>
  );
};
export default AddMentorAdminpage;
