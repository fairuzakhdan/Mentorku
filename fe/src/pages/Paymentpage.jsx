import { Box, Text } from '@chakra-ui/react';
import Layouts from '../components/Layouts/Layouts';
import CardHorizontal from '../components/Fragments/CardHorizontal';
import { useParams } from 'react-router';
import { useEffect, useState } from 'react';
import { paymentMentor } from '../utils/mentors';
const Paymentpage = () => {
  const { mentorId } = useParams();
  const [detailMentor, setDetailMentor] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const mentor = paymentMentor.mentorId.find((mentor) => mentor.id === mentorId);
    setDetailMentor(mentor);
    setIsLoading(false);
  }, [mentorId]);
  console.log(detailMentor);
  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <Layouts>
      <Box color={'textGreen'}>
        <CardHorizontal image={detailMentor.image}>
          <CardHorizontal.Header />
          <CardHorizontal.Body />
        </CardHorizontal>
      </Box>
    </Layouts>
  );
};

export default Paymentpage;
