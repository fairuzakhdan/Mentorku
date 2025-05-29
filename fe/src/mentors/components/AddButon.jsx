import { MdAssignmentAdd } from 'react-icons/md';
import { Box, Button, Flex, Group } from '@chakra-ui/react';
import { Link } from 'react-router';
const AddButton = ({ label, toLink }) => {
  return (
    <Link to={toLink}>
      <Flex
        justifyContent={'center'}
        columnGap={1}
        px={2}
        py={1}
        rounded={'md'}
        alignItems={'center'}
        backgroundColor={'textBlue'}
        color={'white'}
        size={'sm'}
        _hover={{ backgroundColor: 'gray.600' }}
      >
        <MdAssignmentAdd /> {label}
      </Flex>
    </Link>
  );
};
export default AddButton;
