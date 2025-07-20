import Sidebar from '../../shared/components/Sidebar';
import { Text, Box } from '@chakra-ui/react';
import TableArea from '../../shared/components/Table';
import TableBodyMentee from '../components/TableBody/TableBodyMente';
import { useEffect, useState } from 'react';
import { getAllMentee } from '../../utils/mentee';
import { deleteMenteeForPaid } from '../../utils/mentee';
const UsersMentorpage = () => {
  const [mentees, setMentees] = useState([]);
  const headers = [
    'Email',
    'Full Name',
    'Telephone',
    'Image',
    'Mentoring',
    'Link-Mentoring',
    'Payment',
  ];
  useEffect(() => {
    getAllMentee()
      .then(({ data }) => {
        setMentees(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  // const onDetailById = (id) => {
  //   navigate(`/mentees/${id}`);
  // };
  const deleteHandler = (paymentId) => {
    deleteMenteeForPaid(paymentId)
      .then(({ message, error }) => {
        if (error) {
          alert(message);
        } else {
          alert(message);
          setMentees((prev) => prev.filter((mentee) => mentee._id !== paymentId));
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  return (
    <Sidebar type={'mentor'}>
      <Box color={'textBlue'}>
        <Text fontSize={'xl'}>Mentees</Text>
        <TableArea headers={headers}>
          <TableBodyMentee items={mentees} onDeleteById={deleteHandler} />
        </TableArea>
      </Box>
    </Sidebar>
  );
};

export default UsersMentorpage;
