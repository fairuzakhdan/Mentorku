import Sidebar from '../../shared/components/Sidebar';
import { Text, Box } from '@chakra-ui/react';
import TableArea from '../../shared/components/Table';
import TableBodyMentee from '../components/TableBody/TableBodyMente';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { getAllMentee } from '../../utils/mentee';
const UsersMentorpage = () => {
  const navigate = useNavigate();
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
  const onDetailById = (id) => {
    navigate(`/mentees/${id}`);
  };
  return (
    <Sidebar type={'mentor'}>
      <Box color={'textBlue'}>
        <Text fontSize={'xl'}>Mentees</Text>
        <TableArea headers={headers}>
          <TableBodyMentee items={mentees} toDetailById={onDetailById} />
        </TableArea>
      </Box>
    </Sidebar>
  );
};

export default UsersMentorpage;
