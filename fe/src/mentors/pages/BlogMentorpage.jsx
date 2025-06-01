import Sidebar from '../../shared/components/Sidebar';
import { Box, Text, Button, Group, Flex } from '@chakra-ui/react';
import TableArea from '../../shared/components/Table';
import { useEffect, useState } from 'react';
import AddButton from '../../shared/components/AddButon';
import TableBodyBlogs from '../components/TableBody/TableBodyBlogs';
import { itemBlog } from '../utils/mentorrole';

const BlogMentorpage = () => {
  const [blogs, setBlogs] = useState([]);
  const headers = ['Title', 'Subtitle', 'Category', 'Content', 'Image', 'Publisher'];

  useEffect(() => {
    setBlogs(itemBlog);
  }, []);
  return (
    <Sidebar type={'mentor'}>
      <Box color={'textBlue'}>
        <Flex justifyContent="space-between" alignItems={'center'} mb={1}>
          <Text fontSize={'xl'}>Blogs</Text>
          <AddButton label={'Add Blog'} toLink={'/blogs/add'} />
        </Flex>
        <TableArea headers={headers}>
          <TableBodyBlogs items={blogs} />
        </TableArea>
      </Box>
    </Sidebar>
  );
};

export default BlogMentorpage;
