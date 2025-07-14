import { Container, Grid, GridItem, Flex, Box, Image, Text, Span } from '@chakra-ui/react';
import { Link } from 'react-router';
import { CloseButton } from '@chakra-ui/react';
const AuthLayouts = ({ children, type }) => {
  return (
    <Container
      color={'black'}
      maxW={'full'}
      height={'100vh'}
      display={'flex'}
      mt={-38}
      mb={-10}
      backgroundColor={'#ccc'}
    >
      <Flex h={'70vh'} w={'70%'} margin={'auto'} rounded={'xl'} shadow={'sm'} position={'relative'}>
        {/* <CloseButton
          position={'absolute'}
          right={-5}
          top={-5}
          backgroundColor={'red.500'}
          shadow={'sm'}
          _hover={{ backgroundColor: 'red.600' }}
        /> */}
        <Box flex={1} roundedLeft={'xl'} backgroundColor={'textGreen'}>
          {type === 'register' ? (
            <Image
              src="src\assets\images\vector-register.png"
              p={3}
              objectPosition={'bottom'}
              objectFit={'cover'}
            />
          ) : (
            <Image src="src\assets\images\vector2-login.png" />
          )}
        </Box>
        <Box flex={1} roundedRight={'xl'} backgroundColor={'white'} p={10}>
          {children}
          {type === 'register' ? (
            <Text fontSize={'sm'} mt={3}>
              Already have an account?{' '}
              <Link to={'/'}>
                <Span color={'textGreen'} fontWeight={'semibold'}>
                  Login
                </Span>
              </Link>
            </Text>
          ) : (
            <Text fontSize={'sm'} mt={3}>
              Dont have an account?{' '}
              <Link to={'/register'}>
                <Span color={'textGreen'} fontWeight={'semibold'}>
                  SignUp
                </Span>
              </Link>
            </Text>
          )}
        </Box>
      </Flex>
    </Container>
  );
};

export default AuthLayouts;
