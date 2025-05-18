import React from 'react';
import Navigation from '../components/Layouts/Navigation';
import { Text, Grid, GridItem, Box } from '@chakra-ui/react';
import Layouts from '../components/Layouts/Layouts';

const Activitypage = () => {
  return (
    <Navigation type="sidebar">
      <Text border={'1px solid red'}>Activity</Text>
    </Navigation>
  );
};

export default Activitypage;
