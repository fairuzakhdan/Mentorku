import Layouts from '../components/Layouts/Layouts';
import { Stack, Text } from '@chakra-ui/react';
const Errorpage = () => (
  <Layouts>
    <Stack height={'100vh'} align={'center'} justify={'center'} mt="-24">
      <Text fontSize={'8xl'} color={'red'} fontWeight={'bold'}>
        404
      </Text>
      <Text fontSize={'3xl'} fontWeight={'semibold'}>
        Page Not Found
      </Text>
    </Stack>
  </Layouts>
);
export default Errorpage;
