import Sidebar from '../../shared/components/Sidebar';
import { Box, Flex } from '@chakra-ui/react';
import FormBlog from '../components/Forms/FormBlog';
import { itemBlog } from '../utils/mentorrole';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
const EditBlogMentorpage = () => {
  const { blogId } = useParams();
  const [blog, setBlog] = useState({});
  useEffect(() => {
    const blog = itemBlog.find((item) => item.id === blogId);
    setBlog(blog);
  }, [blogId]);
  return (
    <Sidebar type={'mentor'}>
      <FormBlog type="edit" initialData={blog} />
    </Sidebar>
  );
};

export default EditBlogMentorpage;
