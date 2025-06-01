import Sidebar from '../../shared/components/Sidebar';
import TableArea from '../../shared/components/Table';
import { Box, Text, Button, Flex } from '@chakra-ui/react';
import AddButton from '../../shared/components/AddButon';
import TableBodySessions from '../components/TableBody/TableBodySessions';
import { itemSession } from '../utils/mentorrole';
import { useEffect, useState } from 'react';
const SessionMentorpage = () => {
  const headers = ['Day', 'Duration', 'Session'];
  const [sessions, setSessions] = useState([]);
  useEffect(() => {
    setSessions(itemSession);
  }, []);
  return (
    <Sidebar type={'mentor'}>
      <Box color={'textBlue'}>
        <Flex justifyContent="space-between" alignItems={'center'} mb={1}>
          <Text fontSize={'xl'}>Sessions</Text>
          <AddButton label={'Add Session'} toLink={'/sessions/add'} />
        </Flex>
        <TableArea headers={headers}>
          <TableBodySessions items={sessions} />
        </TableArea>
      </Box>
    </Sidebar>
  );
};

export default SessionMentorpage;
