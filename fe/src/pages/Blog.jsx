import { Box, GridItem, Grid, Text, Flex, Button, Stack, Span } from '@chakra-ui/react';
import Layouts from '../components/Layouts/Layouts';
import TabsLink from '../components/Fragments/Tabs';
import CardBox from '../components/Fragments/CardBox';
import React from 'react';
import { useState, useEffect } from 'react';
import { data } from '../utils/blogs';
import { Link } from 'react-router';

const ContentBlog = ({ image, createdAt, title, category, id }) => {
  return (
    <Link to={`/blog/${id}`}>
      <CardBox p={10} width={285} height={330} border="1px solid gray">
        <CardBox.Image image={image} height={200} width={300} />
        <Flex alignItems={'center'} justifyContent={'center'}>
          <CardBox.Body title={category} color="textGreen" />
          <Span fontSize={'sm'} pr={7} color="gray">
            {createdAt}
          </Span>
        </Flex>
        <CardBox.Header name={`${title.substring(0, 45)}...`} color="textBlue" />
      </CardBox>
    </Link>
  );
};

const Blogpage = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    setBlogs(data);
  }, []);
  return (
    <Layouts>
      <Box mt={3}>
        <TabsLink
          tabs={[
            {
              label: 'All',
              value: 'all',
              content: (
                <Flex gap={5} flexWrap={'wrap'} justifyContent={'space-between'} mt={5}>
                  {blogs.map((blog, index) => (
                    <ContentBlog
                      id={blog.id}
                      key={index}
                      title={blog.title}
                      createdAt={blog.createdAt}
                      category={blog.category}
                      image={blog.image}
                    />
                  ))}
                </Flex>
              ),
            },
            {
              label: 'Website Development',
              value: 'web',
              content: (
                <Flex gap={5} flexWrap={'wrap'} justifyContent={'space-between'} mt={5}>
                  {blogs
                    .filter((blog) => blog.category === 'Web Dev')
                    .map((blog, index) => (
                      <ContentBlog
                        id={blog.id}
                        key={index}
                        title={blog.title}
                        createdAt={blog.createdAt}
                        category={blog.category}
                        image={blog.image}
                      />
                    ))}
                </Flex>
              ),
            },
            {
              label: 'Mobile Development',
              value: 'mobile',
              content: (
                <Flex gap={5} flexWrap={'wrap'} justifyContent={'space-between'} mt={5}>
                  {blogs
                    .filter((blog) => blog.category === 'Mobile Dev')
                    .map((blog, index) => (
                      <ContentBlog
                        id={blog.id}
                        key={index}
                        title={blog.title}
                        createdAt={blog.createdAt}
                        category={blog.category}
                        image={blog.image}
                      />
                    ))}
                </Flex>
              ),
            },
            {
              label: 'Tips and Trick',
              value: 'tips',
              content: (
                <Flex gap={5} flexWrap={'wrap'} justifyContent={'space-between'} mt={5}>
                  {blogs
                    .filter((blog) => blog.category === 'Tips & Trick')
                    .map((blog, index) => (
                      <ContentBlog
                        key={index}
                        title={blog.title}
                        createdAt={blog.createdAt}
                        category={blog.category}
                        image={blog.image}
                      />
                    ))}
                </Flex>
              ),
            },
          ]}
        />
      </Box>
    </Layouts>
  );
};
export default Blogpage;
