import { Box, Grid, GridItem, Image, Text, Stack, Flex, Button } from '@chakra-ui/react';
import Layouts from '../components/Layouts/Layouts';
import { Link } from 'react-router';
const JoinUspage = () => {
  return (
    <Box backgroundColor="textGreen">
      <Layouts>
        <Grid templateColumns="repeat(3, 1fr)" columnGap={5} pt={5}>
          <GridItem colSpan={1}>
            <Image src="src\assets\images\hero-textGreen.png" />
          </GridItem>
          <GridItem colSpan={2} p={5}>
            <Stack color={'white'} rowGap={5}>
              <Text fontSize={'4xl'} fontWeight={'semibold'}>
                Bagikan keahlian Anda, kembangkan dan mari membuat perbedaan dengan Mentor On Demand
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
  );
};

export default JoinUspage;
