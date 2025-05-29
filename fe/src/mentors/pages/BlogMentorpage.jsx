import Sidebar from '../../shared/components/Sidebar';
import { Box, Text, Button, Group, Flex } from '@chakra-ui/react';
import TableArea from '../../components/Fragments/Table';
import { useEffect, useState } from 'react';
import AddButton from '../components/AddButon';

const BlogMentorpage = () => {
  return (
    <Sidebar type={'mentor'}>
      <Box color={'textBlue'}>
        <Flex justifyContent="space-between" alignItems={'center'} mb={1}>
          <Text fontSize={'xl'}>Blogs</Text>
          <AddButton label={'Add Blog'} />
        </Flex>
        <TableArea />
      </Box>
    </Sidebar>
  );
};

export default BlogMentorpage;
