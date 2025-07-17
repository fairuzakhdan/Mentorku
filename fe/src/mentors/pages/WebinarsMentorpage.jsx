import Sidebar from '../../shared/components/Sidebar';
import TableArea from '../../shared/components/Table';
import TableBodyWebinar from '../components/TableBody/TableBodyWebinar';
import { Text, Box, Flex } from '@chakra-ui/react';
import AddButton from '../../shared/components/AddButon';
import { useState, useEffect } from 'react';
import { getAllWebinar } from '../../utils/webinars';
import { deleteWebinarById } from '../../utils/webinars';
const WebinarMentorpage = () => {
  const [webinars, setWebinars] = useState([]);
  const headers = ['Topic', 'LinkWebinar', 'Date', 'Time', 'Description'];

  useEffect(() => {
    getAllWebinar()
      .then(({ data }) => {
        setWebinars(data);
      })
      .catch(({ error }) => {
        alert(error);
      });
  }, []);
  const deleteByIdHandler = (webinarId) => {
    deleteWebinarById(webinarId)
      .then(({ error }) => {
        if (!error) {
          // Filter item yang tidak dihapus
          setWebinars((prev) => prev.filter((webinar) => webinar._id !== webinarId));
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <Sidebar type={'mentor'}>
      <Box color={'textBlue'}>
        <Flex justifyContent="space-between" alignItems={'center'} mb={1}>
          <Text fontSize={'xl'}>Webinar</Text>
          <AddButton label={'Add Webinar'} toLink={'/webinars/add'} />
        </Flex>
        <TableArea headers={headers}>
          <TableBodyWebinar items={webinars} onDeleteById={deleteByIdHandler} />
        </TableArea>
      </Box>
    </Sidebar>
  );
};

export default WebinarMentorpage;
