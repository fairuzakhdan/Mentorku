import React from 'react';
import Navigation from '../components/Layouts/Navigation';
import { Text, Grid, GridItem, Box, Flex, Group, Span, Stack, Image } from '@chakra-ui/react';
import Layouts from '../components/Layouts/Layouts';
import AvatarCard from '../components/Elements/Avatar';
import { LuFileBadge2 } from 'react-icons/lu';
import { MdOutlineStar } from 'react-icons/md';
import Progress from '../components/Fragments/ProgressCircle';

const Activitypage = () => {
  const value = 50;
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
        <Box backgroundColor={'textGreen'} p={5} mt={5} rounded={'lg'}>
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
        <Box color={'gray.600'} mt={3}>
          <Text fontSize={'lg'} mb={3}>
            Pemberitahuan
          </Text>
          <Flex border={'1px solid #ccc'} p={5} rounded={'lg'} columnGap="7" alignItems={'center'}>
            <Box>
              <Progress
                value={value}
                image={
                  'https://img.freepik.com/premium-vector/person-with-blue-shirt-that-says-name-person_1029948-7040.jpg?semt=ais_hybrid&w=740'
                }
              />
            </Box>
            <Stack rowGap={2}>
              {value === 100 ? (
                <Text fontWeight={'bold'}>Selamat, Profil Anda sudah lengkap!</Text>
              ) : (
                <Text fontWeight={'bold'}>Profil Anda belum lengkap</Text>
              )}
              <Text fontSize="sm">
                Kelengkapan profil kamu saat ini masih{' '}
                <Span color={'textGreen'} fontWeight={'bold'}>
                  {value}
                </Span>
                %. Lengkapi Profilmu sekarang untuk mendapatkan SkillPoin dari{' '}
                <Span color={'textGreen'} fontWeight={'bold'}>
                  Mentorku
                </Span>
                .
              </Text>
            </Stack>
          </Flex>
        </Box>
      </Box>
    </Navigation>
  );
};

export default Activitypage;
