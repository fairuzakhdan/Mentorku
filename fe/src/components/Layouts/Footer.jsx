import React from 'react';
import { Grid, GridItem, Text, Flex } from '@chakra-ui/react';
import Logo from '../Elements/Logo';
import IconColor from '../Elements/IconButton';
import { FaFacebookF } from 'react-icons/fa6';
import { SiInstagram } from 'react-icons/si';
import { FaWhatsapp } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import { Link } from 'react-router';
import { FaLocationDot } from 'react-icons/fa6';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { IoMdMail } from 'react-icons/io';
const Footer = () => {
  return (
    <Grid
      rounded={'xl'}
      templateColumns={'repeat(5, 1fr)'}
      columnGap={5}
      my={10}
      backgroundColor="textGreen"
      color="white"
      padding={4}
    >
      <GridItem colSpan={2} backgroundColor={'#fff'} p={5} rounded={'xl'} color={'textBlue'}>
        <Logo />
        <Text fontSize="sm">
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
      <GridItem colSpan={1} display={'flex'} flexDirection={'column'} rowGap={7}>
        <Text fontSize={'xl'} fontWeight="semibold">
          Sitemap
        </Text>
        <Link>Homepage</Link>
        <Link>Mentoring Session</Link>
        <Link>Benefits</Link>
        <Link>Testimonials</Link>
        <Link>Top Mentor</Link>
      </GridItem>
      <GridItem colSpan={1} display={'flex'} flexDirection={'column'} rowGap={7}>
        <Text fontSize={'xl'} fontWeight="semibold">
          Platform
        </Text>
        <Link>Browse Mentors</Link>
        <Link>Web Dev</Link>
        <Link>UI/UX Designer</Link>
        <Link>AI & ML</Link>
        <Link>Software Engineer</Link>
      </GridItem>
      <GridItem
        colSpan={1}
        display={'flex'}
        flexDirection={'column'}
        rowGap={9}
        fontSize={'sm'}
        mr={5}
      >
        <Text fontSize={'xl'} fontWeight="semibold">
          Contact
        </Text>
        <Flex columnGap={4} alignItems={'center'}>
          <IconColor>
            <FaLocationDot />
          </IconColor>
          <Text>Jl. Mayor Syamsu No.1, Garut, Jawa Barat </Text>
        </Flex>
        <Flex columnGap={4} alignItems={'center'}>
          <IconColor>
            <BsFillTelephoneFill />
          </IconColor>
          <Text>62852639852 </Text>
        </Flex>
        <Flex columnGap={4} alignItems={'center'}>
          <IconColor>
            <IoMdMail />
          </IconColor>
          <Text>@mentorku </Text>
        </Flex>
      </GridItem>
    </Grid>
  );
};
export default Footer;
