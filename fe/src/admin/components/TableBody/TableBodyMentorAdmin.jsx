import { Group, Text, Table, Button, Flex, Link } from '@chakra-ui/react';
import { useNavigate } from 'react-router';
import AvatarCard from '../../../components/Elements/Avatar';
import { FaEdit } from 'react-icons/fa';
import { MdOutlineDeleteOutline } from 'react-icons/md';
const TableBodyMentorAdmin = ({ items }) => {
  const navigate = useNavigate();
  const toDetailById = (id) => {
    navigate(`/mentors/${id}`);
  };
  const hidePassword = (password) => {
    const hiddenPassword = password.replace(/./g, '*');
    return hiddenPassword;
  };
  return (
    <>
      {items.map((item, index) => (
        <Table.Row key={index} backgroundColor={'gray.200'}>
          <Table.Cell>{index + 1}</Table.Cell>
          <Table.Cell>{item.email}</Table.Cell>
          <Table.Cell>{item.name}</Table.Cell>
          <Table.Cell>{hidePassword(item.password)}</Table.Cell>
          <Table.Cell>{`${item.role.substring(0, 5)}...`}</Table.Cell>
          <Table.Cell>
            {item.expertise.map((exp, index) => (
              <Group key={index} columnGap={2}>
                <Text mr={1}>{`${exp.substring(0, 3)}`}</Text>
              </Group>
            ))}
          </Table.Cell>
          <Table.Cell>{item.price}</Table.Cell>
          <Table.Cell>
            <Link href={item.cvResume} color={'blue'}>
              View CV/Res...
            </Link>
          </Table.Cell>
          <Table.Cell>{`${item.summary.substring(0, 10)}`}</Table.Cell>
          <Table.Cell>
            <AvatarCard image={item.image} rounded="full" size="xs" />
          </Table.Cell>
          <Table.Cell textAlign={'center'} p={0}>
            <Button
              p={0}
              backgroundColor={'transparent'}
              color={'textGreen'}
              _hover={{ color: 'gray.800' }}
              onClick={() => toDetailById(item.id)}
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
export default TableBodyMentorAdmin;
