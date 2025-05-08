import React from 'react';
import { Grid, GridItem, Text, Flex } from '@chakra-ui/react';
import Logo from '../Elements/Logo';
import IconColor from '../Elements/IconButton';
import { FaFacebookF } from 'react-icons/fa6';
import { SiInstagram } from 'react-icons/si';
import { FaWhatsapp } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
const Footer = () => {
  return (
    <Grid
      rounded={'xl'}
      templateColumns={'repeat(5, 1fr)'}
      columnGap={5}
      my={10}
      backgroundColor="textGreen"
      border={'1px solid #ccc'}
      color={'textBlue'}
      padding={4}
    >
      <GridItem colSpan={2} backgroundColor={'#fff'} p={5} rounded={'xl'}>
        <Logo />
        <Text>
          Sumber tepercaya Anda untuk menemukan mentor dan profesional industri yang sangat
          terpercaya, yang siap membantu memajukan karier Anda. Dengan pengalaman dan keahlian yang
          luas, para mentor kami siap memberikan panduan praktis dan wawasan berharga untuk
          mengembangkan keterampilan Anda di dunia profesional.
        </Text>

        <Flex gap={3} mt={5}>
          <IconColor>
            <FaFacebookF />
          </IconColor>
          <IconColor>
            <SiInstagram />
          </IconColor>
          <IconColor>
            <FaWhatsapp />
          </IconColor>
          <IconColor>
            <FaLinkedinIn />
          </IconColor>
        </Flex>
      </GridItem>
      <GridItem colSpan={1} border={'1px solid #ccc'}>
        w
      </GridItem>
      <GridItem colSpan={1} border={'1px solid #ccc'}>
        w
      </GridItem>
      <GridItem colSpan={1} border={'1px solid #ccc'}>
        w
      </GridItem>
    </Grid>
  );
};
export default Footer;
