import React from 'react';
import { IconButton } from '@chakra-ui/react';
import PropTypes from 'prop-types';
const IconColor = ({ children }) => {
  return (
    <IconButton aria-label="Call support" rounded="full" colorPalette={'teal'}>
      {children}
    </IconButton>
  );
};
IconColor.propTypes = {
  children: PropTypes.node,
};

export default IconColor;
