import { Button, CloseButton, Dialog, Portal, Box } from '@chakra-ui/react';
import { GrView } from 'react-icons/gr';
import UploadFile from '../Elements/FileUpload';
import HighlightText from '../Elements/Highlight';

const Modal = ({ label, title, description, type = 'materi', content, button }) => {
  return (
    <Dialog.Root size={'lg'}>
      <Dialog.Trigger asChild colorPalette={'teal'}>
        <Box>
          {type === 'materi' && (
            <Button size="sm" variant="solid" roundedBottom={'lg'} fontSize="md">
              <GrView />
              {label}
            </Button>
          )}
          {type === 'menteeEdit' && <>{button}</>}
        </Box>
      </Dialog.Trigger>
      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content backgroundColor={'gray.300'} color={'textBlue'}>
            <Dialog.Header>
              <Dialog.Title>{title}</Dialog.Title>
            </Dialog.Header>
            <Dialog.Body>
              <p>{description}</p>
            </Dialog.Body>
            <Dialog.Body>
              {type === 'materi' && (
                <>
                  <UploadFile />
                  <HighlightText />
                </>
              )}
              {type === 'menteeEdit' && <>{content}</>}
            </Dialog.Body>
            {type === 'materi' ? (
              <Dialog.Footer>
                <Dialog.ActionTrigger asChild>
                  <Button variant="outline" backgroundColor={'black'}>
                    Cancel
                  </Button>
                </Dialog.ActionTrigger>
                <Button backgroundColor={'teal'} variant={'outline'}>
                  Save
                </Button>
              </Dialog.Footer>
            ) : null}
            <Dialog.CloseTrigger asChild>
              <CloseButton size="sm" color={'red'} backgroundColor={'white'} />
            </Dialog.CloseTrigger>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  );
};

export default Modal;
