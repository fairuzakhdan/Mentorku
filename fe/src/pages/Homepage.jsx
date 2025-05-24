import React from 'react';
import {
  Box,
  Flex,
  Grid,
  GridItem,
  Image,
  Text,
  Span,
  Button,
  Icon,
  SimpleGrid,
} from '@chakra-ui/react';
import Layouts from '../components/Layouts/Layouts';
import Footer from '../components/Layouts/Footer';
import SearchBar from '../components/Fragments/SearchBar';
import CardHorizontal from '../components/Fragments/CardHorizontal';
import { mentors as data, boxes as boxesData } from '../utils/mentors';
import CircleBadge from '../components/Elements/Badge';
import { useState, useEffect } from 'react';
import CardBox from '../components/Fragments/CardBox';
import { mentees as menteesData } from '../utils/mentors';
import { FaStar } from 'react-icons/fa';
import { FaCheckCircle } from 'react-icons/fa';
import { Typewriter } from 'react-simple-typewriter';
import { MdPersonSearch } from 'react-icons/md';
import { Link } from 'react-router';

const Homepage = () => {
  const [mentors, setMentors] = useState([]);
  const [boxes, setBoxes] = useState([]);
  const [mentees, setMentees] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    setBoxes(boxesData);
    setMentors(data);
    setMentees(menteesData);
    setIsLoading(false);
  }, []);

  const subject = [
    'Learning',
    'Data Science',
    'React',
    'Web Development',
    'ML & AI',
    'JavaScript',
    'Blockchain',
  ];
  if (isLoading) {
    return <div>Loading...</div>;
  }
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
            <Text fontSize="6xl" fontWeight={'bolder'} color="textBlue">
              1-on-1{' '}
              <Span color="textGreen">
                <Typewriter
                  words={subject}
                  loop="true"
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </Span>{' '}
              <br />
              Mentorship
            </Text>
            <SearchBar text="Find Mentors" color="teal" />
            <Flex wrap="wrap" gap={5}>
              {[...new Set(mentors.map((mentor) => mentor.role))].map((role, index) => (
                <CircleBadge key={index}>{role}</CircleBadge>
              ))}
            </Flex>
          </GridItem>
          <GridItem colSpan={2} overflow={'hidden'}>
            <Box className="vertical-ticker">
              {[...Array(2)].map((_, blockIdx) =>
                mentors.map((mentor, i) => (
                  <CardHorizontal
                    key={blockIdx + '-' + i}
                    image={mentor.image}
                    gapCard={3}
                    className="ticker-item"
                  >
                    <CardHorizontal.Header
                      name={
                        <Box display="flex" alignItems="center" flexWrap="wrap">
                          {mentor.name}
                          <Button
                            color={'textGreen'}
                            variant="plain"
                            size="2xs"
                            pointerEvents={'none'}
                          >
                            <FaStar />{' '}
                            <Span fontSize="sm" fontWeight="semibold">
                              5.0{' '}
                            </Span>{' '}
                          </Button>
                        </Box>
                      }
                      role={
                        <Span>
                          {mentor.role} <Icon as={FaCheckCircle} color="blue.400" ml={1} />
                        </Span>
                      }
                    />
                    <CardHorizontal.Footer {...mentor} />
                  </CardHorizontal>
                )),
              )}
            </Box>
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
                <CardBox>
                  <CardBox.Body summary={boxe.description} title={boxe.title} color="textBlue" />
                  <CardBox.Footer {...boxe} />
                </CardBox>
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
          <GridItem colSpan={1}>
            <Image src="src\assets\images\hero-vector-call.jpg"></Image>
          </GridItem>
        </Grid>
      </Layouts>

      <Layouts id="benefits">
        <Text fontSize="2xl" fontWeight={'bold'}>
          What are the benefits of Mentor on Demand?
        </Text>
        <Grid templateColumns={'repeat(3, 1fr)'} columnGap={9} my={10}>
          <GridItem
            colspan={1}
            textAlign={'center'}
            fontWeight="semibold"
            color="textBlue"
            fontSize="lg"
          >
            <Image src="src\assets\images\benefit-ques1.png" width={220} mb="3" mx="auto" />
            <Text>You can ask anything to the expert</Text>
          </GridItem>
          <GridItem
            colspan={1}
            textAlign={'center'}
            fontSize="lg"
            fontWeight="semibold"
            color="textBlue"
          >
            <Image src="src\assets\images\benefit-personal2.png" width={220} mb="3" mx="auto" />
            <Text>1 : 1 Mentoring</Text>
          </GridItem>
          <GridItem
            colspan={1}
            textAlign={'center'}
            fontSize="lg"
            fontWeight="semibold"
            color="textBlue"
          >
            <Image src="src\assets\images\benefit-schedule3.png" width={220} mb="3" mx="auto" />
            <Text>Flexible schedule</Text>
          </GridItem>
        </Grid>
      </Layouts>

      <Box bgColor="textGreen" p={10} id="testimonials">
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

      <Layouts id="topmentor">
        <Grid templateColumns={'repeat(4, 1fr)'} my={10} gap={5}>
          {mentors.slice(0, 4).map((mentor, index) => (
            <GridItem key={index} colSpan={1}>
              <CardBox>
                <Box position={'relative'}>
                  <CardBox.Image {...mentor} />
                  <Box
                    rounded={'xl'}
                    bgGradient="to-b"
                    gradientFrom="transparent"
                    gradientTo="textGreen"
                    position={'absolute'}
                    left={0}
                    right={0}
                    bottom={0}
                    height={'50%'}
                  />
                  <Box
                    position={'absolute'}
                    bottom={0}
                    right={0}
                    left={3}
                    borderLeft={'5px solid #188474'}
                    overflow={'hidden'}
                  >
                    <CardBox.Header {...mentor} />
                    <CardBox.Body price={mentor.price} />
                  </Box>
                </Box>
              </CardBox>
            </GridItem>
          ))}
        </Grid>
        <Flex justify="center" alignItems={'center'} my={5}>
          <Link to="/mentors">
            <Button colorPalette="teal" variant="solid" w={200} fontSize={'md'}>
              <MdPersonSearch />
              See All Mentors
            </Button>
          </Link>
        </Flex>
      </Layouts>
    </>
  );
};

export default Homepage;
