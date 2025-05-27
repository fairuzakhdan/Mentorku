import {
  Box,
  Button,
  Container,
  HStack,
  Text,
  Stack,
  Group,
  Image,
  Flex,
  Grid,
  GridItem,
} from '@chakra-ui/react';
import { Link } from 'react-router';
import { IoHome } from 'react-icons/io5';
import { GrBook } from 'react-icons/gr';
import { useLocation } from 'react-router';
const Sidebar = ({ children, type }) => {
  const location = useLocation();
  const activitys = [
    {
      title: 'Users',
      href: '/users',
      icon: IoHome,
    },
    {
      title: 'Mentors',
      href: '/mentors',
      icon: GrBook,
    },
  ];
  return (
    <Grid templateColumns={'repeat(6, 1fr)'} height={'100vh'}>
      <GridItem colSpan={1} borderRight={'1px solid #ccc'}>
        <Stack paddingBlock={3} alignItems="flex-start" rowGap={7}>
          <Stack
            color={'gray.700'}
            alignItems={'center'}
            m="auto"
            rowGap={5}
            backgroundColor={'white'}
          >
            <Image
              src="src\assets\images\4k-logo-removebg-preview.png"
              width={180}
              objectFit={'cover'}
              rounded={'full'}
            />
            {type === 'admin' &&
              activitys.map((activity) => {
                const isActive = location.pathname === activity.href;
                return (
                  <Link to={activity.href} key={activity.href} style={{ width: '100%' }}>
                    <Group
                      color={isActive ? 'teal' : 'gray.600'}
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
          </Stack>
        </Stack>
      </GridItem>
      <GridItem colSpan={5} backgroundColor={'gray.200'}>
        {children}
      </GridItem>
    </Grid>
  );
};

export default Sidebar;
