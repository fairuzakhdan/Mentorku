import Sidebar from '../../shared/components/Sidebar';
import TableArea from '../../shared/components/Table';
import { Box, Text, Button, Flex } from '@chakra-ui/react';
import AddButton from '../../shared/components/AddButon';
import TableBodySessions from '../components/TableBody/TableBodySessions';
import { useEffect, useState } from 'react';
import { getAllSession } from '../../utils/sessions';
const SessionMentorpage = () => {
  const headers = ['Day', 'Duration', 'Session'];
  const [sessions, setSessions] = useState([]);
  useEffect(() => {
    getAllSession()
      .then(({ data, error }) => {
        if (error) {
          alert(error);
        } else {
          setSessions(data);
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
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
