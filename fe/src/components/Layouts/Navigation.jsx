import React from 'react';
import { Box, Button, Container, HStack } from '@chakra-ui/react';
import { BiLogIn } from 'react-icons/bi';
import { FaChalkboardTeacher } from 'react-icons/fa';
import Logo from '../Elements/Logo';
import CatalogMenu from '../Elements/KatalogMenu';

const Navigation = () => {
  const links = [
    {
      title: 'Naruto',
      href: '#',
    },
    {
      title: 'One Piece',
      href: '#',
    },
    {
      title: 'Attack on Titan',
      href: '#',
    },
  ];
  return (
    <Container borderBottom={'1px solid rgb(204, 201, 201)'} position={'sticky'} top={0}>
      <Box display="flex" justifyContent={'space-between'} alignItems={'center'} marginInline={7}>
        <Box display="flex" alignItems={'center'}>
          <Logo navigate="/" />

          <CatalogMenu links={links} />
          <Button size="sm" variant="solid" outline="none" color="black" fontSize="md">
            Mentor On Demand
          </Button>
          <Button size="sm" variant="solid" outline="none" color="black" fontSize="md">
            Service
          </Button>
          <Button size="sm" variant="solid" outline="none" color="black" fontSize="md">
            Blog
          </Button>
          <Button size="sm" variant="solid" outline="none" color="black" fontSize="md">
            Join Us
          </Button>
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
    </Container>
  );
};
export default Navigation;
