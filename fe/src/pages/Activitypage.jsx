import React from 'react';
import Navigation from '../components/Layouts/Navigation';
import { Text } from '@chakra-ui/react';

const Activitypage = () => {
  return (
    <>
      <Navigation type="sidebar" />
      <Text fontSize={'2xl'}>Activity</Text>
    </>
  );
};

export default Activitypage;
