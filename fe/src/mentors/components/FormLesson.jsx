import FormInput from '../../components/Elements/FormInput';
import useInput from '../../hooks/useInput';
import { Box, Group, Flex, Stack, Button, Text } from '@chakra-ui/react';
import { useState } from 'react';
import { FormTextArea } from '../../components/Elements/FormInput';
import { IoIosAddCircle } from 'react-icons/io';

const FormLesson = ({ addLessons }) => {
  const [videos, setVideos] = useState([]);
  const [articles, setArticles] = useState([]);
  const [topic, onChangeTopic] = useInput('');
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
  console.log({ topic, articles, videos });
  return (
    <>
      <Stack color={'textBlue'} rowGap={3}>
        <Box p={5} rounded={'lg'} backgroundColor={'white'}>
          <FormInput
            label={'Add Topic'}
            value={topic}
            required
            onChange={onChangeTopic}
            placeholder={'Enter Topic Name'}
            type="text"
          />
        </Box>
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
      </Stack>

      <Box position={'fixed'} right={10} bottom={10} colorPalette={'teal'} rounded={'full'} p={0}>
        <IoIosAddCircle
          size={60}
          color="teal"
          cursor={'pointer'}
          onClick={() => addLessons({ topic, videos, articles })}
        />
      </Box>
    </>
  );
};

export default FormLesson;
