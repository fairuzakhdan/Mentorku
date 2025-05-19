import React from 'react';
import { ProgressCircle, AbsoluteCenter, Text, Image } from '@chakra-ui/react';
import PropTypes from 'prop-types';

const Progress = ({ value, image }) => {
  return (
    <ProgressCircle.Root value={value} position="relative" size="xl" colorPalette={'teal'}>
      <ProgressCircle.Circle>
        <ProgressCircle.Track />
        <ProgressCircle.Range strokeLinecap="round" />
      </ProgressCircle.Circle>
      <ProgressCircle.ValueText top={0} left={0} right={0} bottom={0} position="absolute" p={2}>
        <Image
          src={image}
          boxSize="full"
          objectFit="cover"
          borderRadius="full"
          objectPosition={'center'}
        />
      </ProgressCircle.ValueText>
    </ProgressCircle.Root>
  );
};
Progress.propTypes = {
  value: PropTypes.number,
};
export default Progress;
