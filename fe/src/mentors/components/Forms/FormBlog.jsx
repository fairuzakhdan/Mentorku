import { Stack, Flex, Button, Box } from '@chakra-ui/react';
import FormInput from '../../../components/Elements/FormInput';
import { FormTextArea } from '../../../components/Elements/FormInput';
import useInput from '../../../hooks/useInput';
import { useEffect, useState } from 'react';
import UploadFile from '../../../components/Elements/FileUpload';

const FormBlog = ({ initialData = {}, type = 'add', onSubmit }) => {
  const [title, onChangeTitle, setTitle] = useInput(initialData.title || '');
  const [category, onChangeCategory, setCategory] = useInput(initialData.category || '');
  const [subtitle, onChangeSubtitle, setSubtitle] = useInput(initialData.subtitle || '');
  const [content, onChangeContent, setContent] = useInput(initialData.content || '');
  const [image, setImage] = useState(null);

  const handleFileChange = (files) => {
    if (files && files.length > 0) {
      const selectedFile = files[0];
      setImage(selectedFile);
    }
  };

  useEffect(() => {
    if (type === 'edit') {
      setTitle(initialData.title);
      setCategory(initialData.category);
      setSubtitle(initialData.subtitle);
      setContent(initialData.content);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialData]);
  const handleSubmit = () => {
    if (!title || !category || !subtitle || !content || !image) {
      alert('Please fill in all fields');
      return;
    }
    onSubmit({
      title,
      category,
      subtitle,
      content,
      image,
    });
  };
  return (
    <Stack color={'textBlue'} rowGap={8}>
      <Flex columnGap={5}>
        <FormInput
          label={'Add Title Blog'}
          placeholder={'Enter title blog'}
          required
          type="text"
          value={title}
          onChange={onChangeTitle}
        />
        <FormInput
          label={'Add Category Blog'}
          placeholder={'Enter Category blog'}
          required
          type="text"
          value={category}
          onChange={onChangeCategory}
        />
      </Flex>
      <Flex columnGap={5} alignItems={'flex-end'}>
        <Box flex={1}>
          <FormInput
            label={'Add Subtitle Blog'}
            placeholder={'Enter subtitle blog'}
            required
            type="text"
            value={subtitle}
            onChange={onChangeSubtitle}
          />
        </Box>
        <Box mb={-2} flex={1}>
          <UploadFile bg="gray.500" onFilesChange={handleFileChange} />
        </Box>
      </Flex>
      <FormTextArea
        label={'Add Content Blog'}
        placeholder={'Enter content blog'}
        value={content}
        onChange={onChangeContent}
      />
      <Button
        onClick={handleSubmit}
        colorPalette={'teal'}
        width={'fit-content'}
        alignSelf={'flex-end'}
      >
        {type === 'add' ? 'Add Blog' : 'Edit Blog'}
      </Button>
    </Stack>
  );
};

export default FormBlog;
