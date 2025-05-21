import Navigation from '../components/Layouts/Navigation';
import { Box, Grid, GridItem, Text } from '@chakra-ui/react';
import BreadcrumbLink from '../components/Fragments/Breadcrumb';
import { VscFolderLibrary } from 'react-icons/vsc';
import { PiBooksBold } from 'react-icons/pi';
import { useParams } from 'react-router';
import Ratio from '../components/Elements/Ratio';
import { useEffect, useState } from 'react';

const DetailClasspage = () => {
  const { classId } = useParams();
  const [activeVideo, setActiveVideo] = useState([]);

  const modul = [
    {
      id: '1',
      link: 'https://www.youtube.com/embed/jCb9fpPrxLc',
      title: 'Berpikir Secara Computational Thinking',
      createdAT: '2023-06-01',
      owner: 'John Doe',
    },
    {
      id: '2',
      link: 'https://www.youtube.com/embed/oa-n-ppT-dk',
      title: 'Pengenalan Komputasi',
      createdAT: '2023-06-01',
      owner: 'John Doe',
    },
  ];
  const links = [
    {
      href: '/mentors/class',
      title: 'Kelas Saya',
      icon: VscFolderLibrary,
    },
    {
      href: '/mentors/class/' + classId,
      title: 'Kelas Saya',
      icon: PiBooksBold,
    },
  ];
  useEffect(() => {
    if (modul.length > 0) {
      setActiveVideo(modul[0]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <Navigation type="sidebar">
        <Box marginLeft="10" marginRight="16" color="textBlue" mt={5}>
          <BreadcrumbLink links={links} color="textGreen" size="md" />
          <Grid templateColumns="repeat(5, 1fr)" mt={4} border="1px solid #ccc">
            <GridItem colSpan={4}>
              <Ratio link={activeVideo.link} title={activeVideo.title} />
            </GridItem>
            <GridItem colSpan={1} padding={4} overflowY="auto" maxHeight="500px">
              {modul.map((item) => (
                <Box
                  key={item.id}
                  display={'flex'}
                  bgColor={activeVideo.id === item.id ? 'green.200' : 'white'}
                  p={2}
                  flexDirection={'column'}
                  mb={4}
                  onClick={() => setActiveVideo(item)}
                  cursor={'pointer'}
                >
                  <Text fontWeight="semibold" fontSize="sm">
                    {item.title}
                  </Text>
                  <Box fontSize="xs" color="gray.600">
                    {item.owner} – {new Date(item.createdAT).toLocaleDateString()}
                  </Box>
                </Box>
              ))}
            </GridItem>
          </Grid>
        </Box>
      </Navigation>
    </>
  );
};

export default DetailClasspage;
