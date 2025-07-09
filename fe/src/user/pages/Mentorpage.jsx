import React from 'react';
import Layouts from '../../components/Layouts/Layouts';
import { Box, Image, Flex, Text, Grid, GridItem, Group } from '@chakra-ui/react';
import SearchBar from '../../components/Fragments/SearchBar';
// import { mentors as data } from '../../utils/mentors';
import { useState, useEffect } from 'react';
import CardBox from '../../components/Fragments/CardBox';
import ButtonGroup from '../../components/Fragments/ButtonGroup';
import { Link } from 'react-router';
import { getAllMentor } from '../../utils/mentors';
const Mentorpage = () => {
  const [mentors, setMentors] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(true);
    getAllMentor()
      .then(({ data }) => {
        setMentors(data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
    // console.log(data);
    // setMentors(data);
    // setIsLoading(false);
  }, []);
  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <Box backgroundColor="textGreen" display="flex">
        <Layouts>
          <Flex
            ml={10}
            flexDirection={'column'}
            justifyContent="center"
            alignItems="start"
            h={200}
            rowGap={7}
            color={'white'}
          >
            <Text fontSize={'3xl'} fontWeight={'semibold'}>
              Find Mentors by Topic
            </Text>
            <SearchBar text="Find a mentor here" />
          </Flex>
        </Layouts>
        <Box position={'relative'} display={'flex'} justifyContent={'end'} w={'80%'}>
          <Image
            src="https://plus.unsplash.com/premium_photo-1661416814460-e768028561c2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dHlwaW5nJTIwbGFwdG9wfGVufDB8fDB8fHww"
            height={230}
            width="full"
          />
          <Box
            bgGradient="to-r"
            gradientFrom="#188474"
            gradientTo="transparent"
            position={'absolute'}
            w={'50%'}
            top={0}
            right={0}
            bottom={0}
            left={0}
            zIndex={1}
          />
        </Box>
      </Box>
      <Layouts>
        <Group justifyContent={'center'} w={'full'} my={5}>
          <ButtonGroup />
        </Group>
      </Layouts>
      <Layouts>
        <Grid templateColumns={'repeat(5, 1fr)'} gap={5}>
          {mentors.map((mentor, index) => (
            <GridItem key={index} colSpan={1}>
              <Link to={`/mentors/${mentor._id}`}>
                <CardBox>
                  <Box position={'relative'}>
                    <CardBox.Image image={mentor.profilePicture.url} />
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
              </Link>
            </GridItem>
          ))}
        </Grid>
      </Layouts>
    </>
  );
};
export default Mentorpage;
