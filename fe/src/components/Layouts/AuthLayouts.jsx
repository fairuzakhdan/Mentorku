import { Container, Grid, GridItem, Flex, Box, Image, Text, Span } from '@chakra-ui/react';
import { Link } from 'react-router';
const AuthLayouts = ({ children, type }) => {
  return (
    <Container
      color={'black'}
      maxW={'full'}
      height={'100vh'}
      display={'flex'}
      backgroundColor={'#ccc'}
    >
      <Flex h={'70vh'} w={'70%'} margin={'auto'} rounded={'xl'} shadow={'sm'}>
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
              <Link to={'/login'}>
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
