import Sidebar from '../../shared/components/Sidebar';
import TableArea from '../../components/Fragments/Table';
import TableBodyWebinar from '../components/TableBodyWebinar';
import { Text, Box, Flex } from '@chakra-ui/react';
import AddButton from '../components/AddButon';
const WebinarMentorpage = () => {
  const headers = ['Topic', 'LinkWebinar', 'Date', 'Time', 'Description'];
  const webinars = [
    {
      id: '1',
      topic: 'Persiapan Karir Menjadi Talenta Digital',
      linkWebinar: 'https://meet.google.com/pre-ztbc-ohe',
      date: '2023-08-10',
      time: '08:00-10:00',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, quod!',
    },
    {
      id: '2',
      topic: 'Persiapan Karir Menjadi Software Engineer',
      linkWebinar: 'https://meet.google.com/pre-ztbc-ohe',
      date: '2023-08-10',
      time: '08:00-10:00',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, quod!',
    },
  ];
  return (
    <Sidebar type={'mentor'}>
      <Box color={'textBlue'}>
        <Flex justifyContent="space-between" alignItems={'center'} mb={1}>
          <Text fontSize={'xl'}>Webinar</Text>
          <AddButton label={'Add Webinar'} />
        </Flex>
        <TableArea headers={headers}>
          <TableBodyWebinar items={webinars} />
        </TableArea>
      </Box>
    </Sidebar>
  );
};

export default WebinarMentorpage;
