import { Highlight } from '@chakra-ui/react';

const HighlightText = () => {
  return (
    <Highlight query="2Mb" styles={{ px: '0.5', color: 'teal' }}>
      The file size for content.tsx is 2Mb
    </Highlight>
  );
};
export default HighlightText;
