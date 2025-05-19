import React from 'react';
import Navigation from '../components/Layouts/Navigation';
import { Text, Grid, GridItem, Box, Flex, Group, Span, Stack } from '@chakra-ui/react';
import Layouts from '../components/Layouts/Layouts';

const Activitypage = () => {
  return (
    <Navigation type="sidebar">
      <Box marginLeft="10" marginRight="16">
        <Flex mt={5} color={'white'} columnGap="16" justifyContent={'space-between'}>
          <Group
            backgroundColor={'textGreen'}
            w={200}
            h={75}
            justifyContent={'space-between'}
            px={5}
            borderRadius="lg"
          >
            <Text fontSize={'2xl'}>Mentor</Text>
            <Text fontSize={'5xl'} fontWeight={'bold'}>
              1
            </Text>
          </Group>
          <Group
            backgroundColor={'gray.500'}
            w={200}
            h={75}
            justifyContent={'space-between'}
            px={5}
            borderRadius="lg"
          >
            <Text fontSize={'2xl'} fontweight={'bold'}>
              Kelas
            </Text>
            <Text fontSize={'5xl'} fontWeight={'bold'}>
              1
            </Text>
          </Group>
          <Group
            backgroundColor={'textGreen'}
            w={200}
            h={75}
            justifyContent={'space-between'}
            px={5}
            borderRadius="lg"
          >
            <Text fontSize={'2xl'}>Challenge</Text>
            <Text fontSize={'5xl'} fontWeight={'bold'}>
              1
            </Text>
          </Group>
          <Group
            backgroundColor={'gray.500'}
            w={200}
            h={75}
            justifyContent={'space-between'}
            px={5}
            borderRadius="lg"
          >
            <Text fontSize={'2xl'} fontweight={'bold'}>
              Webinar
            </Text>
            <Text fontSize={'5xl'} fontWeight={'bold'}>
              -
            </Text>
          </Group>
        </Flex>
        <Box backgroundColor={'textGreen'} p={5} mt={7} rounded={'lg'}>
          <Text fontSize={'2xl'}>Hallo, Fairuz Akhdan !</Text>
          <Text fontSize={'xl'} mt={3}>
            Mulai Belajar lagi, Kumpulkan SkillPoin dan Skillbadge dari Mentorku
          </Text>
          <Flex rounded={'lg'} backgroundColor={'white'} color={'gray.600'} p={5} mt={5}>
            <Stack rowGap={3}>
              <Text fontSize={'lg'}>Total SkillPoin</Text>
              <Text fontSize={'md'}>
                <Span fontSize={'3xl'}>75</Span> SkillPoin
              </Text>
            </Stack>
          </Flex>
        </Box>
      </Box>
    </Navigation>
  );
};

export default Activitypage;
