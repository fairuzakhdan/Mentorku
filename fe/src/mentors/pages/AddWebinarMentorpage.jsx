import { Box, Flex, Group, Text, Button } from '@chakra-ui/react';
import Sidebar from '../../shared/components/Sidebar';
import FormAddWebinar from '../components/Forms/FormAddWebinar';
const AddWebinarMentorpage = () => {
  return (
    <Sidebar type={'mentor'}>
      <FormAddWebinar />
    </Sidebar>
  );
};
export default AddWebinarMentorpage;
