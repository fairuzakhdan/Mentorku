import React from 'react';
import { Link } from 'react-router';
import PropTypes from 'prop-types';
import { Image } from '@chakra-ui/react';

const Logo = ({ navigate }) => {
  return (
    <Link to={navigate} outline={'none'}>
      <Image src="src\assets\images\4k-logo-removebg-preview.png" width={170} />
    </Link>
  );
};
Logo.propTypes = {
  navigate: PropTypes.string,
};
export default Logo;
