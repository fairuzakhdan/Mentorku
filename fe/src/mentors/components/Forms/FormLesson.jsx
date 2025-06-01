import FormInput from '../../../components/Elements/FormInput';
import useInput from '../../../hooks/useInput';
import { Box, Group, Flex, Stack, Button, Text } from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import { FormTextArea } from '../../../components/Elements/FormInput';
import { IoIosAddCircle } from 'react-icons/io';
import { CiEdit } from 'react-icons/ci';

const AddStreamValue = ({ video }) => {
  return (
    <Group>
      <Text backgroundColor={'gray.500'} fontSize={'sm'} p={1} rounded={'md'} color={'white'}>
        {video.title} - {video.link}
      </Text>
    </Group>
  );
};
const AddArticleValue = ({ article }) => {
  return (
    <Group>
      <Text backgroundColor={'gray.500'} fontSize={'sm'} p={1} rounded={'md'} color={'white'}>
        {article.header} - {article.title} - {article.description.substring(0, 50)}
      </Text>
    </Group>
  );
};

const FormLesson = ({ onSubmitLesson, initialData = {}, type = 'add' }) => {
  const [videos, setVideos] = useState([]);
  const [articles, setArticles] = useState([]);
  const [topic, onChangeTopic, setTopic] = useInput('');
  const [title, onChangeTitle, setTitle] = useInput('');
  const [link, onChangeLink, setLink] = useInput('');
  const [header, onChangeHeader, setHeader] = useInput('');
  const [description, onChangeDescription, setDescription] = useInput('');
  const [titleArticle, onChangeTitleArticle, setTitleArticle] = useInput('');
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
  useEffect(() => {
    if (type === 'edit' && initialData) {
      setVideos(initialData.videos || []);
      setArticles(initialData.articles || []);
      setTopic(initialData.topic || '');
      setTitle(initialData.title || '');
      setLink(initialData.link || '');
      setHeader(initialData.header || '');
      setDescription(initialData.description || '');
      setTitleArticle(initialData.titleArticle || '');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialData]);
  const handleChangeVideo = (event, index, field) => {
    const updatedVideos = [...videos];
    updatedVideos[index][field] = event.target.value;
    setVideos(updatedVideos);
  };
  const handleChangeArticle = (event, index, field) => {
    const updatedArticles = [...articles];
    updatedArticles[index][field] = event.target.value;
    setArticles(updatedArticles);
  };
  const handleSubmit = () => {
    onSubmitLesson({ topic, videos, articles });
  };
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
          {type === 'add' && (
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
          )}
          <Flex gap={3} mt={3} flexWrap={'wrap'} px={3}>
            {videos.map((video, index) => (
              <Box key={`video-${index}`} flex={1}>
                {type === 'add' && <AddStreamValue video={video} />}

                {type === 'edit' && (
                  <Flex
                    bgColor={'gray.200'}
                    rounded={'md'}
                    w={'100%'}
                    p={3}
                    gap={3}
                    flexWrap={'wrap'}
                    justify={'center'}
                  >
                    <Box>
                      <FormInput
                        label={'Edit Title Video'}
                        required
                        placeholder={'Enter title Video'}
                        type="text"
                        value={video.title}
                        onChange={(e) => handleChangeVideo(e, index, 'title')}
                      />
                    </Box>

                    <Box>
                      <FormInput
                        label={'Edit Link Video'}
                        required
                        placeholder={'https://youtu.be/2ehEWo4kaNA?si=A5XEJi0PPbZngLn1'}
                        type="text"
                        value={video.link}
                        onChange={(e) => handleChangeVideo(e, index, 'link')}
                      />
                    </Box>
                  </Flex>
                )}
              </Box>
            ))}
          </Flex>
        </Box>

        <Box p={3} rounded={'lg'} backgroundColor={'white'}>
          {type === 'add' && (
            <>
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
                  placeholder={
                    'lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, quod!'
                  }
                  value={description}
                  onChange={onChangeDescription}
                />
              </Stack>
            </>
          )}
          <Flex gap={3} mt={3} flexWrap={'wrap'} px={3}>
            {articles.map((article, index) => (
              <Box key={index} w={'full'}>
                {type === 'add' && <AddArticleValue article={article} />}
                <Box p={3} bgColor={'gray.200'} rounded={'md'}>
                  {type === 'edit' && (
                    <>
                      <Flex rounded={'md'} w={'100%'} gap={3}>
                        <FormInput
                          label={'Edit Header Article'}
                          required
                          placeholder={'Enter Title Article'}
                          value={article.header}
                          onChange={(e) => handleChangeArticle(e, index, 'header')}
                          type="text"
                        />
                        <FormInput
                          label={'Edit Title Article'}
                          required
                          placeholder={'Enter Title Article'}
                          value={article.title}
                          onChange={(e) => handleChangeArticle(e, index, 'title')}
                          type="text"
                        />
                      </Flex>
                      <Box>
                        <FormTextArea
                          label={'Edit Description'}
                          value={article.description}
                          placeholder={'Enter Description'}
                          onChange={(e) => handleChangeArticle(e, index, 'description')}
                        />
                      </Box>
                    </>
                  )}
                </Box>
              </Box>
            ))}
          </Flex>
        </Box>
        <Button colorPalette={'teal'} alignSelf={'end'} onClick={handleSubmit}>
          {type === 'add' ? 'Add Lesson' : 'Update Lesson'}
        </Button>
      </Stack>
    </>
  );
};

export default FormLesson;
