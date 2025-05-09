import React from 'react';
import { Link } from 'react-router';
import PropTypes from 'prop-types';
import { Image } from '@chakra-ui/react';
import logo from '../../../assets/images/4k-logo-removebg-preview.png';

const Logo = ({ navigate }) => {
  return (
    <Link to={navigate} outline={'none'}>
      <Image src={logo} width={170} />
    </Link>
  );
};
Logo.propTypes = {
  navigate: PropTypes.string,
};
export default Logo;
