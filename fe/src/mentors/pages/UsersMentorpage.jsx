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
      payment: 'Success',
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
      payment: 'Success',
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
      payment: 'Success',
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
      payment: 'Success',
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
      payment: 'Success',
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
      payment: 'Success',
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
      payment: 'Success',
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
      payment: 'Success',
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
      payment: 'Success',
    },
  ];
  useEffect(() => {
    // setMentees(items);
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
