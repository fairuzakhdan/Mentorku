import React from 'react';
import Layouts from '../../components/Layouts/Layouts';
import { useParams } from 'react-router';
import { useState, useEffect } from 'react';
// import { mentors } from '../../utils/mentors';
import {
  Grid,
  GridItem,
  Box,
  Flex,
  Text,
  Button,
  Image,
  Group,
  ToastTitle,
} from '@chakra-ui/react';
import CardBox from '../../components/Fragments/CardBox';
import IconColor from '../../components/Elements/IconButton';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { IoChatbubbleEllipsesSharp } from 'react-icons/io5';
import { MdOutlineAccessTimeFilled } from 'react-icons/md';
import BreadcrumbLink from '../../components/Fragments/Breadcrumb';
import { FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router';
import { MdRecentActors } from 'react-icons/md';
import CircleBadge from '../../components/Elements/Badge';
import { IoLanguage } from 'react-icons/io5';
import { FaLocationDot } from 'react-icons/fa6';
import { FaBusinessTime } from 'react-icons/fa6';
import { BsClipboard2CheckFill } from 'react-icons/bs';
import TimelineFlow from '../../components/Fragments/Timeline';
import Selected from '../../components/Fragments/Selected';
import TabsLink from '../../components/Fragments/Tabs';
import { useNavigate } from 'react-router';
import { LuHouse, LuUserRoundSearch } from 'react-icons/lu';
import { getMentorById } from '../../utils/mentors';

const DetailMentorpage = () => {
  const navigate = useNavigate();
  const { mentorId } = useParams();
  const [detailMentor, setDetailMentor] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedDays, setSelectedDays] = useState({});

  useEffect(() => {
    setIsLoading(true);

    getMentorById(mentorId)
      .then(({ data }) => {
        setDetailMentor(data);
      })
      .catch((err) => {
        alert(err.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [mentorId, navigate]);
  if (isLoading) {
    return <div>Loading...</div>;
  }

  const addDays = (days) => {
    // console.log(days);
    setSelectedDays(days);
  };
  const addTimes = () => {
    if (Object.keys(selectedDays).length < 2) {
      alert('Please select at least two days before hiring a mentor.');
    } else {
      const select = Object.entries(selectedDays).map(([day, timeObj]) => ({
        days: day,
        time: timeObj.value[0],
      }));
      navigate(`/mentors/${mentorId}/payment`, {
        state: {
          payment: {
            mentorId: {
              id: detailMentor._id,
              name: detailMentor.name,
              role: detailMentor.role,
              image: detailMentor.profilePicture.url,
              price: detailMentor.price,
            },
            schedules: select,
            totalPrice: detailMentor.price,
          },
        },
      });
    }
  };
  const links = [
    {
      href: '/',
      title: 'Home',
      icon: LuHouse,
    },
    {
      href: '/mentors',
      title: 'Find a Mentor',
      icon: LuUserRoundSearch,
    },
  ];

  return (
    <>
      <Box backgroundColor="textGreen" height={250}>
        <Layouts>
          <Grid templateColumns={'repeat(3, 1fr)'}>
            <GridItem colSpan={2} position={'relative'} pt="10">
              <BreadcrumbLink mentorName={detailMentor.name} links={links} />
              <Flex
                position="relative"
                top="12"
                zIndex={1}
                justifyContent={'space-between'}
                alignItems={'center'}
              >
                <Group columnGap={7}>
                  <Image
                    src={detailMentor.profilePicture.url}
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
                    transition: 'all 0.3s ease-in-out',
                  }}
                >
                  <TabsLink
                    tabs={[
                      {
                        value: 'plans',
                        label: 'Mentorship plans',
                        content: (
                          <>
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
                            </Box>
                          </>
                        ),
                      },
                      {
                        value: 'sessions',
                        label: 'Sessions',
                        content: <Selected addDays={addDays} />,
                      },
                    ]}
                  />
                  <Box w="100%" p={3}>
                    <Button
                      variant="solid"
                      colorPalette="teal"
                      w="100%"
                      fontSize="md"
                      onClick={addTimes}
                    >
                      Hire a Mentor Now
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
                    <TimelineFlow mentor={detailMentor.experience} type="experience" />
                  </Box>
                </GridItem>
                <GridItem colspan="1">
                  <Text fontSize={'lg'} fontWeight="semibold">
                    Education
                  </Text>
                  <Box p={5}>
                    <TimelineFlow mentor={detailMentor.education} type="education" />
                  </Box>
                </GridItem>
              </Grid>
            </Box>
            <Text fontSize={'lg'} fontWeight="semibold" mb={3}>
              Expertise
            </Text>
            <Group columnGap={2}>
              {detailMentor.expertise.map((item, index) => (
                <Button
                  cursor="auto"
                  key={index}
                  fontSize="sm"
                  colorPalette="teal"
                  outline="1px solid teal"
                  backgroundColor="white"
                  color={'textGreen'}
                >
                  {item}
                </Button>
              ))}
            </Group>
          </GridItem>
        </Grid>
      </Layouts>
    </>
  );
};

export default DetailMentorpage;
