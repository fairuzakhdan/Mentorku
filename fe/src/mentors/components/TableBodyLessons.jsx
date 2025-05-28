import { Table, Button, Flex, Group } from '@chakra-ui/react';
import { FaEdit } from 'react-icons/fa';
import { MdOutlineDeleteOutline } from 'react-icons/md';
const TableBodyLessons = ({ items, onEditById, onDeleteById }) => {
  return (
    <>
      {items.map((item, index) => (
        <Table.Row key={index} backgroundColor={'gray.200'}>
          <Table.Cell>{index + 1}</Table.Cell>
          <Table.Cell>{item.topic}</Table.Cell>
          <Table.Cell>{item.videos[0].title}</Table.Cell>
          <Table.Cell>{item.articles[0].header}</Table.Cell>
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
export default TableBodyLessons;
