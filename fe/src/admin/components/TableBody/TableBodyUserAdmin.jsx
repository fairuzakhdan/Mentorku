import { Box, Table, Button } from '@chakra-ui/react';
import { MdOutlineDeleteOutline } from 'react-icons/md';
import { FaEdit } from 'react-icons/fa';
import AvatarCard from '../../../components/Elements/Avatar';
import { useNavigate } from 'react-router';
const TableBodyUserAdmin = ({ items, onDeleteById }) => {
  const navigate = useNavigate();
  const toDetailById = (id) => {
    navigate(`/users/${id}`);
  };
  // const hidePassword = (password) => {
  //   const hiddenPassword = password.replace(/./g, '*');
  //   return hiddenPassword;
  // };
  return (
    <>
      {items.map((item, index) => (
        <Table.Row key={index} backgroundColor={'gray.200'}>
          <Table.Cell>{index + 1}</Table.Cell>
          <Table.Cell>{item.email}</Table.Cell>
          <Table.Cell>{item.password.substring(0, 20)}</Table.Cell>
          <Table.Cell>{item.fullName}</Table.Cell>
          <Table.Cell>{item.telephone}</Table.Cell>
          <Table.Cell>{item.institution}</Table.Cell>
          <Table.Cell>
            <AvatarCard image={item.profilePicture.url} rounded="full" size="xs" />
          </Table.Cell>
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

export default TableBodyUserAdmin;
