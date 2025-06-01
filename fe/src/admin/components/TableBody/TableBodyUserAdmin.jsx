import { Box, Table, Button } from '@chakra-ui/react';
import { MdOutlineDeleteOutline } from 'react-icons/md';
import { FaEdit } from 'react-icons/fa';
const TableBodyUserAdmin = ({ items }) => {
  return (
    <>
      {items.map((item, index) => (
        <Table.Row key={index} backgroundColor={'gray.200'}>
          <Table.Cell>{index + 1}</Table.Cell>
          <Table.Cell>{item.email}</Table.Cell>
          <Table.Cell>{item.fullName}</Table.Cell>
          <Table.Cell>{item.telephone}</Table.Cell>
          <Table.Cell>{item.institution}</Table.Cell>
          <Table.Cell>{item.image}</Table.Cell>
          <Table.Cell textAlign={'center'} p={0}>
            <Button
              p={0}
              backgroundColor={'transparent'}
              color={'textGreen'}
              _hover={{ color: 'gray.800' }}
              //   onClick={() => toDetailById(item.id)}
            >
              <FaEdit />
            </Button>
            <Button
              p={0}
              backgroundColor={'transparent'}
              color={'red'}
              _hover={{ color: 'gray.800' }}
              //   onClick={() => onDeleteById(item.id)}
            >
              <MdOutlineDeleteOutline />
            </Button>
          </Table.Cell>
        </Table.Row>
      ))}
    </>
  );
};

export default TableBodyUserAdmin;
