import FormInput from '../../components/Elements/FormInput';
import useInput from '../../hooks/useInput';
import { Box, Group, Flex, Stack, Button, Text } from '@chakra-ui/react';
import { useState } from 'react';
import { FormTextArea } from '../../components/Elements/FormInput';
import { IoIosAddCircle } from 'react-icons/io';
import { CiEdit } from 'react-icons/ci';

const FormLesson = ({ addLessons, type, lessonData = {} }) => {
  const [videos, setVideos] = useState(lessonData.videos || []);
  const [articles, setArticles] = useState(lessonData.articles || []);
  const [topic, onChangeTopic] = useInput(lessonData.topic || '');
  const [title, onChangeTitle] = useInput('');
  const [link, onChangeLink] = useInput('');
  const [header, onChangeHeader] = useInput('');
  const [description, onChangeDescription] = useInput('');
  const [titleArticle, onChangeTitleArticle] = useInput('');
  const addStream = ({ title, link }) => {
    const newStream = {
      title,
      link,
    };
    if (!title || !link) {
      alert('Stream tidak boleh kosong');
      return;
    }
    setVideos([...videos, newStream]);
    onChangeTitle({ target: { value: '' } });
    onChangeLink({ target: { value: '' } });
  };
  const addArticle = () => {
    if (!titleArticle || !header || !description) {
      alert('Article tidak boleh kosong');
      return;
    }
    const newArticle = {
      title: titleArticle,
      header,
      description,
    };
    setArticles([...articles, newArticle]);
    onChangeTitleArticle({ target: { value: '' } });
    onChangeHeader({ target: { value: '' } });
    onChangeDescription({ target: { value: '' } });
  };
  const handleEditVideo = (index, field, e) => {
    const updatedVideos = [...videos];
    updatedVideos[index] = {
      ...updatedVideos[index],
      [field]: e.target.value,
    };
    setVideos(updatedVideos);
  };
  const handleEditArticle = (index, field, e) => {
    const updatedArticles = [...articles];
    updatedArticles[index] = {
      ...updatedArticles[index],
      [field]: e.target.value,
    };
    setArticles(updatedArticles);
  };
  return (
    <>
      <Stack color={'textBlue'} rowGap={3}>
        <Box p={5} rounded={'lg'} backgroundColor={'white'}>
          <FormInput
            label={type === 'add' ? 'Add Topic' : 'Edit Topic'}
            value={topic}
            required
            onChange={onChangeTopic}
            placeholder={'Enter Topic Name'}
            type="text"
          />
        </Box>
        {type == 'add' && (
          <Box p={3} rounded={'lg'} backgroundColor={'white'}>
            <Flex columnGap={5} align={'end'} p={3}>
              <Box flex={3}>
                <FormInput
                  label={'Add Title Video'}
                  required
                  placeholder={'Enter title Video'}
                  type="text"
                  value={title}
                  onChange={onChangeTitle}
                />
              </Box>
              <Box flex={3}>
                <FormInput
                  label={'Add Link Video'}
                  required
                  placeholder={'https://youtu.be/2ehEWo4kaNA?si=A5XEJi0PPbZngLn1'}
                  type="text"
                  value={link}
                  onChange={onChangeLink}
                />
              </Box>
              <Button flex={1} colorPalette={'teal'} onClick={() => addStream({ title, link })}>
                Add Stream
              </Button>
            </Flex>
            <Flex gap={3} mt={3} flexWrap={'wrap'} px={3}>
              {videos.map((video, index) => (
                <Group key={index}>
                  <Text
                    backgroundColor={'gray.500'}
                    fontSize={'sm'}
                    p={1}
                    rounded={'md'}
                    color={'white'}
                  >
                    {video.title} - {video.link}
                  </Text>
                </Group>
              ))}
            </Flex>
          </Box>
        )}

        {type === 'edit' && (
          <Box p={3} rounded={'lg'} backgroundColor={'white'}>
            {videos.map((video, index) => (
              <Box key={index} p={3} borderRadius="md">
                <Flex gap={4} flexWrap="wrap" backgroundColor="gray.200" p={2} rounded={'md'}>
                  <Box flex={1}>
                    <FormInput
                      label="Edit Video Title"
                      required
                      placeholder="Enter video title"
                      type="text"
                      value={video.title}
                      onChange={(e) => handleEditVideo(index, 'title', e)}
                    />
                  </Box>
                  <Box flex={1}>
                    <FormInput
                      label="Edit Video Link"
                      required
                      placeholder="https://youtu.be/2ehEWo4kaNA?si=A5XEJi0PPbZngLn1"
                      type="text"
                      value={video.link}
                      onChange={(e) => handleEditVideo(index, 'link', e)}
                    />
                  </Box>
                </Flex>
              </Box>
            ))}
          </Box>
        )}

        {type === 'add' && (
          <Box p={3} rounded={'lg'} backgroundColor={'white'}>
            <Flex columnGap={5} p={3} align={'end'}>
              <Box flex={3}>
                <FormInput
                  label={'Add Header Article'}
                  required
                  placeholder={'Enter Header Article'}
                  value={header}
                  onChange={onChangeHeader}
                  type="text"
                />
              </Box>
              <Box flex={3}>
                <FormInput
                  label={'Add Title Article'}
                  required
                  placeholder={'Enter Title Article'}
                  value={titleArticle}
                  onChange={onChangeTitleArticle}
                  type="text"
                />
              </Box>
              <Button colorPalette={'teal'} flex={1} onClick={addArticle}>
                Add Article
              </Button>
            </Flex>
            <Stack px={3}>
              <FormTextArea
                placeholder={'lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, quod!'}
                value={description}
                onChange={onChangeDescription}
              />
            </Stack>
            <Flex gap={3} mt={3} flexWrap={'wrap'} px={3}>
              {articles.map((article, index) => (
                <Group key={index}>
                  <Text
                    backgroundColor={'gray.500'}
                    fontSize={'sm'}
                    p={1}
                    rounded={'md'}
                    color={'white'}
                  >
                    {article.header} - {article.title} - {article.description.substring(0, 50)}
                  </Text>
                </Group>
              ))}
            </Flex>
          </Box>
        )}
        {type === 'edit' && (
          <Box p={3} rounded={'lg'} backgroundColor={'white'}>
            {articles.map((article, index) => (
              <Box key={index} p={3} borderRadius="md">
                <Flex gap={4} flexWrap="wrap" p={2} rounded={'md'}>
                  <Box flex={1}>
                    <FormInput
                      label="Edit Article Header"
                      required
                      placeholder="Enter article header"
                      type="text"
                      value={article.header}
                      onChange={(e) => handleEditArticle(index, 'header', e)}
                    />
                  </Box>
                  <Box flex={1}>
                    <FormInput
                      label="Edit Article Title"
                      required
                      placeholder="Enter article title"
                      type="text"
                      value={article.title}
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
                    value={article.description}
                    onChange={(e) => handleEditArticle(index, 'description', e)}
                  />
                </Box>
              </Box>
            ))}
          </Box>
        )}
      </Stack>

      {type === 'add' && (
        <Box position={'fixed'} right={10} bottom={10} colorPalette={'teal'} rounded={'full'} p={0}>
          <IoIosAddCircle
            size={60}
            color="teal"
            cursor={'pointer'}
            onClick={() => addLessons({ topic, videos, articles })}
          />
        </Box>
      )}

      {type === 'edit' && (
        <Box position={'fixed'} right={10} bottom={10} colorPalette={'teal'} rounded={'full'} p={0}>
          <CiEdit
            size={60}
            color="teal"
            cursor={'pointer'}
            onClick={() => addLessons({ topic, videos, articles })}
          />
        </Box>
      )}
    </>
  );
};

export default FormLesson;
