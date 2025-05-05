import React from 'react';
import { Box, Container, Flex, Grid, GridItem, Group, Text, Span } from '@chakra-ui/react';
import Layouts from '../components/Layouts/Layouts';
import ButtonInput from '../components/Fragments/SearchBar';
import CardHorizontal from '../components/Fragments/CardHorizontal';
import { mentors as data, boxes as boxesData } from '../utils/mentors';
import CircleBadge from '../components/Elements/Badge';
import { useState, useEffect } from 'react';
import CardBox from '../components/Fragments/CardBox';

const Homepage = () => {
  const [mentors, setMentors] = useState([]);
  const [boxes, setBoxes] = useState([]);
  useEffect(() => {
    setBoxes(boxesData);
    setMentors(data);
  }, []);
  return (
    <>
      <Layouts>
        <Grid templateColumns={'repeat(6, 1fr)'} id="home" height={'90vh'}>
          <GridItem
            colSpan={4}
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
            <Flex wrap="wrap" gap={5}>
              {mentors.map((mentor, index) => (
                <CircleBadge key={index}>{mentor.role}</CircleBadge>
              ))}
            </Flex>
          </GridItem>
          <GridItem colSpan={2}>
            {mentors.map((mentor, index) => (
              <CardHorizontal key={index} image={mentor.image}>
                <CardHorizontal.Body {...mentor} />
                <CardHorizontal.Footer {...mentor} />
              </CardHorizontal>
            ))}
          </GridItem>
        </Grid>
      </Layouts>

      <Box bgColor="textGreen" p={10}>
        <Layouts>
          <Text fontSize={'3xl'} fontWeight={'bolder'} color="white" textAlign={'center'} mb={5}>
            Not sure if mentorship is right for you? <br /> Give it a try with a one-off session.
          </Text>
          <Grid templateColumns={'repeat(3, 1fr)'} id="explore" columnGap="9">
            {boxes.map((boxe, index) => (
              <GridItem colSpan={1}>
                <CardBox key={index} {...boxe} />
              </GridItem>
            ))}
          </Grid>
        </Layouts>
      </Box>
    </>
  );
};

export default Homepage;
