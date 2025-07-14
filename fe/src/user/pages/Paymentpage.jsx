import { Box, Text, Flex, Grid, GridItem, Image } from '@chakra-ui/react';
import Layouts from '../../components/Layouts/Layouts';
import CardHorizontal from '../../components/Fragments/CardHorizontal';
import { useParams } from 'react-router';
import { useEffect, useState } from 'react';
import { methodPayments } from '../../utils/mentors';
import FieldGroup from '../../components/Fragments/Fieldset';
import IconColor from '../../components/Elements/IconButton';
import { IoArrowBackCircleOutline } from 'react-icons/io5';
import { Link } from 'react-router';
import { useLocation } from 'react-router';
import { useNavigate } from 'react-router';
import { handleSnapPayment, requestSnapToken, loadMidtransScript } from '../../utils/payment';

const Paymentpage = () => {
  const { mentorId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const [snapReady, setSnapReady] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const payment = location.state?.payment;

  useEffect(() => {
    loadMidtransScript()
      .then(() => setSnapReady(true))
      .catch((err) => console.error(err));

    setIsLoading(false);
  }, []);

  const addPayment = async () => {
    try {
      const paymentData = {
        user: {
          first_name: payment?.user?.first_name || 'User',
          email: payment?.user?.email || 'user@example.com',
        },
        userId: payment?.userId,
        totalPrice: payment?.totalPrice,
        schedules: payment?.schedules,
      };

      const data = await requestSnapToken(mentorId, paymentData);
      if (data?.token) {
        handleSnapPayment(data.token, () => navigate('/mentors/activity'));
      }
    } catch (err) {
      console.error('Gagal memproses pembayaran:', err);
    }
  };

  if (isLoading) return <div>Loading...</div>;
  if (!snapReady || typeof window.snap === 'undefined') return <div>Memuat pembayaran...</div>;

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
          <Box w={500} backgroundColor={'teal'} p={1} rounded={'md'} color={'white'}>
            <CardHorizontal type={'image'} image={payment.mentorId.image} height={175}>
              <CardHorizontal.Header name={payment.mentorId.name} title={payment.mentorId.role} />
              {payment.schedules.map((schedule, idx) => (
                <Flex key={idx} mt={3} justifyContent={'space-between'} w={200}>
                  <Text>{schedule.days}</Text>
                  <Text>{schedule.time}</Text>
                </Flex>
              ))}
              <Text
                mt={3}
                fontWeight={'bold'}
                fontSize={'xl'}
                textAlign={'right'}
                color={'red.500'}
              >
                {payment.mentorId.price.toLocaleString('id-ID', {
                  style: 'currency',
                  currency: 'IDR',
                  minimumFractionDigits: 0,
                })}
              </Text>
            </CardHorizontal>
          </Box>
        </GridItem>

        <GridItem colSpan={1} w={350}>
          <FieldGroup
            price={payment.mentorId.price}
            totalPrice={payment.totalPrice}
            onClick={addPayment}
          />
          <Box border={'1px solid #b0acac'} mt={4} p={2} rounded={'lg'}>
            <Text fontWeight="semibold" mb={2}>
              Supported Payment Methods
            </Text>
            <Flex flexWrap={'wrap'} gap={3} justifyContent="space-evenly">
              {methodPayments.map((m, i) => (
                <Image key={i} src={m.images} alt={m.name} w={59} objectFit={'contain'} />
              ))}
            </Flex>
          </Box>
        </GridItem>
      </Grid>
    </Layouts>
  );
};

export default Paymentpage;
