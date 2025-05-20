import Navigation from '../components/Layouts/Navigation';
import { Box, Grid, GridItem } from '@chakra-ui/react';
import BreadcrumbLink from '../components/Fragments/Breadcrumb';
import { VscFolderLibrary } from 'react-icons/vsc';
import { PiBooksBold } from 'react-icons/pi';
import { useParams } from 'react-router';
import Ratio from '../components/Elements/Ratio';

const DetailClasspage = () => {
  const { classId } = useParams();
  const modul = [
    {
      id: '1',
      link: 'https://www.youtube.com/embed/jCb9fpPrxLc',
      title: 'Pengenalan Komputasi',
      createdAT: '2023-06-01',
      owner: 'John Doe',
    },
    {
      id: '2',
      link: 'https://www.youtube.com/embed/jCb9fpPrxLc',
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
  return (
    <>
      <Navigation type="sidebar">
        <Box marginLeft="10" marginRight="16" color="textBlue" mt={5}>
          <BreadcrumbLink links={links} color="textBlue" size="md" />
          <Grid templateColumns="repeat(5, 1fr)" mt={4}>
            <GridItem colSpan={4}>
              {modul.slice(0, 1).map((item) => (
                <Ratio link={item.link} title={item.title} />
              ))}
            </GridItem>
            <GridItem colSpan={1} border={'1px solid #E2E8F0'}>
              s
            </GridItem>
          </Grid>
        </Box>
      </Navigation>
    </>
  );
};

export default DetailClasspage;
