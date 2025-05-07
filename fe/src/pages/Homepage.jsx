import React from 'react';
import {
  Box,
  Container,
  Flex,
  Grid,
  GridItem,
  Group,
  Text,
  Span,
  Button,
  Icon,
  SimpleGrid,
} from '@chakra-ui/react';
import Layouts from '../components/Layouts/Layouts';
import ButtonInput from '../components/Fragments/SearchBar';
import CardHorizontal from '../components/Fragments/CardHorizontal';
import { mentors as data, boxes as boxesData } from '../utils/mentors';
import CircleBadge from '../components/Elements/Badge';
import { useState, useEffect } from 'react';
import CardBox from '../components/Fragments/CardBox';
import { mentees as menteesData } from '../utils/mentors';
import { FaStar } from 'react-icons/fa';
import { FaCheckCircle } from 'react-icons/fa';

const Homepage = () => {
  const [mentors, setMentors] = useState([]);
  const [boxes, setBoxes] = useState([]);
  const [mentees, setMentees] = useState([]);
  useEffect(() => {
    setBoxes(boxesData);
    setMentors(data);
    setMentees(menteesData);
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
            marginBottom="12"
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
              <CardHorizontal key={index} image={mentor.image} gapCard={3}>
                {console.log(mentor.name)}
                <CardHorizontal.Header
                  name={
                    <Box display="flex" alignItems="center">
                      {mentor.name}
                      <Button color={'textGreen'} variant="plain" size="2xs" pointerEvents={'none'}>
                        <FaStar />{' '}
                        <Span fontSize="sm" fontWeight="semibold">
                          5.0{' '}
                        </Span>{' '}
                      </Button>
                    </Box>
                  }
                  role={
                    <Box display="flex" alignItems="center">
                      {mentor.role}
                      <Icon as={FaCheckCircle} color="blue.400" ml={1} />
                    </Box>
                  }
                />
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
              <GridItem key={index} colSpan={1}>
                <CardBox {...boxe} />
              </GridItem>
            ))}
          </Grid>
        </Layouts>
      </Box>

      <Layouts>
        <Grid templateColumns={'repeat(2, 1fr)'} columnGap={9} my={10}>
          <GridItem colSpan={1}>
            <Text fontSize={'3xl'} fontWeight={'bolder'} color="textBlue" mb={5}>
              Want Trusted Guidance <br /> Ask the Expert Directly!
            </Text>
            <Text mb={5}>
              Decisions are easier with the right advice. Gain peace of mind and clarity by
              connecting with professionals who are ready to guide you step by step — no delays, no
              confusion.
            </Text>
            <Button colorPalette="teal" variant="solid">
              Start a mentoring session
            </Button>
          </GridItem>
          <GridItem colSpan={1} border={'1px solid #ccc'}>
            w
          </GridItem>
        </Grid>
      </Layouts>

      <Box bgColor="textGreen" p={10}>
        <Layouts>
          <Grid templateColumns={'repeat(6, 1fr)'} columnGap={9} mt={10}>
            <GridItem colSpan={2} color={'white'}>
              <Text fontSize="2xl" fontWeight={'bold'}>
                Still not convinced? <br /> Don’t just take our word for it
              </Text>
              <Text>
                We’ve already delivered 1-on-1 mentorship to thousands of students, professionals,
                managers and executives. Even better, they’ve left an average rating of 4.9 out of 5
                for our mentors.
              </Text>
              <Button
                bgColor="white"
                color={'textGreen'}
                variant="solid"
                mt={5}
                fontWeight={'semibold'}
              >
                Find a Mentor
              </Button>
            </GridItem>
            <GridItem colSpan={4} color="textBlue">
              <SimpleGrid columns={2} gap={5}>
                {mentees.map((mente, index) => (
                  <CardHorizontal key={index} image={mente.image}>
                    <CardHorizontal.Header {...mente} />
                    <CardHorizontal.Body fontStyle={'italic'} {...mente} />
                  </CardHorizontal>
                ))}
              </SimpleGrid>
            </GridItem>
          </Grid>
        </Layouts>
      </Box>
    </>
  );
};

export default Homepage;
