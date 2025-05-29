import { Table, Button, Flex, Group, Text, Box } from '@chakra-ui/react';
import { FaEdit } from 'react-icons/fa';
import { MdOutlineDeleteOutline } from 'react-icons/md';
import AvatarCard from '../../components/Elements/Avatar';
const TableBodyMentee = ({ items, onEditById, onDeleteById }) => {
  return (
    <>
      {items.map((item, index) => (
        <Table.Row key={index} backgroundColor={'gray.200'}>
          <Table.Cell>{index + 1}</Table.Cell>
          <Table.Cell>{item.email}</Table.Cell>
          <Table.Cell>{item.fullName}</Table.Cell>
          <Table.Cell>{`${item.institution.substring(0, 22)}...`}</Table.Cell>
          <Table.Cell>
            <AvatarCard image={item.image} size="2xs" rounded="full" />
          </Table.Cell>
          <Table.Cell>
            <Flex columnGap={3}>
              {item.sessions.map((session) => (
                <Group>
                  <Text color={'teal'}>{session.day}</Text>
                  <Text color={'red.500'}>{session.time}</Text>
                </Group>
              ))}
            </Flex>
          </Table.Cell>
          <Table.Cell color={'blue.700'}>
            {item.linkMentoring.length < 1 ? (
              <Text color={'red'}>No Set</Text>
            ) : (
              <Text color={'blue.700'}>{item.linkMentoring.substring(0, 20)}</Text>
            )}
          </Table.Cell>
          <Table.Cell textAlign={'center'} p={0}>
            <Button
              p={0}
              backgroundColor={'transparent'}
              color={'textGreen'}
              _hover={{ color: 'gray.800' }}
              onClick={() => onEditById(item.id)}
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
export default TableBodyMentee;
