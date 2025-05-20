import Navigation from '../components/Layouts/Navigation';
import { Box, Grid, GridItem, Image, Flex, Text, Group, Button, Stack } from '@chakra-ui/react';
import CardHorizontal from '../components/Fragments/CardHorizontal';
import { useEffect, useState } from 'react';
import { Link } from '@chakra-ui/react';
import { SiGooglemeet } from 'react-icons/si';
import { GiRead } from 'react-icons/gi';

const Classpage = () => {
  const [mentors, setMentors] = useState([]);

  const data = [
    {
      id: '1',
      name: 'John Doe',
      role: 'Frontend Developer',
      image:
        'https://images.unsplash.com/photo-1623366302587-b38b1ddaefd9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTF8fGVudGVwcmVuZXVyfGVufDB8fDB8fHww',
      linkMeet: 'https://meet.google.com/pre-ztbc-ohe',
      schedules: [
        { days: 'Senin', time: '08.00 - 10.00' },
        { days: 'Rabu', time: '20.00 - 10.00' },
      ],
    },
    {
      id: '1',
      name: 'John Doe',
      role: 'Frontend Developer',
      image:
        'https://images.unsplash.com/photo-1742119971773-57e0131095b0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjZ8fGVudGVwcmVuZXVyfGVufDB8fDB8fHww',
      linkMeet: 'https://meet.google.com/pre-ztbc-ohe',
      schedules: [
        { days: 'Senin', time: '08.00 - 10.00' },
        { days: 'Rabu', time: '20.00 - 10.00' },
        { days: 'Rabu', time: '20.00 - 10.00' },
      ],
    },
  ];
  useEffect(() => {
    setMentors(data);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Navigation type="sidebar">
      <Box
        marginLeft="10"
        marginRight="16"
        color="textBlue"
        mt={5}
        backgroundColor="textGreen"
        rounded={'lg'}
        py={1}
        px={4}
      >
        {mentors.map((mentor) => (
          <Grid templateColumns="repeat(4, 1fr)" gap={2} my={4}>
            <GridItem colSpan={3} key={mentor.id}>
              <CardHorizontal type="image" image={mentor.image} shadow={'sm'} height={120}>
                <CardHorizontal.Header name={mentor.name} role={mentor.role} />
                <Flex columnGap={3}>
                  {mentor.schedules.map((schedule, index) => (
                    <Group
                      key={index}
                      p={2}
                      mt={5}
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
              <Stack>
                <Link
                  display={'flex'}
                  justifyContent={'space-around'}
                  href={mentor.linkMeet}
                  p={2}
                  rounded={'md'}
                  backgroundColor="#FFC107"
                  w={'full'}
                  _hover={{ backgroundColor: 'yellow.500' }}
                  variant={'outline'}
                  fontSize={'lg'}
                  color={'gray.700'}
                >
                  {'Join Meet'}
                  <SiGooglemeet size={30} />
                </Link>
                <Link
                  display={'flex'}
                  p={2}
                  rounded={'md'}
                  justifyContent={'space-around'}
                  color={'textGreen'}
                  variant={'outline'}
                  backgroundColor={'white'}
                  fontSize={'lg'}
                  _hover={{ backgroundColor: 'gray.200' }}
                >
                  Koridor Kelas <GiRead color="teal" size={30} />
                </Link>
              </Stack>
            </GridItem>
          </Grid>
        ))}
      </Box>
    </Navigation>
  );
};

export default Classpage;
