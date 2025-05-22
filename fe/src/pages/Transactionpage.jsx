import Navigation from '../components/Layouts/Navigation';
import { Box, Text, Flex, Grid, GridItem, Button } from '@chakra-ui/react';
import CardHorizontal from '../components/Fragments/CardHorizontal';
const Transactionpage = () => {
  const mentors = [
    {
      id: '1',
      name: 'John Doe',
      role: 'UI/UX Designer',
      image:
        'https://images.unsplash.com/photo-1623366302587-b38b1ddaefd9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTF8fGVudGVwcmVuZXVyfGVufDB8fDB8fHww',
      price: 75000,
      schedules: [
        { days: 'Senin', time: '08.00 - 10.00' },
        { days: 'Rabu', time: '20.00 - 10.00' },
      ],
    },
  ];
  return (
    <>
      <Navigation type="sidebar">
        <Box marginLeft="10" marginRight="16" color="textBlue" mt={5}>
          <Text fontSize={'2xl'} fontWeight={'medium'}>
            Transaction
          </Text>

          <Box mt={3} flex={5}>
            {mentors.map((mentor) => (
              <CardHorizontal
                type="image"
                image={mentor.image}
                key={mentor.id}
                border="none"
                backgroundColor="gray.200"
              >
                <Flex w={'60vw'}>
                  <Box flex={5}>
                    <CardHorizontal.Header name={mentor.name} title={mentor.role} />
                  </Box>
                  <Box flex={1}>
                    <Text
                      p={2}
                      color="white"
                      fontSize={'lg'}
                      backgroundColor="green.500"
                      textAlign={'center'}
                      rounded={'md'}
                    >
                      Selesai
                    </Text>
                  </Box>
                </Flex>
              </CardHorizontal>
            ))}
          </Box>
        </Box>
      </Navigation>
    </>
  );
};
export default Transactionpage;
