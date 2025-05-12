import React from 'react';
import { Text, Timeline } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import { IoSchoolOutline } from 'react-icons/io5';
import { PiBagSimpleDuotone } from 'react-icons/pi';

const TimelineFlow = ({ mentor, type }) => {
  return (
    <Timeline.Root maxW="400px">
      {mentor.map((item, index) => (
        <Timeline.Item key={index}>
          <Timeline.Connector>
            <Timeline.Separator />
            <Timeline.Indicator>
              {type === 'experience' ? <PiBagSimpleDuotone /> : <IoSchoolOutline />}
            </Timeline.Indicator>
          </Timeline.Connector>
          <Timeline.Content>
            {type === 'experience' && (
              <>
                <Timeline.Title textStyle="sm" fontWeight="medium">
                  {item.position}
                </Timeline.Title>
                <Timeline.Description textStyle="sm">
                  {item.company} - {item.years}
                </Timeline.Description>
              </>
            )}
            {type === 'education' && (
              <Timeline.Title textStyle="sm" fontWeight="medium">
                {item.organization} - {item.major}
              </Timeline.Title>
            )}
          </Timeline.Content>
        </Timeline.Item>
      ))}
    </Timeline.Root>
  );
};

TimelineFlow.propTypes = {
  mentor: PropTypes.arrayOf(
    PropTypes.shape({
      position: PropTypes.string,
      company: PropTypes.string,
      years: PropTypes.string,
    }),
  ),
  type: PropTypes.string,
};
export default TimelineFlow;
