import React from 'react';
import { Avatar, Button, Card, Flex } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import { RiArrowRightLine } from 'react-icons/ri';

const CardBox = ({ title, description, price, time }) => {
  return (
    <Card.Root width="full" backgroundColor={'#fff'} color="textBlue" border="none">
      <Card.Body gap="2">
        <Card.Title mt="2">{title}</Card.Title>
        <Card.Description>{description}</Card.Description>
      </Card.Body>
      <Card.Footer display="block">
        <Flex justifyContent="space-between" mb={4}>
          <Button variant="plain" fontWeight={'semibold'} color={'textBlue'}>
            Approx.{time}Minutes
          </Button>
          <Button fontWeight="bold" fontSize="2xl">
            ${price}
          </Button>
        </Flex>
        <Button colorPalette="teal" variant="solid">
          Explore <RiArrowRightLine />
        </Button>
      </Card.Footer>
    </Card.Root>
  );
};

CardBox.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.string,
  time: PropTypes.string,
};
export default CardBox;
