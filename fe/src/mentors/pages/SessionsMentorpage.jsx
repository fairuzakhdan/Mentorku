import Sidebar from '../../shared/components/Sidebar';
import TableArea from '../../components/Fragments/Table';
import { Box, Text, Button, Flex } from '@chakra-ui/react';
import AddButton from '../components/AddButon';
import TableBodySessions from '../components/TableBody/TableBodySessions';
const SessionMentorpage = () => {
  const headers = ['Day', 'Duration', 'Session'];
  const items = [
    {
      day: 'Senin',
      times: [
        {
          duration: '08:00-10:00',
        },
        {
          duration: '14:00-16:00',
        },
        {
          duration: '20:00-22:00',
        },
      ],
      session: 2,
    },
    {
      day: 'Rabu',
      times: [
        {
          duration: '08:00-10:00',
        },
        {
          duration: '14:00-16:00',
        },
        {
          duration: '20:00-22:00',
        },
      ],
      session: 2,
    },
    {
      day: 'Sabtu',
      times: [
        {
          duration: '08:00-10:00',
        },
        {
          duration: '14:00-16:00',
        },
        {
          duration: '20:00-22:00',
        },
      ],
      session: 2,
    },
  ];
  return (
    <Sidebar type={'mentor'}>
      <Box color={'textBlue'}>
        <Flex justifyContent="space-between" alignItems={'center'} mb={1}>
          <Text fontSize={'xl'}>Sessions</Text>
          <AddButton label={'Add Session'} />
        </Flex>
        <TableArea headers={headers}>
          <TableBodySessions items={items} />
        </TableArea>
      </Box>
    </Sidebar>
  );
};

export default SessionMentorpage;
