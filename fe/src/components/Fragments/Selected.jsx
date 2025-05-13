'use client';

import React from 'react';
import { Box, Flex, Text, Portal, Select, createListCollection } from '@chakra-ui/react';

const frameworks = [
  {
    day: 'Senin',
    times: [
      { value: '08:00-10:00', label: '08:00-10:00' },
      { value: '14:00-16:00', label: '14:00-16:00' },
      { value: '20:00-22:00', label: '20:00-22:00' },
    ],
  },
  {
    day: 'Rabu',
    times: [
      { value: '09:00-11:00', label: '09:00-11:00' },
      { value: '20:00-22:00', label: '20:00-22:00' },
    ],
  },
  {
    day: 'Jumat',
    times: [
      { value: '08:00-10:00', label: '08:00-10:00' },
      { value: '20:00-22:00', label: '20:00-22:00' },
    ],
  },
];

const Selected = () => {
  return (
    <Box width="100%" maxW="500px" mt={6}>
      <Flex>
        <Box minW="80px" mr={4}>
          <Text fontWeight="bold" mb={2}>
            Days
          </Text>
          {frameworks.map((f) => (
            <Text key={f.day} mb={6}>
              {f.day}
            </Text>
          ))}
        </Box>

        <Box width={150}>
          <Text fontWeight="bold" mb={2}>
            Times
          </Text>
          {frameworks.map((f) => {
            const collection = createListCollection({
              items: f.times,
            });

            return (
              <Box key={f.day} mb={4}>
                <Select.Root collection={collection}>
                  <Select.HiddenSelect />
                  <Select.Control>
                    <Select.Trigger>
                      <Select.ValueText placeholder="Pilih Waktu" />
                    </Select.Trigger>
                    <Select.IndicatorGroup>
                      <Select.Indicator />
                    </Select.IndicatorGroup>
                  </Select.Control>
                  <Portal>
                    <Select.Positioner>
                      <Select.Content>
                        {f.times.map((time) => (
                          <Select.Item key={time.value} item={time}>
                            {time.label}
                            <Select.ItemIndicator />
                          </Select.Item>
                        ))}
                      </Select.Content>
                    </Select.Positioner>
                  </Portal>
                </Select.Root>
              </Box>
            );
          })}
        </Box>
      </Flex>
    </Box>
  );
};

export default Selected;
