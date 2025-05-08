import React from 'react';
import { Button, Card, Flex, Image } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import { RiArrowRightLine } from 'react-icons/ri';

const CardBox = ({ children }) => {
  return (
    <Card.Root
      width="full"
      backgroundColor={'#fff'}
      color="textBlue"
      border="none"
      rounded={'xl'}
      shadow={'md'}
      transition={'all 0.3s ease-in-out'}
      _hover={{
        transform: 'scale(1.02)',
        transition: 'all 0.3s ease-in-out',
        opacity: 0.9,
      }}
    >
      {children}
    </Card.Root>
  );
};
const CardImage = ({ image }) => {
  return (
    <Image
      src={image}
      alt="card-mentor"
      width="full"
      height={350}
      objectFit="cover"
      objectPosition={'center'}
      rounded={'xl'}
    />
  );
};
const Header = ({ name, role }) => {
  return (
    <Card.Header color={'white'} width="64" ml={5} p={0} borderBottom={'1px solid #ccc'}>
      <Card.Title>{name}</Card.Title>
      <Card.Description color={'white'}>{role}</Card.Description>
    </Card.Header>
  );
};
const Body = ({ title, description, price }) => {
  return (
    <Card.Body pt="3">
      <Card.Title mt="2">{title}</Card.Title>
      <Card.Title color={'white'} fontSize={'md'}>
        {typeof price === 'number'
          ? price.toLocaleString('id-ID', {
              style: 'currency',
              currency: 'IDR',
              minimumFractionDigits: 0,
            })
          : null}
        /Session
      </Card.Title>
      <Card.Description>{description}</Card.Description>
    </Card.Body>
  );
};

const Footer = ({ price, time }) => {
  return (
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
  );
};

CardImage.propTypes = {
  image: PropTypes.string,
};
Header.propTypes = {
  name: PropTypes.string,
  role: PropTypes.string,
};

Body.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.number,
};

Footer.propTypes = {
  price: PropTypes.string,
  time: PropTypes.string,
};
CardBox.propTypes = {
  children: PropTypes.node,
};
CardBox.Image = CardImage;
CardBox.Header = Header;
CardBox.Body = Body;
CardBox.Footer = Footer;

export default CardBox;
