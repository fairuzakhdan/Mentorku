import React from 'react';
import { Button, Group, Input } from '@chakra-ui/react';
import PropTypes from 'prop-types';
const SearchBar = ({
  text,
  color,
  placeholder = 'Search by, skills or role',
  size = 'md',
  padding = '2',
}) => {
  return (
    <Group w="full" maxW="xl" border={'1px solid #ccc'} padding={padding} rounded={'md'}>
      <Input
        flex="2"
        placeholder={placeholder}
        size={size}
        border={'1px solid #ccc'}
        color={color}
        _placeholder={{ color: 'inherit' }}
      />
      <Button colorPalette={color} variant="solid" size={size} margin={-1}>
        {text}
      </Button>
    </Group>
  );
};
SearchBar.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
};

export default SearchBar;
