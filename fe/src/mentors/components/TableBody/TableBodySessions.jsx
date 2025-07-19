import { Table, Button, Flex, Group, Text } from '@chakra-ui/react';
import { FaEdit } from 'react-icons/fa';
import { MdOutlineDeleteOutline } from 'react-icons/md';
import { useNavigate } from 'react-router';
const TableBodySessions = ({ items, onDeleteById }) => {
  const navigate = useNavigate();
  const toDetailById = (sessionId) => {
    navigate(`/sessions/${sessionId}`);
  };
  return (
    <>
      {items.map((item, index) => (
        <Table.Row key={index} backgroundColor={'gray.200'}>
          <Table.Cell>{index + 1}</Table.Cell>
          <Table.Cell>{item.day}</Table.Cell>
          <Table.Cell>
            <Group>
              {item.session.map((i, index) => (
                <Text key={index} color={'red'}>
                  {i.times}
                </Text>
              ))}
            </Group>
          </Table.Cell>
          <Table.Cell>{item.meeting} Session/week</Table.Cell>
          <Table.Cell textAlign={'center'} p={0}>
            <Button
              p={0}
              backgroundColor={'transparent'}
              color={'textGreen'}
              _hover={{ color: 'gray.800' }}
              onClick={() => toDetailById(item._id)}
            >
              <FaEdit />
            </Button>
            <Button
              p={0}
              backgroundColor={'transparent'}
              color={'red'}
              _hover={{ color: 'gray.800' }}
              onClick={() => onDeleteById(item._id)}
            >
              <MdOutlineDeleteOutline />
            </Button>
          </Table.Cell>
        </Table.Row>
      ))}
    </>
  );
};

export default TableBodySessions;
