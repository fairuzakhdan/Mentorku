import { Table, Button, Flex, Group } from '@chakra-ui/react';
import { FaEdit } from 'react-icons/fa';
import { MdOutlineDeleteOutline } from 'react-icons/md';

const TableArea = ({ headers, children }) => {
  return (
    <Table.ScrollArea borderWidth="1px" rounded="md" height={500} mt={1}>
      <Table.Root size="sm" stickyHeader>
        <Table.Header>
          <Table.Row backgroundColor={'textGreen'}>
            <Table.ColumnHeader>No</Table.ColumnHeader>
            {headers.map((header, index) => (
              <Table.ColumnHeader key={index}>{header}</Table.ColumnHeader>
            ))}
            <Table.ColumnHeader textAlign={'center'}>Actions</Table.ColumnHeader>
          </Table.Row>
        </Table.Header>
        <Table.Body>{children}</Table.Body>
      </Table.Root>
    </Table.ScrollArea>
  );
};

export default TableArea;
