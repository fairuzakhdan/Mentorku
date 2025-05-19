import React from 'react';
import { ProgressCircle } from '@chakra-ui/react';
import PropTypes from 'prop-types';

const Progress = ({ value }) => {
  return (
    <ProgressCircle.Root value={value}>
      <ProgressCircle.Circle>
        <ProgressCircle.Track />
        <ProgressCircle.Range strokeLinecap="round" />
      </ProgressCircle.Circle>
    </ProgressCircle.Root>
  );
};
Progress.propTypes = {
  value: PropTypes.number,
};
export default Progress;
