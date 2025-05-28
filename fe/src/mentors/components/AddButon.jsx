import { MdAssignmentAdd } from 'react-icons/md';
import { Button } from '@chakra-ui/react';
const AddButton = ({ label }) => {
  return (
    <Button
      backgroundColor={'textBlue'}
      color={'white'}
      size={'sm'}
      _hover={{ backgroundColor: 'gray.600' }}
    >
      <MdAssignmentAdd /> {label}
    </Button>
  );
};
export default AddButton;
