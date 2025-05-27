import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import Sidebar from '../../shared/components/Sidebar';
const UsersAdminpage = () => {
  return (
    <Sidebar type={'admin'}>
      <Text>Users</Text>
    </Sidebar>
  );
};

export default UsersAdminpage;
