import Sidebar from '../../shared/components/Sidebar';
import { Box, Text } from '@chakra-ui/react';
import FormUsersAdmin from '../components/Forms/FormUsersAdmin';
const AddUsersAdminpage = () => {
  return (
    <Sidebar type={'admin'}>
      <Box color={'textBlue'}>
        <FormUsersAdmin type="add" onSubmit={(data) => console.log(data)} />
      </Box>
    </Sidebar>
  );
};

export default AddUsersAdminpage;
