import React from 'react';
import { ProgressCircle } from '@chakra-ui/react';

const Progress = () => {
  return (
    <ProgressCircle.Root value={75}>
      <ProgressCircle.Circle>
        <ProgressCircle.Track />
        <ProgressCircle.Range strokeLinecap="round" />
      </ProgressCircle.Circle>
    </ProgressCircle.Root>
  );
};
export default Progress;
