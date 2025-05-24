import React from 'react';
import { Tabs } from '@chakra-ui/react';
import PropTypes from 'prop-types';

const TabsLink = ({ tabs }) => {
  return (
    <Tabs.Root defaultValue={tabs[0].value}>
      <Tabs.List borderBottom="1px solid #ccc" display="flex" justifyContent="space-around">
        {tabs.map((tab) => (
          <Tabs.Trigger
            key={tab.value}
            value={tab.value}
            width={'100%'}
            p={5}
            display="flex"
            alignItems="center"
            justifyContent="center"
            _selected={{
              borderBottom: '2px solid teal',
              color: 'teal',
            }}
          >
            {tab.label}
          </Tabs.Trigger>
        ))}
      </Tabs.List>
      {tabs.map((tab) => (
        <Tabs.Content value={tab.value} p={0} key={tab.value}>
          {tab.content}
        </Tabs.Content>
      ))}
    </Tabs.Root>
  );
};

export default TabsLink;
