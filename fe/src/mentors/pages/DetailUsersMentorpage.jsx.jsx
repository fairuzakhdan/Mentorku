import { useParams } from 'react-router';
import { Text, Box } from '@chakra-ui/react';
import Sidebar from '../../shared/components/Sidebar';
import { useEffect, useState } from 'react';
const DetailUsersMentorpage = () => {
  const [mentee, setMentee] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { userId } = useParams();
  const data = {
    id: 1,
    email: 'example@gmail.com',
    institution: 'Institut Teknologi Bandung',
    telephone: '08123456789',
    fullName: 'John Doe',
    sessions: [
      {
        day: 'Senin',
        time: '08.00-10.00',
      },
      {
        day: 'Rabu',
        time: '20.00-22.00',
      },
    ],
    linkMentoring: 'https://meet.google.com/pre-ztbc-ohe',
    image:
      'https://img.freepik.com/premium-vector/person-with-blue-shirt-that-says-name-person_1029948-7040.jpg?semt=ais_hybrid&w=740',
    payment: 'Success',
  };
  useEffect(() => {
    setIsLoading(true);
    setMentee(data);
    setIsLoading(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userId]);
  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <Sidebar type={'mentor'}>
      <Text>Detail Users</Text>
      <Box>
        <Text>Email: {mentee.email}</Text>
      </Box>
    </Sidebar>
  );
};

export default DetailUsersMentorpage;
