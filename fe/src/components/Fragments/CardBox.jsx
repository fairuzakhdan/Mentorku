import React from 'react';
import { Button, Card, Flex, Image, Text } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import { RiArrowRightLine } from 'react-icons/ri';

const CardBox = ({
  children,
  hover = {
    transform: 'scale(1.02)',
    transition: 'all 0.3s ease-in-out',
    opacity: 0.9,
  },
  backgroundColor = '#fff',
}) => {
  return (
    <Card.Root
      width="full"
      backgroundColor={backgroundColor}
      color="textBlue"
      border="none"
      rounded={'xl'}
      shadow={'md'}
      transition={'all 0.3s ease-in-out'}
      _hover={hover}
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
const Body = ({ title, summary, price, color = 'white', fontSize = 'md' }) => {
  return (
    <Card.Body pt="3">
      <Card.Title mt="2">{title}</Card.Title>
      <Card.Title color={color} fontSize={fontSize} pb="4">
        {typeof price === 'number'
          ? `${price.toLocaleString('id-ID', {
              style: 'currency',
              currency: 'IDR',
              minimumFractionDigits: 0,
            })}/Month`
          : null}
      </Card.Title>
      <Card.Description>{summary}</Card.Description>
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
  summary: PropTypes.string,
  price: PropTypes.number,
  color: PropTypes.string,
  fontSize: PropTypes.string,
};

Footer.propTypes = {
  price: PropTypes.string,
  time: PropTypes.string,
};
CardBox.propTypes = {
  children: PropTypes.node,
  hover: PropTypes.object,
  backgroundColor: PropTypes.string,
};
CardBox.Image = CardImage;
CardBox.Header = Header;
CardBox.Body = Body;
CardBox.Footer = Footer;

export default CardBox;
