import { useParams } from 'react-router';
import Layouts from '../components/Layouts/Layouts';
import { Box, Grid, GridItem, Text, Image, Button, Stack, Group, Flex } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { data } from '../utils/blogs';
import AvatarCard from '../components/Elements/Avatar';
const DetailBlogpage = () => {
  const [blog, setBlog] = useState({});
  const { blogId } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [category, setCategory] = useState([]);
  useEffect(() => {
    setIsLoading(true);
    const getBlog = data.find((blog) => blog.id === blogId);
    const mentor = data.filter((blog) => blog.category === getBlog.category);
    setBlog(getBlog);
    setCategory(mentor);
    setIsLoading(false);
  }, [blogId]);
  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <Layouts>
      <Box mt={5}>
        <Grid templateColumns={'repeat(7, 1fr)'} columnGap={5}>
          <GridItem colSpan={5}>
            <Stack>
              <Text fontSize={'3xl'} fontWeight={'semibold'} color={'gray.600'}>
                {blog.title}
              </Text>
              <Flex justifyContent={'space-between'} alignItems={'center'}>
                <Group>
                  <Text fontSize={'xl'} fontWeight={'semibold'} color={'gray.600'}>
                    Categories
                  </Text>
                  <Text fontSize={'sm'} color={'gray.500'}>
                    {blog.category}
                  </Text>
                </Group>
                <Text textAlign={'end'} fontSize={'sm'} color={'gray.500'} p={0}>
                  Created On Date: {blog.createdAt}
                </Text>
              </Flex>
              <Image
                src={blog.image}
                alt="card-mentor"
                width={'full'}
                height={370}
                rounded={'xl'}
                objectPosition={'center'}
                objectFit="cover"
              />
              <Text fontSize={'xl'} fontWeight={'semibold'}>
                {blog.subTitle}
              </Text>
              <Text textAlign={'justify'} fontSize={'sm'}>
                {blog.content}
              </Text>
              <Group mt={5} color={'gray.500'}>
                <Text>Publisher :</Text>
                <Text>{blog.user.name}</Text>
                <AvatarCard image={blog.user.image} size="xs" />
              </Group>
            </Stack>
          </GridItem>
          <GridItem colSpan={2}>
            <Stack>
              <Text fontSize={'xl'} fontWeight={'semibold'} color={'gray.600'}>
                Related Post
              </Text>
              {category.map((blog) => (
                <Group
                  key={blog.id}
                  alignItems={'start'}
                  border={'1px solid #ccc'}
                  p={2}
                  rounded={'md'}
                >
                  <Image
                    src={blog.image}
                    alt="card-mentor"
                    width={'full'}
                    height={120}
                    rounded={'xl'}
                    objectPosition={'center'}
                    objectFit="cover"
                  />
                  <Box>
                    <Text fontSize={'sm'} color={'gray.700'} fontWeight={'semibold'}>
                      {blog.title}
                    </Text>
                    <Text fontSize={'xs'} color={'gray.500'}>
                      {blog.createdAt}
                    </Text>
                  </Box>
                </Group>
              ))}
            </Stack>
          </GridItem>
        </Grid>
      </Box>
    </Layouts>
  );
};

export default DetailBlogpage;
