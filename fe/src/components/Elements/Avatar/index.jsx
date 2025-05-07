import React from 'react';
import { Avatar } from '@chakra-ui/react';
import PropTypes from 'prop-types';
const AvatarCard = ({ image }) => {
  return (
    <Avatar.Root shape="rounded" size="xl" backgroundColor="transparent" border="none">
      <Avatar.Fallback name="Segun Adebayo" />
      <Avatar.Image src={image} border="none" />
    </Avatar.Root>
  );
};
AvatarCard.propTypes = {
  image: PropTypes.string.isRequired,
};
export default AvatarCard;
