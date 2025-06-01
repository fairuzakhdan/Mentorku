import Sidebar from '../../shared/components/Sidebar';
import TableArea from '../../shared/components/Table';
import TableBodyWebinar from '../components/TableBody/TableBodyWebinar';
import { Text, Box, Flex } from '@chakra-ui/react';
import AddButton from '../../shared/components/AddButon';
import { useState, useEffect } from 'react';
import { itemWebinar } from '../utils/mentorrole';
const WebinarMentorpage = () => {
  const [webinars, setWebinars] = useState([]);
  const headers = ['Topic', 'LinkWebinar', 'Date', 'Time', 'Description'];
  useEffect(() => {
    setWebinars(itemWebinar);
  }, []);
  return (
    <Sidebar type={'mentor'}>
      <Box color={'textBlue'}>
        <Flex justifyContent="space-between" alignItems={'center'} mb={1}>
          <Text fontSize={'xl'}>Webinar</Text>
          <AddButton label={'Add Webinar'} toLink={'/webinars/add'} />
        </Flex>
        <TableArea headers={headers}>
          <TableBodyWebinar items={webinars} />
        </TableArea>
      </Box>
    </Sidebar>
  );
};

export default WebinarMentorpage;
