import { Tabs } from '@chakra-ui/react';
import { LuFolder, LuSquareCheck, LuUser } from 'react-icons/lu';

const TabsLink = ({ plans, sessions }) => {
  return (
    <Tabs.Root defaultValue="plans" variant="line" colorScheme="teal">
      <Tabs.List p={1}>
        <Tabs.Trigger value="plans" color={'textBlue'} w={'full'}>
          Mentorship plans
        </Tabs.Trigger>
        <Tabs.Trigger value="sessions" color={'textBlue'} w={'full'}>
          Sessions
        </Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content value="plans" p={0}>
        {plans}
      </Tabs.Content>
      <Tabs.Content value="sessions" p={0}>
        {sessions}
      </Tabs.Content>
    </Tabs.Root>
  );
};
export default TabsLink;
