import { Container, Grid, GridItem, Flex, Box, Image } from '@chakra-ui/react';
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
        <Box colSpan={2} flex={1} roundedLeft={'xl'} backgroundColor={'textGreen'}>
          {type === 'register' ? (
            <Image src="src\assets\images\vector-register.png" p={3} />
          ) : (
            <Image src="src\assets\images\vector2-login.png" />
          )}
        </Box>
        <Box colSpan={2} flex={1} roundedRight={'xl'} backgroundColor={'white'}>
          {children}
        </Box>
      </Flex>
    </Container>
  );
};

export default AuthLayouts;
