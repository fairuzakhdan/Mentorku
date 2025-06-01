import Sidebar from '../../shared/components/Sidebar';
import { Box, Text, Flex } from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import TableArea from '../../shared/components/Table';
import TableBodyMentorAdmin from '../components/TableBody/TableBodyMentorAdmin';
import { mentors as itemMentor } from '../../utils/mentors';
import AddButton from '../../shared/components/AddButon';
const MentorAdminpage = () => {
  const [mentors, setMentors] = useState([]);
  const headers = [
    'Email',
    'Name',
    'Password',
    'Role',
    'Expertise',
    'Price',
    'CV/Resume',
    'Description',
    'Image',
  ];
  useEffect(() => {
    setMentors(itemMentor);
  }, []);
  return (
    <Sidebar type={'admin'}>
      <Box color={'textBlue'}>
        <Flex alignItems={'center'} justifyContent={'space-between'}>
          <Text fontSize={'xl'}>Mentors</Text>
          <AddButton label={'Add Mentor'} toLink={'/mentors/add'} />
        </Flex>
        <TableArea headers={headers}>
          <TableBodyMentorAdmin items={mentors} />
        </TableArea>
      </Box>
    </Sidebar>
  );
};

export default MentorAdminpage;
