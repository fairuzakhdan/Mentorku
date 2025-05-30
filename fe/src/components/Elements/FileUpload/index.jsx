import { Button, FileUpload } from '@chakra-ui/react';
import { HiUpload } from 'react-icons/hi';

const UploadFile = ({ bg = 'gray.600', onFilesChange }) => {
  const onValueChange = (e) => {
    const files = e.target.files;
    onFilesChange(files);
  };
  return (
    <FileUpload.Root onChange={onValueChange}>
      <FileUpload.HiddenInput />
      <FileUpload.Trigger asChild>
        <Button variant="outline" size="sm" backgroundColor={bg} mb={3}>
          <HiUpload />
          Upload files by zip/rar
        </Button>
      </FileUpload.Trigger>
      <FileUpload.List />
    </FileUpload.Root>
  );
};
export default UploadFile;
