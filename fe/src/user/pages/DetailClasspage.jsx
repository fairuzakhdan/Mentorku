import Navigation from '../../components/Layouts/Navigation';
import { Box, Grid, GridItem, Text, Flex, Stack, Group } from '@chakra-ui/react';
import BreadcrumbLink from '../../components/Fragments/Breadcrumb';
import { VscFolderLibrary } from 'react-icons/vsc';
import { PiBooksBold } from 'react-icons/pi';
import { useParams } from 'react-router';
import Ratio from '../../components/Elements/Ratio';
import TabsLink from '../../components/Fragments/Tabs';
import { useEffect, useState } from 'react';
import { FaTasks } from 'react-icons/fa';
import CardBox from '../../components/Fragments/CardBox';
import Modal from '../../components/Fragments/Modal';
import { getLessonForPaymentSuccessByMentorId } from '../../utils/lessons';

const DetailClasspage = () => {
  const { mentorId } = useParams();
  const [activeVideo, setActiveVideo] = useState([]);
  const [lessons, setLessons] = useState(null);
  const task = [
    {
      id: '1',
      category: 'Computational Thinking',
      title: 'Buatlah Studi Kasus Penerapan Computational Thinking dalam Kehidupan Sehari-hari',
      description:
        'Mahasiswa diminta untuk membuat contoh kasus nyata dari kehidupan sehari-hari (misalnya: memesan makanan online, menyusun jadwal belajar, atau mengatur keuangan), lalu menerapkannya dengan empat tahapan Computational Thinking (Decomposition, Pattern Recognition, Abstraction, Algorithm Design)',
    },
    {
      id: '2',
      category: 'Computational Thinking',
      title: 'Buatlah Studi Kasus Penerapan Computational Thinking dalam Kehidupan Sehari-hari',
      description:
        'Mahasiswa diminta untuk membuat contoh kasus nyata dari kehidupan sehari-hari (misalnya: memesan makanan online, menyusun jadwal belajar, atau mengatur keuangan), lalu menerapkannya dengan empat tahapan Computational Thinking (Decomposition, Pattern Recognition, Abstraction, Algorithm Design)',
    },
    {
      id: '3',
      category: 'Computational Thinking',
      title: 'Kembangkan Sebuah Proyek Mini yang Menerapkan Konsep Computational Thinking',
      description:
        'Tugas ini mengajak mahasiswa untuk merancang dan menjelaskan proyek mini berbasis teknologi atau non-teknologi yang menunjukkan pemahaman terhadap konsep CT. Gunakan tahapan decomposition, abstraction, pattern recognition, dan algorithm.',
    },
    {
      id: '4',
      category: 'Computational Thinking',
      title: 'Kembangkan Sebuah Proyek Mini yang Menerapkan Konsep Computational Thinking',
      description:
        'Tugas ini mengajak mahasiswa untuk merancang dan menjelaskan proyek mini berbasis teknologi atau non-teknologi yang menunjukkan pemahaman terhadap konsep CT. Gunakan tahapan decomposition, abstraction, pattern recognition, dan algorithm.',
    },
  ];
  const links = [
    {
      href: '/mentors/class',
      title: 'Kelas Saya',
      icon: VscFolderLibrary,
    },
    {
      href: '/mentors/class/' + mentorId,
      title: 'Kelas Saya',
      icon: PiBooksBold,
    },
  ];
  useEffect(() => {
    getLessonForPaymentSuccessByMentorId(mentorId)
      .then(({ data }) => {
        setLessons(data);
        if (data.videos.length > 0) {
          setActiveVideo(data.videos[0]);
        }
      })
      .catch(({ error }) => {
        console.log(error);
      });
  }, [mentorId]);
  return (
    <>
      <Navigation type="sidebar">
        <Box marginLeft="10" marginRight="16" color="textBlue" mt={5}>
          <BreadcrumbLink links={links} color="textBlue" size="md" />
          <Box mt={3} rounded="lg" border={'1px solid gray'}>
            <TabsLink
              tabs={[
                {
                  label: 'Video Lessons',
                  value: 'video',
                  content: (
                    <Grid templateColumns="repeat(5, 1fr)" maxHeight={500}>
                      <GridItem colSpan={4}>
                        <Ratio link={activeVideo.link} title={activeVideo.title} />
                      </GridItem>
                      <GridItem colSpan={1} padding={4} overflowY="auto">
                        {lessons &&
                          lessons.videos.map((item) => (
                            <Box
                              key={item._id}
                              display={'flex'}
                              bgColor={activeVideo.id === item.id ? 'green.200' : 'white'}
                              p={2}
                              flexDirection={'column'}
                              mb={4}
                              onClick={() => setActiveVideo(item)}
                              cursor={'pointer'}
                            >
                              <Text fontWeight="semibold" fontSize="sm">
                                {item.title}
                              </Text>
                              <Box fontSize="xs" color="gray.600">
                                {item.owner} – {item.createdAt.split(' ')[0]}
                              </Box>
                            </Box>
                          ))}
                      </GridItem>
                    </Grid>
                  ),
                },
                {
                  label: 'Articles',
                  value: 'articles',
                  content: (
                    <Box
                      display={'flex'}
                      flexDirection={'column'}
                      alignItems={'center'}
                      overflowY="auto"
                      maxHeight={450}
                    >
                      {lessons &&
                        lessons.articles.map((article) => (
                          <Stack overflowY="auto" p={5} mb={3} key={article._id}>
                            <Text fontSize="xl" fontWeight="bold" color="textGreen">
                              {article.header}
                            </Text>
                            <Text fontSize="lg" color="gray.600" fontWeight="semibold">
                              {article.title}
                            </Text>
                            <Text fontSize="sm" color="gray.600" textAlign={'justify'}>
                              {article.description}
                            </Text>
                          </Stack>
                        ))}
                    </Box>
                  ),
                },
                {
                  label: 'Task',
                  value: 'task',
                  content: (
                    <Group p={3} gap={5} flexWrap="wrap" justifyContent={'space-between'}>
                      {task.map((task) => (
                        <CardBox
                          width={300}
                          shadow="none"
                          key={task.id}
                          hover={{ transform: 'scale(1)', backgroundColor: 'gray' }}
                          backgroundColor="gray.600"
                        >
                          <Flex p={3} alignItems={'center'}>
                            <FaTasks color="#FFC107" size={20} />
                            <CardBox.Header name={task.category} fontSize="sm" />
                          </Flex>
                          <Modal
                            label="View Detail Task"
                            title={task.title}
                            description={task.description}
                          />
                        </CardBox>
                      ))}
                    </Group>
                  ),
                },
              ]}
            />
          </Box>
        </Box>
      </Navigation>
    </>
  );
};

export default DetailClasspage;
