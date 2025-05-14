import { Box, Text, Flex, Grid, GridItem } from '@chakra-ui/react';
import Layouts from '../components/Layouts/Layouts';
import CardHorizontal from '../components/Fragments/CardHorizontal';
import { useParams } from 'react-router';
import { useEffect, useState } from 'react';
import { paymentMentor } from '../utils/mentors';
import FieldGroup from '../components/Fragments/Fieldset';
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
      <Grid
        templateColumns={'repeat(3, 1fr)'}
        justifyContent={'center'}
        border={'1px solid #ccc'}
        h="70vh"
        mt={10}
      >
        <GridItem colSpan={2}>
          <Box color={'textGreen'} w={500} backgroundColor={'textGreen'} p={2} rounded={'md'}>
            <CardHorizontal type={'image'} image={detailMentor.image}>
              <CardHorizontal.Header name={detailMentor.name} title={detailMentor.role} />
              {paymentMentor.schedules.map((schedule, index) => (
                <Flex
                  key={index}
                  mt={3}
                  alignItems={'center'}
                  p={0}
                  justifyContent={'space-between'}
                  w={200}
                >
                  <Text p={0}>{schedule.days}</Text>
                  <Text p={0}>{schedule.time}</Text>
                </Flex>
              ))}
              <Text textAlign={'right'} mt={3} fontWeight={'bold'} fontSize={'xl'} color={'red'}>
                {paymentMentor.totalPrice.toLocaleString('id-ID', {
                  style: 'currency',
                  currency: 'IDR',
                })}
              </Text>
            </CardHorizontal>
          </Box>
        </GridItem>
        <GridItem colSpan={1} border={'1px solid #ccc'}>
          <FieldGroup />
        </GridItem>
      </Grid>
    </Layouts>
  );
};

export default Paymentpage;
