import React from 'react';
import Navigation from '../components/Layouts/Navigation';
import { Text, Grid, GridItem, Box, Flex, Group, Span, Stack } from '@chakra-ui/react';
import Layouts from '../components/Layouts/Layouts';
import { LuFileBadge2 } from 'react-icons/lu';
import { MdOutlineStar } from 'react-icons/md';

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
          <Flex
            rounded={'lg'}
            backgroundColor={'white'}
            color={'gray.600'}
            p={5}
            mt={5}
            justifyContent={'space-between'}
          >
            <Stack rowGap={3} flex={1} mx={5}>
              <Flex alignItems={'center'} justifyContent={'space-between'}>
                <Text fontSize={'lg'}>Total SkillPoin</Text>
                <MdOutlineStar size={25} color="#FFC107" />
              </Flex>
              <Text fontSize={'md'} borderTop={'1px solid gray'}>
                <Span fontSize={'3xl'} fontWeight={'bold'} color={'textGreen'}>
                  75
                </Span>{' '}
                SkillPoin
              </Text>
            </Stack>
            <Stack rowGap={3} flex={1} mx={5}>
              <Flex alignItems={'center'} justifyContent={'space-between'}>
                <Text fontSize={'lg'}>SkillBadge</Text>
                <LuFileBadge2 size={25} color="#FFC107" />
              </Flex>
              <Text fontSize={'md'} borderTop={'1px solid gray'}>
                <Span fontSize={'3xl'} fontWeight={'bold'} color={'textGreen'}>
                  1
                </Span>{' '}
                SkillBadge
              </Text>
            </Stack>
          </Flex>
        </Box>
      </Box>
    </Navigation>
  );
};

export default Activitypage;
