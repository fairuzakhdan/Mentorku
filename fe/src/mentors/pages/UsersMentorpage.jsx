import Sidebar from '../../shared/components/Sidebar';
import { Text, Box } from '@chakra-ui/react';
import TableArea from '../../components/Fragments/Table';
import TableBodyMentee from '../components/TableBodyMente';
import { useEffect, useState } from 'react';
const UsersMentorpage = () => {
  const [mentees, setMentees] = useState([]);
  const headers = ['Email', 'Full Name', 'Institution', 'Image', 'Mentoring', 'Link-Mentoring'];
  const items = [
    {
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
    },
    {
      id: 2,
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
    },
    {
      id: 3,
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
    },
    {
      id: 4,
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
      linkMentoring: '',
      image:
        'https://img.freepik.com/premium-vector/person-with-blue-shirt-that-says-name-person_1029948-7040.jpg?semt=ais_hybrid&w=740',
    },
    {
      id: 5,
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
    },
    {
      id: 6,
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
      linkMentoring: '',
      image:
        'https://img.freepik.com/premium-vector/person-with-blue-shirt-that-says-name-person_1029948-7040.jpg?semt=ais_hybrid&w=740',
    },
    {
      id: 7,
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
      linkMentoring: '',
      image:
        'https://img.freepik.com/premium-vector/person-with-blue-shirt-that-says-name-person_1029948-7040.jpg?semt=ais_hybrid&w=740',
    },
    {
      id: 8,
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
    },
    {
      id: 9,
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
    },
  ];
  useEffect(() => {
    setMentees(items);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Sidebar type={'mentor'}>
      <Box color={'textBlue'}>
        <Text fontSize={'xl'}>Mentees</Text>
        <TableArea headers={headers}>
          <TableBodyMentee items={mentees} />
        </TableArea>
      </Box>
    </Sidebar>
  );
};

export default UsersMentorpage;
