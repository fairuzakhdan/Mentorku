import React from 'react';
import { Button, Group, Input } from '@chakra-ui/react';
import PropTypes from 'prop-types';
const SearchBar = ({ text, color }) => {
  return (
    <Group w="full" maxW="xl" border={'1px solid #ccc'} padding="2" rounded={'md'}>
      <Input
        flex="2"
        placeholder="Search by, skills or role "
        size={'md'}
        border={'1px solid #ccc'}
        color={color}
        _placeholder={{ color: 'inherit' }}
      />
      <Button colorPalette={color} variant="solid" size={'md'} margin={-1}>
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
