import { Box, Grid, GridItem, Image, Text, Stack, Flex, Button, Group } from '@chakra-ui/react';
import Layouts from '../components/Layouts/Layouts';
import { Link } from 'react-router';
import AvatarCard from '../components/Elements/Avatar';
const JoinUspage = () => {
  return (
    <>
      <Box backgroundColor="textGreen">
        <Layouts>
          <Grid templateColumns="repeat(3, 1fr)" columnGap={5} pt={5}>
            <GridItem colSpan={1}>
              <Image src="src\assets\images\hero-textGreen.png" />
            </GridItem>
            <GridItem colSpan={2} p={5}>
              <Stack color={'white'} rowGap={5}>
                <Text fontSize={'4xl'} fontWeight={'semibold'}>
                  Bagikan keahlian Anda, kembangkan dan mari membuat perbedaan dengan Mentor On
                  Demand
                </Text>
                <Text>
                  Tingkatkan keterampilan digital, tambah portopolio, dan siapkan karir kamu untuk
                  jadi talenta digital handal bersama MentorKu #TwogetherWithMentorku
                </Text>

                <Text
                  backgroundColor={'#FFC107'}
                  width={'fit-content'}
                  px={3}
                  py={2}
                  color={'black'}
                  fontWeight={'semibold'}
                  mt={3}
                  rounded={'lg'}
                >
                  <Link to="/joinus/add">Gabung Jadi Mentor </Link>
                </Text>
              </Stack>
            </GridItem>
          </Grid>
        </Layouts>
      </Box>
      <Layouts>
        <Stack rowGap={5} mt={10} align={'center'}>
          <Text fontSize={'xl'} textAlign={'center'} color={'gray.600'}>
            "Saya Mendapat beberapa panggilan telephone dengan Mentee minggu ini, dan setiap orang
            dari mereka sangat berwawasan, ceria, membangikan semangat dan penuh dengan pertukaran
            ide."
          </Text>
          <Group>
            <AvatarCard image="https://images.unsplash.com/photo-1742119971773-57e0131095b0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjZ8fGVudGVwcmVuZXVyfGVufDB8fDB8fHww" />
          </Group>
        </Stack>
      </Layouts>
    </>
  );
};

export default JoinUspage;
