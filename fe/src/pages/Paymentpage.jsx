import { Box, Text, Flex, Grid, GridItem, Image } from '@chakra-ui/react';
import Layouts from '../components/Layouts/Layouts';
import CardHorizontal from '../components/Fragments/CardHorizontal';
import { useParams } from 'react-router';
import { useEffect, useState } from 'react';
import { methodPayments, paymentMentor } from '../utils/mentors';
import FieldGroup from '../components/Fragments/Fieldset';
import IconColor from '../components/Elements/IconButton';
import { IoArrowBackCircleOutline } from 'react-icons/io5';
import { Link } from 'react-router';
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
      <Link to={`/mentors/${mentorId}`}>
        <Flex mt={3} mb={4} gap={3} alignItems={'center'}>
          <IconColor>
            <IoArrowBackCircleOutline />
          </IconColor>
          <Text fontSize={'xl'} fontWeight={'semibold'} color={'textGreen'}>
            Previous
          </Text>
        </Flex>
      </Link>
      <Grid templateColumns={'repeat(3, 1fr)'} justifyContent={'center'} h="80vh">
        <GridItem colSpan={2}>
          <Box color={'textGreen'} w={500} backgroundColor={'teal'} p={1} rounded={'md'}>
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
                {detailMentor.price.toLocaleString('id-ID', {
                  style: 'currency',
                  currency: 'IDR',
                  minimumFractionDigits: 0,
                })}
              </Text>
            </CardHorizontal>
          </Box>
        </GridItem>
        <GridItem colSpan={1} w={350}>
          <FieldGroup price={detailMentor.price} totalPrice={paymentMentor.totalPrice} />
          <Box border={'1px solid #b0acac'} mt={4} color={'gray.700'} p={2}>
            <Text fontWeight="semibold" fontSize="md" mb="2">
              Supported Payment Methods
            </Text>
            <Flex flexWrap={'wrap'} gap={3} justifyContent="space-evenly">
              {methodPayments.map((payment, index) => (
                <Image
                  key={index}
                  src={payment.images}
                  alt={payment.name}
                  w={59}
                  objectFit={'contain'}
                />
              ))}
            </Flex>
          </Box>
        </GridItem>
      </Grid>
    </Layouts>
  );
};

export default Paymentpage;
