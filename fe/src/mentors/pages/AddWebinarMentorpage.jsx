import { Box, Flex, Group, Text, Button } from '@chakra-ui/react';
import Sidebar from '../../shared/components/Sidebar';
import FormWebinar from '../components/Forms/FormWebinar';
const AddWebinarMentorpage = () => {
  return (
    <Sidebar type={'mentor'}>
      <FormWebinar />
    </Sidebar>
  );
};
export default AddWebinarMentorpage;
