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
  return (
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
            <Button colorPalette="teal" variant="solid">
              <FaChalkboardTeacher /> Activity
            </Button>
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
      {type === 'sidebar' && (
        <Grid templateColumns={'repeat(6, 1fr)'} mt={5}>
          <GridItem colSpan={1}>
            <Stack shadow="md">
              <Link to="/mentors/activity">
                <Group color={'gray.700'}>
                  <IoHome />
                  <Text>Dashboard</Text>
                </Group>
              </Link>
            </Stack>
          </GridItem>
          <GridItem colSpan={5}>{children}</GridItem>
        </Grid>
      )}
    </Layouts>
  );
};
Navigation.propTypes = {
  type: PropTypes.string,
};
export default Navigation;
