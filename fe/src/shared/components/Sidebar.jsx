import { Box, Button, Text, Stack, Group, Image, Flex, Grid, GridItem } from '@chakra-ui/react';
import { Link } from 'react-router';
import { ImUsers } from 'react-icons/im';
import { useLocation } from 'react-router';
import { FaUserGraduate } from 'react-icons/fa';
import { CgTimelapse } from 'react-icons/cg';
import { SiGooglemeet } from 'react-icons/si';
import { FaBookBookmark } from 'react-icons/fa6';
import AvatarCard from '../../components/Elements/Avatar';
import { FaBlog } from 'react-icons/fa';
import SearchBar from '../../components/Fragments/SearchBar';
import { RiLogoutBoxLine } from 'react-icons/ri';
import Logo from '../../assets/images/4k-logo-removebg-preview.png';
const Sidebar = ({ children, type }) => {
  const user = {
    name: 'John Doe',
    image:
      'https://images.unsplash.com/photo-1636368086488-bb2c04738214?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODA3fHx0ZWFjaGVyfGVufDB8fDB8fHww',
  };
  const location = useLocation();
  const linkAdmin = [
    {
      title: 'Users',
      href: '/users',
      icon: ImUsers,
    },
    {
      title: 'Mentors',
      href: '/mentors',
      icon: FaUserGraduate,
    },
  ];
  const linkMentor = [
    {
      title: 'Mentees',
      href: '/mentees',
      icon: ImUsers,
    },
    {
      title: 'My Lessons',
      href: '/mylessons',
      icon: FaBookBookmark,
    },
    {
      title: 'Sessions',
      href: '/sessions',
      icon: CgTimelapse,
    },
    {
      title: 'Webinar',
      href: '/webinars',
      icon: SiGooglemeet,
    },
    {
      title: 'Blogs',
      href: '/blogs',
      icon: FaBlog,
    },
  ];
  return (
    <Grid templateColumns={'repeat(6, 1fr)'} height={'100vh'}>
      <GridItem colSpan={1} shadow={'lg'} backgroundColor={'textGreen'}>
        <Stack paddingBlock={3} alignItems="flex-start" paddingInline={6} position={'fixed'}>
          <Image
            src={Logo}
            width={180}
            objectFit={'cover'}
            rounded={'xl'}
            mt={2}
            backgroundColor={'gray.200'}
          />
          <Stack width={'100%'} rowGap={7} mt={7}>
            {type === 'admin' &&
              linkAdmin.map((activity) => {
                const isActive = location.pathname === activity.href;
                return (
                  <Link to={activity.href} key={activity.href} style={{ width: '100%' }}>
                    <Group
                      color={isActive ? 'teal' : 'white'}
                      columnGap={5}
                      width={'100%'}
                      p={2}
                      rounded={'lg'}
                      backgroundColor={isActive ? '#ccc' : 'transparent'}
                      _hover={{ color: 'teal', backgroundColor: '#ccc' }}
                    >
                      <activity.icon size={20} />
                      <Text>{activity.title}</Text>
                    </Group>
                  </Link>
                );
              })}
            {type === 'mentor' &&
              linkMentor.map((activity) => {
                const isActive = location.pathname === activity.href;
                return (
                  <Link to={activity.href} key={activity.href} style={{ width: '100%' }}>
                    <Group
                      color={isActive ? 'teal' : 'white'}
                      columnGap={5}
                      width={'100%'}
                      p={2}
                      rounded={'lg'}
                      backgroundColor={isActive ? '#ccc' : 'transparent'}
                      _hover={{ color: 'teal', backgroundColor: '#ccc' }}
                    >
                      <activity.icon size={20} />
                      <Text>{activity.title}</Text>
                    </Group>
                  </Link>
                );
              })}
            <Box position={'absolute'} bottom={type === 'mentor' ? -24 : '-72'} width={'100%'}>
              <Button backgroundColor={'gray.300'} width={'80%'} color={'teal'} fontSize={'md'}>
                <RiLogoutBoxLine />
                Logout
              </Button>
            </Box>
          </Stack>
        </Stack>
      </GridItem>
      <GridItem colSpan={5} backgroundColor={'gray.200'}>
        <Box backgroundColor={'gray.100'} shadow={'sm'}>
          <Flex mx={7} py={3} justifyContent={'space-between'}>
            <Box width={'35%'}>
              <SearchBar
                text={'Search'}
                color={'teal'}
                placeholder="Enter keyword"
                size="sm"
                padding="0"
              />
            </Box>
            <Group>
              <Text color={'gray.600'}>{user.name}</Text>
              <AvatarCard image={user.image} size="sm" rounded="full" />
            </Group>
          </Flex>
        </Box>
        <Box mx={7} my={4}>
          {children}
        </Box>
      </GridItem>
    </Grid>
  );
};

export default Sidebar;
