import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import Sidebar from '../../shared/components/Sidebar';
import TableArea from '../../shared/components/Table';
import TableBodyUserAdmin from '../components/TableBody/TableBodyUserAdmin';
const UsersAdminpage = () => {
  const header = ['Email', 'Full Name', 'telephone', 'Institution', 'Image'];
  return (
    <Sidebar type={'admin'}>
      <Text>Users</Text>
      <TableArea headers={header}>
        <TableBodyUserAdmin />
      </TableArea>
    </Sidebar>
  );
};

export default UsersAdminpage;
