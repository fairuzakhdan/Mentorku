import Navigation from '../../components/Layouts/Navigation';
import {
  Box,
  Grid,
  GridItem,
  Flex,
  Button,
  Text,
  Image,
  Group,
  Stack,
  Link,
} from '@chakra-ui/react';
import BreadcrumbLink from '../../components/Fragments/Breadcrumb';
import { VscFolderLibrary } from 'react-icons/vsc';
import CardBox from '../../components/Fragments/CardBox';
import CircleBadge from '../../components/Elements/Badge';
import { getAllWebinarByPayment } from '../../utils/webinars';
import { useEffect, useState } from 'react';

const Webinarpage = () => {
  const [webinars, setWebinars] = useState([]);
  const links = [
    {
      title: 'Webinar',
      href: '/mentors/webinar',
      icon: VscFolderLibrary,
    },
  ];
  // const webinars = [
  //   {
  //     title: 'Persiapan Karir diera digital',
  //     image:
  //       'https://images.unsplash.com/photo-1742119971773-57e0131095b0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjZ8fGVudGVwcmVuZXVyfGVufDB8fDB8fHww',
  //     description:
  //       'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora, odio esse inventore similique tempore dolore autem eum? Similique dolor veritatis voluptatem tenetur deserunt quibusdam ut laborum mollitia, vitae ea! Beatae. Mollitia, magni aliquid porro accusamus unde neque! Soluta repellat enim molestias officiis nesciunt quae in tempora odit voluptatem corrupti, possimus repudiandae sequi sint beatae architecto alias nam facilis minus Aperiam officia eos accusantium distinctio quaerat? Dolores repellat quia distinctio placeat aperiam, deleniti iure eos magnam maxime, voluptatem qui ipsum porro nisi recusandae. Deserunt officiis facilis, molestias fuga ea nemo. Atque est accusantium sed quam impedit corrupti facere eos itaque quaerat. Alias molestiae quis dicta ratione hic sint culpa tempora quia consequatur expedita. Nesciunt, error distinctio at quod facere sunt. Neque dignissimos ipsum, exercitationem possimus aliquid odio, tempora corrupti necessitatibus optio expedita nobis unde aut aliquam illo et quae adipisci assumenda, dolor pariatur accusantium. Unde placeat neque dignissimos debitis vel. rem',
  //     datetime: '5/07/2025',
  //     linkMeet: 'https://meet.google.com/pre-ztbc-ohe',
  //   },
  //   {
  //     title: 'Persiapan Karir diera digital',
  //     image:
  //       'https://images.unsplash.com/photo-1742119971773-57e0131095b0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjZ8fGVudGVwcmVuZXVyfGVufDB8fDB8fHww',
  //     description:
  //       'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora, odio esse inventore similique tempore dolore autem eum? Similique dolor veritatis voluptatem tenetur deserunt quibusdam ut laborum mollitia, vitae ea! Beatae. Mollitia, magni aliquid porro accusamus unde neque! Soluta repellat enim molestias officiis nesciunt quae in tempora odit voluptatem corrupti, possimus repudiandae sequi sint beatae architecto alias nam facilis minus Aperiam officia eos accusantium distinctio quaerat? Dolores repellat quia distinctio placeat aperiam, deleniti iure eos magnam maxime, voluptatem qui ipsum porro nisi recusandae. Deserunt officiis facilis, molestias fuga ea nemo. Atque est accusantium sed quam impedit corrupti facere eos itaque quaerat. Alias molestiae quis dicta ratione hic sint culpa tempora quia consequatur expedita. Nesciunt, error distinctio at quod facere sunt. Neque dignissimos ipsum, exercitationem possimus aliquid odio, tempora corrupti necessitatibus optio expedita nobis unde aut aliquam illo et quae adipisci assumenda, dolor pariatur accusantium. Unde placeat neque dignissimos debitis vel. rem',
  //     datetime: '5/07/2025',
  //     linkMeet: 'https://meet.google.com/pre-ztbc-ohe',
  //   },
  //   {
  //     title: 'Persiapan Karir diera digital',
  //     image:
  //       'https://images.unsplash.com/photo-1742119971773-57e0131095b0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjZ8fGVudGVwcmVuZXVyfGVufDB8fDB8fHww',
  //     description:
  //       'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora, odio esse inventore similique tempore dolore autem eum? Similique dolor veritatis voluptatem tenetur deserunt quibusdam ut laborum mollitia, vitae ea! Beatae. Mollitia, magni aliquid porro accusamus unde neque! Soluta repellat enim molestias officiis nesciunt quae in tempora odit voluptatem corrupti, possimus repudiandae sequi sint beatae architecto alias nam facilis minus Aperiam officia eos accusantium distinctio quaerat? Dolores repellat quia distinctio placeat aperiam, deleniti iure eos magnam maxime, voluptatem qui ipsum porro nisi recusandae. Deserunt officiis facilis, molestias fuga ea nemo. Atque est accusantium sed quam impedit corrupti facere eos itaque quaerat. Alias molestiae quis dicta ratione hic sint culpa tempora quia consequatur expedita. Nesciunt, error distinctio at quod facere sunt. Neque dignissimos ipsum, exercitationem possimus aliquid odio, tempora corrupti necessitatibus optio expedita nobis unde aut aliquam illo et quae adipisci assumenda, dolor pariatur accusantium. Unde placeat neque dignissimos debitis vel. rem',
  //     datetime: '5/07/2025',
  //     linkMeet: 'https://meet.google.com/pre-ztbc-ohe',
  //   },
  //   {
  //     title: 'Persiapan Karir diera digital',
  //     image:
  //       'https://images.unsplash.com/photo-1742119971773-57e0131095b0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjZ8fGVudGVwcmVuZXVyfGVufDB8fDB8fHww',
  //     description:
  //       'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora, odio esse inventore similique tempore dolore autem eum? Similique dolor veritatis voluptatem tenetur deserunt quibusdam ut laborum mollitia, vitae ea! Beatae. Mollitia, magni aliquid porro accusamus unde neque! Soluta repellat enim molestias officiis nesciunt quae in tempora odit voluptatem corrupti, possimus repudiandae sequi sint beatae architecto alias nam facilis minus Aperiam officia eos accusantium distinctio quaerat? Dolores repellat quia distinctio placeat aperiam, deleniti iure eos magnam maxime, voluptatem qui ipsum porro nisi recusandae. Deserunt officiis facilis, molestias fuga ea nemo. Atque est accusantium sed quam impedit corrupti facere eos itaque quaerat. Alias molestiae quis dicta ratione hic sint culpa tempora quia consequatur expedita. Nesciunt, error distinctio at quod facere sunt. Neque dignissimos ipsum, exercitationem possimus aliquid odio, tempora corrupti necessitatibus optio expedita nobis unde aut aliquam illo et quae adipisci assumenda, dolor pariatur accusantium. Unde placeat neque dignissimos debitis vel. rem',
  //     datetime: '5/07/2025',
  //     linkMeet: 'https://meet.google.com/pre-ztbc-ohe',
  //   },
  //   {
  //     title: 'Persiapan Karir diera digital',
  //     image:
  //       'https://images.unsplash.com/photo-1742119971773-57e0131095b0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjZ8fGVudGVwcmVuZXVyfGVufDB8fDB8fHww',
  //     description:
  //       'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora, odio esse inventore similique tempore dolore autem eum? Similique dolor veritatis voluptatem tenetur deserunt quibusdam ut laborum mollitia, vitae ea! Beatae. Mollitia, magni aliquid porro accusamus unde neque! Soluta repellat enim molestias officiis nesciunt quae in tempora odit voluptatem corrupti, possimus repudiandae sequi sint beatae architecto alias nam facilis minus Aperiam officia eos accusantium distinctio quaerat? Dolores repellat quia distinctio placeat aperiam, deleniti iure eos magnam maxime, voluptatem qui ipsum porro nisi recusandae. Deserunt officiis facilis, molestias fuga ea nemo. Atque est accusantium sed quam impedit corrupti facere eos itaque quaerat. Alias molestiae quis dicta ratione hic sint culpa tempora quia consequatur expedita. Nesciunt, error distinctio at quod facere sunt. Neque dignissimos ipsum, exercitationem possimus aliquid odio, tempora corrupti necessitatibus optio expedita nobis unde aut aliquam illo et quae adipisci assumenda, dolor pariatur accusantium. Unde placeat neque dignissimos debitis vel. rem',
  //     datetime: '5/07/2025',
  //     linkMeet: 'https://meet.google.com/pre-ztbc-ohe',
  //   },
  // ];
  useEffect(() => {
    getAllWebinarByPayment()
      .then(({ data }) => {
        if (data.length > 0) {
          setWebinars(data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <Navigation type="sidebar">
      <Box marginLeft="10" marginRight="16" color="textBlue" mt={5}>
        <BreadcrumbLink links={links} color="textBlue" size="md" />
        <Grid templateColumns={'repeat(3, 1fr)'} gap={4} flexWrap={'wrap'} mt={3}>
          {webinars.map((webinar, index) => (
            <GridItem key={index} colSpan={1}>
              <CardBox
                borderLeft="7px solid white"
                backgroundColor="textGreen"
                hover={{
                  transform: 'scale(1.02)',
                  transition: 'all 0.3s ease-in-out',
                  backgroundColor: 'gray',
                }}
              >
                <Group p={3}>
                  <Image
                    src={webinar.mentorId.profilePicture.url}
                    width={100}
                    height={150}
                    rounded={'full'}
                  />
                  <Stack>
                    <CardBox.Header fontSize="lg" name={webinar.title} />
                    <Text textAlign={'end'} fontSize={'sm'} ml={5} color={'gray.200'}>
                      {webinar.datetime}
                    </Text>
                    <Link
                      href={webinar.linkMeet}
                      display={'block'}
                      ml={5}
                      backgroundColor={'yellow.400'}
                      p={2}
                      rounded={'md'}
                      color={'black'}
                      textAlign={'center'}
                      fontSize={'md'}
                    >
                      Join Webinar
                    </Link>
                  </Stack>
                </Group>
              </CardBox>
            </GridItem>
          ))}
        </Grid>
      </Box>
    </Navigation>
  );
};
export default Webinarpage;
