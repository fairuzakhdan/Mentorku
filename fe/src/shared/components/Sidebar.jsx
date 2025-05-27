import { Grid, GridItem, Link, Stack, Text } from '@chakra-ui/react';
const Sidebar = ({ activitys, children }) => {
  return (
    <Grid templateColumns={'repeat(6, 1fr)'} mb="-10" height={'90vh'}>
      <GridItem colSpan={1} borderRight={'1px solid #ccc'}>
        <Stack paddingLeft={5} paddingBlock={5} alignItems="flex-start" rowGap={7}>
          <Stack color={'gray.700'} alignItems={'center'} m="auto" rowGap={5}>
            <Image
              src="https://img.freepik.com/premium-vector/person-with-blue-shirt-that-says-name-person_1029948-7040.jpg?semt=ais_hybrid&w=740"
              width={100}
              height={100}
              objectFit={'cover'}
              rounded={'full'}
            />
            <Text fontSize={'lg'} fontWeight={'semibold'}>
              Fairuz Akhdan
            </Text>
          </Stack>
          {activitys.map((activity) => {
            const isActive = location.pathname === activity.href;
            return (
              <Link to={activity.href} key={activity.href} style={{ width: '100%' }}>
                <Group
                  color={isActive ? 'teal' : 'gray.600'}
                  columnGap={3}
                  width={'90%'}
                  p={2}
                  rounded={'lg'}
                  backgroundColor={isActive ? '#ccc' : 'transparent'}
                  _hover={{ color: 'teal', backgroundColor: '#ccc' }}
                >
                  <activity.icon size={20} />
                  <Text>{activity.title}</Text>
                </Group>
              </Link>
            );
          })}
        </Stack>
      </GridItem>
      <GridItem colSpan={5} backgroundColor={'gray.200'}>
        {children}
      </GridItem>
    </Grid>
  );
};

export default Sidebar;
