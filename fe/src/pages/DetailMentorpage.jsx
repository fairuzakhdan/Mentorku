import React from 'react';
import Layouts from '../components/Layouts/Layouts';
import { useParams } from 'react-router';
import { useState, useEffect } from 'react';
import { mentors } from '../utils/mentors';
import { Grid, GridItem, Box, Flex, Text, Button } from '@chakra-ui/react';
import CardBox from '../components/Fragments/CardBox';
import IconColor from '../components/Elements/IconButton';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { IoChatbubbleEllipsesSharp } from 'react-icons/io5';
import { MdOutlineAccessTimeFilled } from 'react-icons/md';
const DetailMentorpage = () => {
  const { mentorId } = useParams();
  const [detailMentor, setDetailMentor] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(true);
    const mentor = mentors.find((mentor) => mentor.id === mentorId);

    setDetailMentor(mentor);
    setIsLoading(false);
  }, [mentorId]);
  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Box backgroundColor="textGreen" height={300}>
        <Layouts>
          <Grid templateColumns={'repeat(3, 1fr)'}>
            <GridItem colSpan={2} border={'1px solid #ccc'}>
              s
            </GridItem>
            <GridItem colSpan={1} position={'relative'}>
              <Box position={'sticky'} top={10} bottom={10} left={10} right={10}>
                <CardBox
                  hover={{
                    transform: 'none',
                    opacity: 1,
                  }}
                >
                  <CardBox.Body
                    color="textBlue"
                    title={detailMentor.price}
                    description="Cocok untuk mereka yang ingin melakukan perubahan karier, mendapatkan promosi, atau membutuhkan bimbingan/arahan karier"
                  />
                  <Box p={3}>
                    <Flex columnGap={3} alignItems={'center'}>
                      <IconColor color="white">
                        <BsFillTelephoneFill color="teal" />
                      </IconColor>
                      <Text fontSize="sm">Regular calls, per agreement</Text>
                    </Flex>
                    <Flex columnGap={3} alignItems={'center'}>
                      <IconColor color="white">
                        <IoChatbubbleEllipsesSharp color="teal" />
                      </IconColor>
                      <Text fontSize="sm">Unlimited Q&A via chat</Text>
                    </Flex>
                    <Flex columnGap={3} alignItems={'center'}>
                      <IconColor color="white">
                        <MdOutlineAccessTimeFilled color="teal" />
                      </IconColor>
                      <Text fontSize="sm">Expect responses in 3-4 days</Text>
                    </Flex>
                    <Button
                      variant="solid"
                      colorPalette="teal"
                      width={'full'}
                      mt={5}
                      fontSize={'md'}
                    >
                      Hire a mentor now
                    </Button>
                  </Box>
                </CardBox>
              </Box>
            </GridItem>
          </Grid>
        </Layouts>
      </Box>
    </>
  );
};

export default DetailMentorpage;
