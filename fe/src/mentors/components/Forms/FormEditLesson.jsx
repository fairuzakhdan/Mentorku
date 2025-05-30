import FormInput from '../../../components/Elements/FormInput';
import { Box, Group, Flex, Stack, Button, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { FormTextArea } from '../../../components/Elements/FormInput';
import { CiEdit } from 'react-icons/ci';
const FormEditLesson = () => {
  const [lesson, setLesson] = useState({
    topic: '',
    videos: [],
    articles: [],
  });
  const data = {
    id: '1',
    topic: 'Menjadi Fullstack Developer',
    videos: [
      {
        id: '1',
        title: 'Belajar React',
        link: 'https://youtu.be/2ehEWo4kaNA?si=A5XEJi0PPbZngLn1',
        createdAt: '2023-08-10',
      },
      {
        id: '2',
        title: 'Fundamental React',
        link: 'https://youtu.be/2ehEWo4kaNA?si=A5XEJi0PPbZngLn1',
        createdAt: '2023-08-10',
      },
    ],
    articles: [
      {
        id: '1',
        header: 'Pengenalan React',
        title: 'Belajar React',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex autem, molestias temporibus laborum debitis praesentium saepe. Ullam atque eum debitis porro. Cum voluptates natus labore optio? Inventore dolorem accusantium numquam. Eius libero possimus at, perferendis repudiandae rem dignissimos. Quod dolorum, officiis beatae eos consectetur neque animi culpa, voluptates rem necessitatibus obcaecati? Atque, doloremque et aspernatur hic saepe exercitationem similique molestias.',
      },
    ],
  };
  useEffect(() => {
    setLesson(data);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const onChangeTopic = (e) => {
    const { value } = e.target;
    setLesson({ ...lesson, topic: value });
  };
  const handleEditVideo = (index, field, e) => {
    const updatedVideos = [...lesson.videos];
    updatedVideos[index] = {
      ...updatedVideos[index],
      [field]: e.target.value,
    };
    setLesson({ ...lesson, videos: updatedVideos });
  };
  const handleEditArticle = (index, field, e) => {
    const updatedArticles = [...lesson.articles];
    updatedArticles[index] = {
      ...updatedArticles[index],
      [field]: e.target.value,
    };
    setLesson({ ...lesson, articles: updatedArticles });
  };
  return (
    <>
      <Stack color={'textBlue'} rowGap={3}>
        <Box p={5} rounded={'lg'} backgroundColor={'white'}>
          <FormInput
            label={'Edit Topic Name'}
            value={lesson.topic}
            required
            onChange={onChangeTopic}
            placeholder={'Enter Topic Name'}
            type="text"
          />
        </Box>
        <Box p={3} rounded={'lg'} backgroundColor={'white'}>
          {lesson.videos &&
            lesson.videos.map((video, index) => (
              <Box key={index} p={3} borderRadius="md">
                <Flex gap={4} flexWrap="wrap" backgroundColor="gray.300" p={2} rounded={'md'}>
                  <Box flex={1}>
                    <FormInput
                      label="Edit Video Title"
                      required
                      placeholder="Enter video title"
                      type="text"
                      value={video.title || ''}
                      onChange={(e) => handleEditVideo(index, 'title', e)}
                    />
                  </Box>
                  <Box flex={1}>
                    <FormInput
                      label="Edit Video Link"
                      required
                      placeholder="https://youtu.be/2ehEWo4kaNA?si=A5XEJi0PPbZngLn1"
                      type="text"
                      value={video.link || ''}
                      onChange={(e) => handleEditVideo(index, 'link', e)}
                    />
                  </Box>
                </Flex>
              </Box>
            ))}
        </Box>

        <Box p={3} rounded={'lg'} backgroundColor={'white'}>
          {lesson.articles &&
            lesson.articles.map((article, index) => (
              <Box key={index} p={3} borderRadius="md">
                <Flex gap={4} flexWrap="wrap" p={2} rounded={'md'}>
                  <Box flex={1}>
                    <FormInput
                      label="Edit Article Header"
                      required
                      placeholder="Enter article header"
                      type="text"
                      value={article.header || ''}
                      onChange={(e) => handleEditArticle(index, 'header', e)}
                    />
                  </Box>
                  <Box flex={1}>
                    <FormInput
                      label="Edit Article Title"
                      required
                      placeholder="Enter article title"
                      type="text"
                      value={article.title || ''}
                      onChange={(e) => handleEditArticle(index, 'title', e)}
                    />
                  </Box>
                </Flex>
                <Box p={3}>
                  <FormTextArea
                    label="Edit Article Description"
                    required
                    placeholder="Enter article description"
                    type="text"
                    value={article.description || ''}
                    onChange={(e) => handleEditArticle(index, 'description', e)}
                  />
                </Box>
              </Box>
            ))}
        </Box>
        <Box
          position={'fixed'}
          right={10}
          bottom={10}
          rounded={'full'}
          p={0}
          backgroundColor={'teal'}
        >
          <CiEdit
            size={60}
            color="white"
            cursor={'pointer'}
            // onClick={() => editLesson({ topic, videos, articles })}
          />
        </Box>
      </Stack>
    </>
  );
};

export default FormEditLesson;
