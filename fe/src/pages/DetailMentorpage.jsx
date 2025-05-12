import React from 'react';
import Layouts from '../components/Layouts/Layouts';
import { useParams } from 'react-router';
import { useState, useEffect } from 'react';
import { mentors } from '../utils/mentors';
import { Grid, GridItem, Box, Flex, Text, Button, Image, Group, Span } from '@chakra-ui/react';
import CardBox from '../components/Fragments/CardBox';
import IconColor from '../components/Elements/IconButton';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { IoChatbubbleEllipsesSharp } from 'react-icons/io5';
import { MdOutlineAccessTimeFilled } from 'react-icons/md';
import BreadcrumbLink from '../components/Fragments/Breadcrumb';
import { FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router';
import { MdRecentActors } from 'react-icons/md';
import CircleBadge from '../components/Elements/Badge';
import { IoLanguage } from 'react-icons/io5';
import { FaLocationDot } from 'react-icons/fa6';
import { FaBusinessTime } from 'react-icons/fa6';
import { BsClipboard2CheckFill } from 'react-icons/bs';
import TimelineFlow from '../components/Fragments/Timeline';
import { PiBagSimpleDuotone } from 'react-icons/pi';
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
      <Box backgroundColor="textGreen" height={250}>
        <Layouts>
          <Grid templateColumns={'repeat(3, 1fr)'}>
            <GridItem colSpan={2} position={'relative'} pt="10">
              <BreadcrumbLink mentorName={detailMentor.name} />
              <Flex
                position="relative"
                top="12"
                zIndex={1}
                justifyContent={'space-between'}
                alignItems={'center'}
              >
                <Group columnGap={7}>
                  <Image
                    src={detailMentor.image}
                    alt="card-mentor"
                    height={200}
                    border={'4px solid #ffff'}
                    width={200}
                    rounded="full"
                    objectFit="cover"
                    objectPosition="center"
                  />
                  <Button rounded="full" color="textBlue" fontWeight="medium" cursor="auto">
                    <MdRecentActors color="teal" /> Our Newest
                  </Button>
                </Group>
                <Link to="https://www.linkedin.com/">
                  <FaLinkedin color="#ffff" size={30} />
                </Link>
              </Flex>
            </GridItem>
            <GridItem colSpan={1} mt="5">
              <Box position={'fixed'} right="16" width={340} zIndex={1}>
                <CardBox
                  hover={{
                    transform: 'none',
                    opacity: 1,
                  }}
                >
                  <CardBox.Body
                    color="textBlue"
                    price={detailMentor.price}
                    fontSize="xl"
                    summary="Cocok untuk mereka yang ingin melakukan perubahan karier, mendapatkan promosi, atau membutuhkan bimbingan/arahan karier"
                  />
                  <Box p={3}>
                    <Flex columnGap={3} alignItems={'center'}>
                      <IconColor color="white" cursor="auto">
                        <BsFillTelephoneFill color="teal" />
                      </IconColor>
                      <Text fontSize="sm">Regular calls, per agreement</Text>
                    </Flex>
                    <Flex columnGap={3} alignItems={'center'}>
                      <IconColor color="white" cursor="auto">
                        <IoChatbubbleEllipsesSharp color="teal" />
                      </IconColor>
                      <Text fontSize="sm">Unlimited Q&A via chat</Text>
                    </Flex>
                    <Flex columnGap={3} alignItems={'center'}>
                      <IconColor color="white" cursor="auto">
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
      <Layouts>
        <Grid templateColumns={'repeat(4, 1fr)'} mt="24" color={'textBlue'}>
          <GridItem colSpan={3} mr={10}>
            <Flex justifyContent="space-between">
              <Box display="flex" flexDirection="column" rowGap={3}>
                <Text fontSize={'2xl'} fontWeight={'semibold'}>
                  {detailMentor.name}
                </Text>
                <Text>{detailMentor.role}</Text>
              </Box>
              <Box
                display="flex"
                flexDirection="column"
                rowGap={3}
                fontSize="md"
                fontWeight="semibold"
                width={400}
              >
                <Text>Skills</Text>
                <Flex gap={3} flexWrap="wrap">
                  {detailMentor.skills.map((skill, index) => {
                    return (
                      <CircleBadge key={index} fontSize="sm">
                        {skill}
                      </CircleBadge>
                    );
                  })}
                </Flex>
              </Box>
            </Flex>
            <Box fontSize="sm" mt={5} display="block">
              <Text>{detailMentor.summary}</Text>
              <Box p={3}>
                <Flex alignItems={'center'} columnGap={3}>
                  <IconColor color="white" cursor="auto">
                    <FaLocationDot color="teal" />
                  </IconColor>
                  <Text>{detailMentor.location}</Text>
                </Flex>
                <Flex alignItems={'center'} columnGap={3}>
                  <IconColor color="white" cursor="auto">
                    <IoLanguage color="teal" />
                  </IconColor>
                  {detailMentor.language.map((lang, index) => (
                    <Text key={index}>{lang}</Text>
                  ))}
                </Flex>
                <Flex alignItems={'center'} columnGap={3}>
                  <IconColor color="white" cursor="auto">
                    <FaBusinessTime color="teal" />
                  </IconColor>
                  <Text>Active today</Text>
                </Flex>
                <Flex alignItems={'center'} columnGap={3}>
                  <IconColor color="white" cursor="auto">
                    <BsClipboard2CheckFill color="teal" />
                  </IconColor>
                  <Text>Usually responds in half a day</Text>
                </Flex>
              </Box>

              <Grid mt={3} templateColumns={'repeat(2, 1fr)'}>
                <GridItem colspan="1">
                  <Text fontSize={'lg'} fontWeight="semibold">
                    Work Experience
                  </Text>
                  <Box p={5}>
                    {detailMentor.experience.map((item, index) => (
                      <TimelineFlow
                        key={index}
                        title={item.position}
                        body={item.company}
                        icon={<PiBagSimpleDuotone />}
                      />
                    ))}
                  </Box>
                </GridItem>
                <GridItem colspan="1">
                  <Text fontSize={'lg'} fontWeight="semibold">
                    Education
                  </Text>
                  <Box
                    as="ul"
                    p={5}
                    display="flex"
                    listStyleType="circle"
                    flexDirection="column"
                    rowGap={3}
                    alignItems="flex-start"
                  >
                    {detailMentor.education.map((item, index) => (
                      <li key={index}>
                        <Group>
                          <Text fontWeight={'semibold'} fontSize={'md'}>
                            {item.organization}
                          </Text>
                          <Text>
                            {'- '}
                            {item.major}
                          </Text>
                        </Group>
                      </li>
                    ))}
                  </Box>
                </GridItem>
              </Grid>
            </Box>
          </GridItem>
        </Grid>
      </Layouts>
    </>
  );
};

export default DetailMentorpage;
