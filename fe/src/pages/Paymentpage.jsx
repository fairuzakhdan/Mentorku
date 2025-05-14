import { Box, Text, Flex } from '@chakra-ui/react';
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
  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <Layouts>
      <Box color={'textGreen'} w={300}>
        <CardHorizontal image={detailMentor.image} shadow="sm">
          <CardHorizontal.Header name={detailMentor.name} />
          {paymentMentor.schedules.map((schedule, index) => (
            <Flex key={index} gap={5} p={0} mt={3}>
              <Text p={0}>{schedule.days}</Text>
              <Text p={0}>{schedule.time}</Text>
            </Flex>
          ))}
        </CardHorizontal>
      </Box>
    </Layouts>
  );
};

export default Paymentpage;
