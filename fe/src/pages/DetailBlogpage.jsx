import { useParams } from 'react-router';
import Layouts from '../components/Layouts/Layouts';
import { Box, Grid, GridItem, Text, Image, Button } from '@chakra-ui/react';
const DetailBlogpage = () => {
  const { blogId } = useParams();
  return (
    <Layouts>
      <Box mt={3}>
        <Image></Image>
      </Box>
    </Layouts>
  );
};

export default DetailBlogpage;
