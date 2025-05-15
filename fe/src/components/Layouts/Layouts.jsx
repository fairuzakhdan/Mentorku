import React from 'react';
import { Container } from '@chakra-ui/react';
import PropTypes from 'prop-types';
const Layouts = ({ children, id }) => {
  const maxw = {
    base: '100%',
    sm: '90%',
    md: '80%',
    lg: '85%',
    xl: '95%',
  };
  return (
    <Container color={'black'} maxW={maxw} id={id}>
      {children}
    </Container>
  );
};

Layouts.propTypes = {
  children: PropTypes.node,
  id: PropTypes.string,
};
export default Layouts;
