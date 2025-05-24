import React from 'react';
import { Avatar } from '@chakra-ui/react';
import PropTypes from 'prop-types';
const AvatarCard = ({ image, size = 'xl', rounded = 'md' }) => {
  return (
    <Avatar.Root shape="rounded" size={size} backgroundColor="transparent" border="none">
      <Avatar.Fallback name="Segun Adebayo" />
      <Avatar.Image src={image} border="none" objectPosition={'top'} rounded={rounded} />
    </Avatar.Root>
  );
};
AvatarCard.propTypes = {
  image: PropTypes.string.isRequired,
};
export default AvatarCard;
