import Sidebar from '../../shared/components/Sidebar';
import TableArea from '../../shared/components/Table';
import { Box, Text, Button, Flex } from '@chakra-ui/react';
import AddButton from '../../shared/components/AddButon';
import TableBodySessions from '../components/TableBody/TableBodySessions';
import { useEffect, useState } from 'react';
import { getAllSession } from '../../utils/sessions';
import { deleteSessionById } from '../../utils/sessions';
import FormLiveSession from '../components/Forms/FormLiveSession';
import { createLiveSession, getLiveSessionForMentor, updateLiveSession } from '../../utils/mentors';

const SessionMentorpage = () => {
  const headers = ['Day', 'Duration'];
  const [sessions, setSessions] = useState([]);
  const [liveSession, setLiveSession] = useState({});
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

    getLiveSessionForMentor()
      .then(({ data, error }) => {
        if (error || !data) {
          setLiveSession([]);
        } else {
          setLiveSession(data);
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  const deleteSessionHandler = (sessionId) => {
    deleteSessionById(sessionId)
      .then(({ error, message }) => {
        if (error) {
          alert(message);
        } else {
          const session = sessions.filter((session) => session._id !== sessionId);
          setSessions(session);
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const addLiveSession = ({ scheduleType, meetingPerWeek }) => {
    createLiveSession({ scheduleType, meetingPerWeek })
      .then(({ error, message }) => {
        if (error) {
          alert(message);
        } else {
          alert(message);
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const updateLiveSessionHandler = ({ scheduleType, meetingPerWeek }) => {
    const body = { scheduleType, meetingPerWeek };
    updateLiveSession(body)
      .then(({ error, message }) => {
        if (error) {
          alert(message);
        } else {
          alert(message);
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  const isEditing = liveSession && Object.keys(liveSession).length > 0;

  return (
    <Sidebar type={'mentor'}>
      <Box color={'textBlue'}>
        <Flex justifyContent="space-between" alignItems={'center'} mb={1}>
          <Text fontSize={'xl'}>Sessions</Text>
          <AddButton label={'Add Session'} toLink={'/sessions/add'} />
        </Flex>
        <Flex width={'full'} columnGap={5}>
          <Box flex={2}>
            <TableArea headers={headers}>
              <TableBodySessions items={sessions} onDeleteById={deleteSessionHandler} />
            </TableArea>
          </Box>
          <Box>
            <FormLiveSession
              onSubmit={isEditing ? updateLiveSessionHandler : addLiveSession}
              initialData={liveSession}
            />
          </Box>
        </Flex>
      </Box>
    </Sidebar>
  );
};

export default SessionMentorpage;
