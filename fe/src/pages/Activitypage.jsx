import React from 'react';
import Navigation from '../components/Layouts/Navigation';
import { Text, Grid, GridItem, Box } from '@chakra-ui/react';
import Layouts from '../components/Layouts/Layouts';

const Activitypage = () => {
  return (
    <Navigation type="sidebar">
      <Box mt={5} border={'1px solid red'} color={'gray.600'} marginInline={5}>
        Activity
      </Box>
    </Navigation>
  );
};

export default Activitypage;
