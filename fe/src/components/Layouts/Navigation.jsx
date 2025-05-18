import React from 'react';
import {
  Box,
  Button,
  Container,
  HStack,
  Text,
  Stack,
  Group,
  Flex,
  Grid,
  GridItem,
} from '@chakra-ui/react';
import { BiLogIn } from 'react-icons/bi';
import { FaChalkboardTeacher } from 'react-icons/fa';
import Logo from '../Elements/Logo';
import CatalogMenu from '../Elements/KatalogMenu';
import Layouts from '../Layouts/Layouts';
import { Link } from 'react-router';
import { IoHome } from 'react-icons/io5';
import PropTypes from 'prop-types';
import { GrBook } from 'react-icons/gr';
import { FaMoneyCheck } from 'react-icons/fa';
import { SiGoogletasks } from 'react-icons/si';
import { SiGooglemeet } from 'react-icons/si';
const Navigation = ({ type, children }) => {
  const links = [
    {
      title: 'Benefits',
      href: '/#benefits',
    },
    {
      title: 'Testimonials',
      href: '/#testimonials',
    },
    {
      title: 'Top Mentor',
      href: '/#topmentor',
    },
  ];
  const activitys = [
    {
      title: 'Dashboard',
      href: '/mentors/activity',
      icon: IoHome,
    },
    {
      title: 'Kelas Saya',
      href: '/mentors/class',
      icon: GrBook,
    },
    {
      title: 'Challenge',
      href: '/mentors/challenge',
      icon: SiGoogletasks,
    },
    {
      title: 'Transaction',
      href: '/mentors/transaction',
      icon: FaMoneyCheck,
    },
    {
      title: 'Webinar',
      href: '/mentors/webinar',
      icon: SiGooglemeet,
    },
  ];
  return (
    <>
      <Layouts>
        {type === 'navbar' && (
          <Box display="flex" justifyContent={'space-between'} alignItems={'center'}>
            <Box display="flex" alignItems={'center'} columnGap={5}>
              <Logo navigate="/" />
              <CatalogMenu links={links} />
              <Link
                to="/mentors"
                size="sm"
                variant="solid"
                outline="none"
                color="black"
                fontSize="md"
              >
                Mentor On Demand
              </Link>
              <Link
                to="/service"
                size="sm"
                variant="solid"
                outline="none"
                color="black"
                fontSize="md"
              >
                Service
              </Link>
              <Link to="/blog" size="sm" variant="solid" outline="none" color="black" fontSize="md">
                Blog
              </Link>
              <Link size="sm" variant="solid" outline="none" color="black" fontSize="md">
                Join Us
              </Link>
            </Box>
            <HStack>
              <Link to="/mentors/activity">
                <Button
                  display="flex"
                  alignItems={'center'}
                  columnGap={2}
                  colorPalette="teal"
                  variant="solid"
                  border="1px solid teal"
                >
                  <FaChalkboardTeacher /> Activity
                </Button>
              </Link>
              <Button
                variant="solid"
                color={'teal'}
                outline="1px solid teal"
                _hover={{ bg: 'gray.500', color: 'white' }}
              >
                <BiLogIn /> Login
              </Button>
            </HStack>
          </Box>
        )}
      </Layouts>
      {type === 'sidebar' && (
        <Grid templateColumns={'repeat(6, 1fr)'}>
          <GridItem colSpan={1}>
            <Stack
              borderRight={'1px solid #ccc'}
              borderBottom={'1px solid #ccc'}
              paddingLeft={5}
              paddingBlock={5}
              alignItems="flex-start"
              rowGap={7}
            >
              {activitys.map((activity) => (
                <Link to={activity.href} key={activity.href} style={{ width: '100%' }}>
                  <Group
                    color={'gray.600'}
                    columnGap={3}
                    width={'90%'}
                    p={2}
                    _hover={{ color: 'teal', backgroundColor: '#ccc', rounded: 'md' }}
                  >
                    <activity.icon size={20} />
                    <Text>{activity.title}</Text>
                  </Group>
                </Link>
              ))}
            </Stack>
          </GridItem>
          <GridItem colSpan={5}>{children}</GridItem>
        </Grid>
      )}
    </>
  );
};
Navigation.propTypes = {
  type: PropTypes.string,
};
export default Navigation;
