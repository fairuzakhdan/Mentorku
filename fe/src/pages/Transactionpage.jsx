import Navigation from '../components/Layouts/Navigation';
import { Box, Text, Flex, Grid, GridItem, Button, Stack } from '@chakra-ui/react';
import CardHorizontal from '../components/Fragments/CardHorizontal';
import BreadcrumbLink from '../components/Fragments/Breadcrumb';
import { VscFolderLibrary } from 'react-icons/vsc';
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
    {
      id: '2',
      name: 'John Doe',
      role: 'UI/UX Designer',
      image:
        'https://images.unsplash.com/photo-1742119971773-57e0131095b0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjZ8fGVudGVwcmVuZXVyfGVufDB8fDB8fHww',
      price: 75000,
      schedules: [
        { days: 'Senin', time: '08.00 - 10.00' },
        { days: 'Rabu', time: '20.00 - 10.00' },
        { days: 'Rabu', time: '20.00 - 10.00' },
      ],
    },
  ];
  const links = [
    {
      title: 'Transaction',
      href: '/mentors/transaction',
      icon: VscFolderLibrary,
    },
  ];
  return (
    <>
      <Navigation type="sidebar">
        <Box marginLeft="10" marginRight="16" color="textBlue" mt={5}>
          <BreadcrumbLink links={links} color="textBlue" size="md" />

          <Stack mt={3} rowGap={3}>
            {mentors.map((mentor) => (
              <CardHorizontal
                type="image"
                image={mentor.image}
                key={mentor.id}
                borderLeft="7px solid teal"
                border="none"
                height={120}
                shadow={'sm'}
              >
                <Flex w={'60vw'}>
                  <Box flex={5}>
                    <CardHorizontal.Header name={mentor.name} title={mentor.role} />
                    <Flex gap={3}>
                      {mentor.schedules.map((schedule, index) => (
                        <Text
                          key={index}
                          fontWeight={'semibold'}
                          color="gray.700"
                          border={'1px solid teal'}
                          p={1}
                          rounded={'md'}
                        >
                          {schedule.days} {schedule.time}
                        </Text>
                      ))}
                    </Flex>
                    <Text fontSize={'lg'} color="red" fontWeight={'bold'}>
                      {mentor.price.toLocaleString('id-ID', {
                        style: 'currency',
                        currency: 'IDR',
                        minimumFractionDigits: 0,
                      })}
                    </Text>
                  </Box>
                  <Box flex={1}>
                    <Text
                      p={1}
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
          </Stack>
        </Box>
      </Navigation>
    </>
  );
};
export default Transactionpage;
