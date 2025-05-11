import { Badge } from '@chakra-ui/react';
import React from 'react';
import PropTypes from 'prop-types';
const CircleBadge = ({ children, fontSize = 'xs' }) => {
  return (
    <Badge
      backgroundColor="#edebe8"
      variant="subtle"
      color="#7d7c7c"
      rounded="2xl"
      paddingInline="2"
      fontSize={fontSize}
    >
      {children}
    </Badge>
  );
};

CircleBadge.propTypes = {
  children: PropTypes.node,
  fontSize: PropTypes.string,
};
export default CircleBadge;
