import React from 'react';
import { Box, Button, Card, HStack, Span, Flex, Icon } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import AvatarCard from '../Elements/Avatar';
import CircleBadge from '../Elements/Badge';

export const CardHorizontal = ({ children, image, gapCard }) => (
  <Card.Root
    flexDirection="row"
    overflow="hidden"
    bg={'white'}
    color="black"
    border={'1px solid #ccc'}
    marginBlock={gapCard}
  >
    <Flex padding="3" gap={3}>
      <AvatarCard image={image} />
      <Box>{children}</Box>
    </Flex>
  </Card.Root>
);

const Header = ({ title, name, role }) => {
  return (
    <Card.Header padding={0}>
      <Card.Title fontSize="md">{name} </Card.Title>
      <Card.Description>{title || role}</Card.Description>
    </Card.Header>
  );
};

const Body = ({ description, fontStyle }) => {
  return (
    <Card.Body paddingLeft={0}>
      <Card.Description color={'textBlue'} fontStyle={fontStyle}>
        {description}{' '}
      </Card.Description>
    </Card.Body>
  );
};

const Footer = ({ expertise }) => {
  return (
    <Card.Footer paddingLeft={0}>
      <HStack mt="4">
        {expertise.map((expert, index) => (
          <CircleBadge key={index}>{expert}</CircleBadge>
        ))}
      </HStack>
    </Card.Footer>
  );
};
CardHorizontal.Header = Header;
CardHorizontal.Body = Body;
CardHorizontal.Footer = Footer;

CardHorizontal.propTypes = {
  children: PropTypes.node,
};

Header.propTypes = {
  title: PropTypes.string,
  name: PropTypes.string,
  role: PropTypes.string,
};

Body.propTypes = {
  description: PropTypes.string,
};

Footer.propTypes = {
  expertise: PropTypes.arrayOf(PropTypes.string),
};
export default CardHorizontal;
