import Layouts from '../components/Layouts/Layouts';
import {
  Box,
  Grid,
  GridItem,
  Image,
  Text,
  Stack,
  Flex,
  Button,
  Group,
  Span,
} from '@chakra-ui/react';
const AddMentorpage = () => {
  return (
    <Layouts>
      <Box color={'gray.600'}>
        <Text fontSize={'3xl'} fontWeight={'semibold'}>
          Apply as a Mentor
        </Text>
        <Box></Box>
      </Box>
    </Layouts>
  );
};

export default AddMentorpage;
