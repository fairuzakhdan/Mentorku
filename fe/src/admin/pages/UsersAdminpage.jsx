import React from 'react';
import { Box, Text, Flex } from '@chakra-ui/react';
import Sidebar from '../../shared/components/Sidebar';
import TableArea from '../../shared/components/Table';
import TableBodyUserAdmin from '../components/TableBody/TableBodyUserAdmin';
import { itemUser } from '../utils/admin';
import { useState, useEffect } from 'react';
import AddButton from '../../shared/components/AddButon';
const UsersAdminpage = () => {
  const [users, setUsers] = useState([]);
  const header = ['Email', 'Full Name', 'telephone', 'Institution', 'Image'];
  useEffect(() => {
    setUsers(itemUser);
  }, []);
  return (
    <Sidebar type={'admin'}>
      <Box color={'textBlue'}>
        <Flex alignItems={'center'} justifyContent={'space-between'}>
          <Text>Users</Text>
          <AddButton toLink={'/users/add'} label={'Add User'} />
        </Flex>
        <TableArea headers={header}>
          <TableBodyUserAdmin items={users} />
        </TableArea>
      </Box>
    </Sidebar>
  );
};

export default UsersAdminpage;
