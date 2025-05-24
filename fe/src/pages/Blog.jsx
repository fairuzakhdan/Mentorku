import { Box, GridItem, Grid, Text, Flex, Button, Stack, Span } from '@chakra-ui/react';
import Layouts from '../components/Layouts/Layouts';
import TabsLink from '../components/Fragments/Tabs';
import CardBox from '../components/Fragments/CardBox';

const ContentBlog = ({ image, createdAt, title, category }) => {
  return (
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
  );
};

const Blogpage = () => {
  const blogs = [
    {
      id: '1',
      title: 'Software Rekomendasi Pembuat Aplikasi Android Terbaik',
      category: 'Mobile Dev',
      createdAt: '01 Januari 2025',
      image:
        'https://images.unsplash.com/photo-1618388810903-840bb0d15ea5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTN8fHByb2dyYW1tZXJ8ZW58MHx8MHx8fDA%3D',
    },
    {
      id: '2',
      title: 'Cara Mudah Menjadi Web Developer Handal',
      category: 'Web Dev',
      createdAt: '04 May 2025',
      image:
        'https://images.unsplash.com/photo-1688380692117-63178554d76d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE2fHxwcm9ncmFtbWVyfGVufDB8fDB8fHww',
    },
    {
      id: '3',
      title: 'SQL : Pengertian, Sejarah dan Jenis Perintah SQL',
      category: 'Web Dev',
      createdAt: '05 May 2025',
      image:
        'https://images.unsplash.com/photo-1534665482403-a909d0d97c67?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHByb2dyYW1tZXJ8ZW58MHx8MHx8fDA%3D',
    },
    {
      id: '4',
      title: 'Perbedaan Antara Front End dan Back End Developer',
      category: 'Web Dev',
      createdAt: '05 May 2025',
      image:
        'https://plus.unsplash.com/premium_photo-1664301973841-fe2da7427d6c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTU0fHxwcm9ncmFtbWVyfGVufDB8fDB8fHww',
    },
    {
      id: '5',
      title: 'Tips Membuat Website Agar Banyak Pengunjung',
      category: 'Tips & Trick',
      createdAt: '05 May 2025',
      image:
        'https://plus.unsplash.com/premium_photo-1664301973841-fe2da7427d6c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTU0fHxwcm9ncmFtbWVyfGVufDB8fDB8fHww',
    },
  ];
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
