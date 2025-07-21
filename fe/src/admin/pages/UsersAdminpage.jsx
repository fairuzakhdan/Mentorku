import React from 'react';
import { Box, Text, Flex } from '@chakra-ui/react';
import Sidebar from '../../shared/components/Sidebar';
import TableArea from '../../shared/components/Table';
import TableBodyUserAdmin from '../components/TableBody/TableBodyUserAdmin';
import { useState, useEffect } from 'react';
import AddButton from '../../shared/components/AddButon';
import { getAllUser } from '../../utils/users';
import { deleteUserById } from '../../utils/users';
const UsersAdminpage = () => {
  const [users, setUsers] = useState([]);
  const header = ['Email', 'Password', 'Full Name', 'telephone', 'Institution', 'Image'];
  useEffect(() => {
    getAllUser()
      .then(({ data }) => {
        setUsers(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  const deleteUserHandler = (_id) => {
    deleteUserById(_id)
      .then(({ error, message }) => {
        if (error) {
          alert(message);
        } else {
          alert(message);
          const user = users.filter((user) => user._id !== _id);
          setUsers(user);
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  return (
    <Sidebar type={'admin'}>
      <Box color={'textBlue'}>
        <Flex alignItems={'center'} justifyContent={'space-between'}>
          <Text fontSize={'xl'}>Users</Text>
          <AddButton toLink={'/users/add'} label={'Add User'} />
        </Flex>
        <TableArea headers={header}>
          <TableBodyUserAdmin items={users} onDeleteById={deleteUserHandler} />
        </TableArea>
      </Box>
    </Sidebar>
  );
};

export default UsersAdminpage;
