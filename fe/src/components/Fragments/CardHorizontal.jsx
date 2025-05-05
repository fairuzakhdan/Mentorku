import React from 'react';
import { Box, Button, Card, HStack, Span, Flex, Icon } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import AvatarCard from '../Elements/Avatar';
import { FaStar } from 'react-icons/fa';
import { FaCheckCircle } from 'react-icons/fa';
import CircleBadge from '../Elements/Badge';

export const CardHorizontal = ({ children, image }) => (
  <Card.Root
    flexDirection="row"
    overflow="hidden"
    bg={'white'}
    color="black"
    border={'1px solid #ccc'}
    marginBlock={3}
  >
    <Flex padding="3" gap={3}>
      <AvatarCard image={image} />
      <Box>{children}</Box>
    </Flex>
  </Card.Root>
);

const Body = ({ role, name }) => {
  return (
    <Card.Body padding={0}>
      <Card.Title mb="2">
        {name}{' '}
        <Button color={'textGreen'} variant="plain" size="2xs" pointerEvents={'none'}>
          <FaStar />{' '}
          <Span fontSize="sm" fontWeight="semibold">
            5.0
          </Span>
        </Button>
      </Card.Title>
      <Card.Description>
        {role}{' '}
        <Icon color="blue.400" marginLeft={1}>
          <FaCheckCircle />
        </Icon>
      </Card.Description>
    </Card.Body>
  );
};

const Footer = ({ expertise }) => {
  return (
    <Card.Footer>
      <HStack mt="4">
        {expertise.map((expert, index) => (
          <CircleBadge key={index}>{expert}</CircleBadge>
        ))}
      </HStack>
    </Card.Footer>
  );
};

CardHorizontal.Body = Body;
CardHorizontal.Footer = Footer;

CardHorizontal.propTypes = {
  children: PropTypes.node,
};

Body.propTypes = {
  role: PropTypes.string,
  name: PropTypes.string,
};

Footer.propTypes = {
  expertise: PropTypes.arrayOf(PropTypes.string),
};
export default CardHorizontal;
