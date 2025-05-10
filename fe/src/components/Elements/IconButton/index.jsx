import React from 'react';
import { IconButton } from '@chakra-ui/react';
import PropTypes from 'prop-types';
const IconColor = ({ children, color = 'teal', cursor = 'pointer' }) => {
  return (
    <IconButton aria-label="Call support" rounded="full" colorPalette={color} cursor={cursor}>
      {children}
    </IconButton>
  );
};
IconColor.propTypes = {
  children: PropTypes.node,
  color: PropTypes.string,
  cursor: PropTypes.string,
};

export default IconColor;
