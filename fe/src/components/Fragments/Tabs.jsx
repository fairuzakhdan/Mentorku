import { Tabs } from '@chakra-ui/react';
import React from 'react';
import PropTypes from 'prop-types';

const TabsLink = ({ plans, sessions }) => {
  return (
    <Tabs.Root defaultValue="plans">
      <Tabs.List borderBottom="1px solid #ccc" display="flex" justifyContent="space-around">
        <Tabs.Trigger
          value="plans"
          w="full"
          p={5}
          display="flex"
          alignItems="center"
          justifyContent="center"
          _selected={{
            borderBottom: '2px solid teal',
            color: 'teal',
          }}
        >
          Mentorship plans
        </Tabs.Trigger>
        <Tabs.Trigger
          value="sessions"
          w="full"
          p={5}
          display="flex"
          alignItems="center"
          justifyContent="center"
          _selected={{
            borderBottom: '2px solid teal',
            color: 'teal',
          }}
        >
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
TabsLink.propTypes = {
  plans: PropTypes.node,
  sessions: PropTypes.node,
};

export default TabsLink;
