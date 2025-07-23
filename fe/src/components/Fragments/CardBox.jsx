import React from 'react';
import { Button, Card, Flex, Image, Text } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import { RiArrowRightLine } from 'react-icons/ri';

const CardBox = ({
  height = 'full',
  width = 'full',
  children,
  hover = {
    transform: 'scale(1.02)',
    transition: 'all 0.3s ease-in-out',
    opacity: 0.9,
    backgroundColor: 'white',
  },
  backgroundColor = '#fff',
  shadow = 'md',
  border = 'none',
  borderLeft = 'none',
  color = 'textBlue',
}) => {
  return (
    <Card.Root
      width={width}
      border={border}
      borderLeft={borderLeft}
      height={height}
      backgroundColor={backgroundColor}
      color={color}
      rounded={'xl'}
      shadow={shadow}
      transition={'all 0.3s ease-in-out'}
      _hover={hover}
    >
      {children}
    </Card.Root>
  );
};
const CardImage = ({ image, height = 350, width = 'full' }) => {
  return (
    <Image
      src={image}
      alt="card-mentor"
      width={width}
      height={height}
      objectFit="cover"
      objectPosition={'center'}
      rounded={'xl'}
    />
  );
};
const Header = ({ name, role, fontSize = 'lg', color = 'white' }) => {
  return (
    <Card.Header color={'white'} ml={5} p={0} borderBottom={'1px solid #ccc'}>
      <Card.Title fontSize={fontSize} color={color}>
        {name}
      </Card.Title>
      <Card.Description color={'white'}>{role}</Card.Description>
    </Card.Header>
  );
};
const Body = ({
  title,
  summary,
  price,
  color = 'white',
  fontSize = 'md',
  scheduleType = 'month',
}) => {
  return (
    <Card.Body pt="3" pb="0">
      <Card.Title mt="2" color={color}>
        {title}
      </Card.Title>
      <Card.Title color={color} fontSize={fontSize} pb="4">
        {typeof price === 'number'
          ? `${price.toLocaleString('id-ID', {
              style: 'currency',
              currency: 'IDR',
              minimumFractionDigits: 0,
            })}/${scheduleType}`
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
  shadow: PropTypes.string,
  children: PropTypes.node,
  hover: PropTypes.object,
  backgroundColor: PropTypes.string,
};
CardBox.Image = CardImage;
CardBox.Header = Header;
CardBox.Body = Body;
CardBox.Footer = Footer;

export default CardBox;
