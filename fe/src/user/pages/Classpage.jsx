import Navigation from '../../components/Layouts/Navigation';
import {
  Box,
  Grid,
  GridItem,
  Image,
  Flex,
  Text,
  Group,
  Button,
  Stack,
  Span,
} from '@chakra-ui/react';
import CardHorizontal from '../../components/Fragments/CardHorizontal';
import { useEffect, useState } from 'react';
import { Link } from '@chakra-ui/react';
import { SiGooglemeet } from 'react-icons/si';
import { GiRead } from 'react-icons/gi';
import BreadcrumbLink from '../../components/Fragments/Breadcrumb';
import { VscFolderLibrary } from 'react-icons/vsc';
import { PiBooksBold } from 'react-icons/pi';
import { Link as LinkRouter } from 'react-router';
import { getClassForPaymentSuccess } from '../../utils/lessons';

const Classpage = () => {
  const [mentors, setMentors] = useState([]);
  const links = [
    {
      href: '/mentors/class',
      title: 'Kelas Saya',
      icon: VscFolderLibrary,
    },
  ];
  useEffect(() => {
    getClassForPaymentSuccess()
      .then(({ data }) => {
        setMentors(data);
      })
      .catch((err) => {
        console.log(err.error);
      });
  }, []);
  return (
    <Navigation type="sidebar">
      <Box marginLeft="10" marginRight="16" color="textBlue" mt={5}>
        <BreadcrumbLink links={links} color="textBlue" size="md" />
        <Box rounded={'lg'} mt={4}>
          {mentors.map((mentor, index) => (
            <Grid templateColumns="repeat(4, 1fr)" gap={2} my={4} key={index}>
              <GridItem colSpan={3}>
                <CardHorizontal
                  type="image"
                  image={mentor.mentorId.profilePicture.url}
                  shadow={'sm'}
                  height={120}
                >
                  <Text fontSize={'lg'} fontWeight={'bold'} color={'textGreen'}>
                    Mentor On Demand
                  </Text>
                  <CardHorizontal.Header name={mentor.mentorId.name} role={mentor.mentorId.role} />
                  <Flex columnGap={3} flexWrap="wrap">
                    {mentor.schedules.map((schedule, index) => (
                      <Group
                        key={index}
                        p={1}
                        mt={0}
                        fontSize={'md'}
                        border={'2px solid teal'}
                        backgroundColor={'textGreen'}
                        rounded={'md'}
                        color={'white'}
                      >
                        <Text>{schedule.days}</Text>
                        <Text>{schedule.time}</Text>
                      </Group>
                    ))}
                  </Flex>
                </CardHorizontal>
              </GridItem>
              <GridItem colSpan={1} rounded={'md'}>
                <Stack
                  bgColor={'white'}
                  p={1}
                  rounded={'md'}
                  shadow={'sm'}
                  border={'1px solid #ccc'}
                >
                  <Text
                    display={'flex'}
                    justifyContent={'space-between'}
                    py={2}
                    px={5}
                    alignItems={'center'}
                    href={mentor.linkMeet}
                    rounded={'md'}
                    backgroundColor="red.500"
                    w={'full'}
                    _hover={{ backgroundColor: 'red.600' }}
                    variant={'outline'}
                    fontSize={'md'}
                    color={'white'}
                  >
                    {mentor.date} <Span>End</Span>
                  </Text>
                  <Link
                    display={'flex'}
                    justifyContent={'space-between'}
                    href={mentor.linkMeet}
                    px={5}
                    py={2}
                    rounded={'md'}
                    backgroundColor="#FFC107"
                    w={'full'}
                    _hover={{ backgroundColor: 'yellow.500' }}
                    variant={'outline'}
                    fontSize={'md'}
                    color={'white'}
                  >
                    {'Join Meet'}
                    <SiGooglemeet size={20} />
                  </Link>
                  <LinkRouter to={`/mentors/class/${mentor.mentorId._id}`}>
                    <Text
                      display={'flex'}
                      px={5}
                      py={2}
                      rounded={'md'}
                      justifyContent={'space-between'}
                      color={'textBlue'}
                      variant={'outline'}
                      backgroundColor={'gray.300'}
                      fontSize={'md'}
                      _hover={{ backgroundColor: 'gray.200' }}
                    >
                      Koridor Kelas <GiRead color="teal" size={20} />
                    </Text>
                  </LinkRouter>
                </Stack>
              </GridItem>
            </Grid>
          ))}
        </Box>
      </Box>
    </Navigation>
  );
};

export default Classpage;
