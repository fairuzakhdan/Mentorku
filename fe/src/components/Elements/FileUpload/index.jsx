import { Button, FileUpload } from '@chakra-ui/react';
import { HiUpload } from 'react-icons/hi';

const UploadFile = () => {
  return (
    <FileUpload.Root>
      <FileUpload.HiddenInput />
      <FileUpload.Trigger asChild>
        <Button variant="outline" size="sm" backgroundColor={'gray.600'} mb={3}>
          <HiUpload />
          Upload files by zip/rar
        </Button>
      </FileUpload.Trigger>
      <FileUpload.List />
    </FileUpload.Root>
  );
};
export default UploadFile;
