import React from 'react';
import { Box, Container, Flex, Grid, GridItem, Group, Text, Span } from '@chakra-ui/react';
import Layouts from '../components/Layouts/Layouts';
import ButtonInput from '../components/Fragments/ButtonInput';

const Homepage = () => {
  return (
    <Layouts>
      <Grid templateColumns={'repeat(5, 1fr)'} height={'70vh'}>
        <GridItem
          colSpan={3}
          display={'flex'}
          flexDirection={'column'}
          justifyContent="center"
          alignItems="start"
          rowGap={5}
        >
          <Text>Learn a new skill, launch a project, land your dream career.</Text>
          <Text fontSize={'5xl'} fontWeight={'bolder'} color="textBlue">
            1-on-1 <Span color="textGreen">Learning</Span> <br />
            Mentorship
          </Text>
          <ButtonInput />
        </GridItem>
        <GridItem colSpan={2} border={'1px solid black'}>
          sa
        </GridItem>
      </Grid>
    </Layouts>
  );
};

export default Homepage;
