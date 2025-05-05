import { Container } from '@chakra-ui/react';
import React from 'react';
const Layouts = ({ children }) => {
  const maxw = {
    base: '100%',
    sm: '90%',
    md: '80%',
    lg: '85%',
    xl: '95%',
  };
  return (
    <Container color={'black'} maxW={maxw}>
      {children}
    </Container>
  );
};
export default Layouts;
