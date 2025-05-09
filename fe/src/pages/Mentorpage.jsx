import React from 'react';
import Layouts from '../components/Layouts/Layouts';
import { Box, Image, Flex, Text } from '@chakra-ui/react';
import SearchBar from '../components/Fragments/SearchBar';
const Mentorpage = () => {
  return (
    <Box backgroundColor="textGreen" display="flex">
      <Layouts>
        <Flex
          ml={10}
          flexDirection={'column'}
          justifyContent="center"
          alignItems="start"
          h={200}
          rowGap={7}
          color={'white'}
        >
          <Text fontSize={'3xl'} fontWeight={'semibold'}>
            Find Mentors by Topic
          </Text>
          <SearchBar text="find a mentor here" />
        </Flex>
      </Layouts>
      <Box position={'relative'} display={'flex'} justifyContent={'end'} w={'80%'}>
        <Image
          src="https://plus.unsplash.com/premium_photo-1661416814460-e768028561c2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dHlwaW5nJTIwbGFwdG9wfGVufDB8fDB8fHww"
          height={230}
          width="full"
        />
        <Box
          bgGradient="to-r"
          gradientFrom="#188474"
          gradientTo="transparent"
          position={'absolute'}
          w={'50%'}
          top={0}
          right={0}
          bottom={0}
          left={0}
          zIndex={1}
        />
      </Box>
    </Box>
  );
};
export default Mentorpage;
