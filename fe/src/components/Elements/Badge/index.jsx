import { Badge } from '@chakra-ui/react';
import React from 'react';
import PropTypes from 'prop-types';
const CircleBadge = ({ children }) => {
  return (
    <Badge
      backgroundColor="#edebe8"
      variant="subtle"
      color="#7d7c7c"
      rounded="2xl"
      paddingInline="2"
    >
      {children}
    </Badge>
  );
};

CircleBadge.propTypes = {
  children: PropTypes.node,
};
export default CircleBadge;
