import { Table, Button, Flex, Group, Text } from '@chakra-ui/react';
import { FaEdit } from 'react-icons/fa';
import { MdOutlineDeleteOutline } from 'react-icons/md';
import AvatarCard from '../../../components/Elements/Avatar';
import { useNavigate } from 'react-router';

const TableBodyBlogs = ({ items, onDeleteById }) => {
  const navigate = useNavigate();
  const toDetailById = (blogId) => {
    navigate(`/blogs/${blogId}`);
  };
  return (
    <>
      {items.map((item, index) => (
        <Table.Row key={index} backgroundColor={'gray.200'}>
          <Table.Cell>{index + 1}</Table.Cell>
          <Table.Cell>{`${item.title.substring(0, 20)}...`}</Table.Cell>
          <Table.Cell>{`${item.subtitle.substring(0, 20)}...`}</Table.Cell>
          <Table.Cell>{item.category}</Table.Cell>
          <Table.Cell>{`${item.content.substring(0, 10)}...`}</Table.Cell>
          <Table.Cell>
            {' '}
            <AvatarCard image={item.image} size="2xs" />
          </Table.Cell>
          <Table.Cell>{item.createdAt}</Table.Cell>
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

export default TableBodyBlogs;
