import { Table, Button, Flex, Group, Text, Link } from '@chakra-ui/react';
import { FaEdit } from 'react-icons/fa';
import { MdOutlineDeleteOutline } from 'react-icons/md';
import { useNavigate } from 'react-router';
const TableBodyWebinar = ({ items, onDeleteById }) => {
  const navigate = useNavigate();
  const toDetailById = (webinarId) => {
    navigate(`/webinars/${webinarId}`);
  };
  return (
    <>
      {items.map((item, index) => (
        <Table.Row key={index} backgroundColor={'gray.200'}>
          <Table.Cell>{index + 1}</Table.Cell>
          <Table.Cell>{item.topic}</Table.Cell>
          <Table.Cell color={'blue.700'}>
            <Link href={item.linkWebinar} color={'blue.700'}>
              {item.linkWebinar.substring(0, 20)}
            </Link>
          </Table.Cell>
          <Table.Cell>{item.date}</Table.Cell>
          <Table.Cell color={'red'}>{item.time}</Table.Cell>
          <Table.Cell>{`${item.description.substring(0, 20)}...`}</Table.Cell>
          <Table.Cell textAlign={'center'} p={0}>
            <Button
              p={0}
              backgroundColor={'transparent'}
              color={'textGreen'}
              _hover={{ color: 'gray.800' }}
              onClick={() => toDetailById(item.id)}
            >
              <FaEdit />
            </Button>
            <Button
              p={0}
              backgroundColor={'transparent'}
              color={'red'}
              _hover={{ color: 'gray.800' }}
              onClick={() => onDeleteById(item.id)}
            >
              <MdOutlineDeleteOutline />
            </Button>
          </Table.Cell>
        </Table.Row>
      ))}
    </>
  );
};

export default TableBodyWebinar;
