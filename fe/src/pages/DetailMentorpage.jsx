import React from 'react';
import Layouts from '../components/Layouts/Layouts';
import { Box } from '@chakra-ui/react';
import { useParams } from 'react-router';
import { useState, useEffect } from 'react';
import { mentors } from '../utils/mentors';
const DetailMentorpage = () => {
  const { mentorId } = useParams();
  const [detailMentor, setDetailMentor] = useState(null);
  useEffect(() => {
    const mentor = mentors.find((mentor) => mentor.id === mentorId);

    setDetailMentor(mentor);
  }, [mentorId]);
  return (
    <>
      <Box>
        <Layouts>DetailMentor</Layouts>
      </Box>
    </>
  );
};

export default DetailMentorpage;
