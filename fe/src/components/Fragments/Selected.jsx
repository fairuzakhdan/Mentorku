import React, { useState, useEffect } from 'react';
import { Box, Flex, Text, Portal, Select, createListCollection } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import { getAllSessionByMentorId } from '../../utils/sessions';
import { useParams } from 'react-router';

const sessions = [
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

const Selected = ({ addDays }) => {
  const { mentorId } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [frameworks, setFrameworks] = useState([]);
  const [selectedDays, setSelectedDays] = useState({}); //contoh:{ Senin: '08:00-10:00' }

  const handleSelect = (day, value) => {
    setSelectedDays((prev) => {
      const updated = { ...prev, [day]: value };
      // Batasi maksimal 2 pilihan hari
      const dayKeys = Object.keys(updated);
      if (dayKeys.length > 2) {
        delete updated[dayKeys[0]]; //hapus yang paling awal dipilih
      }
      return updated;
    });
  };

  useEffect(() => {
    //UseEffect to call addDays only after the state is updated
    if (Object.keys(selectedDays).length > 0) {
      addDays(selectedDays);
    }
    // setIsLoading(true);
    if (formate)
    // setFrameworks(sessions);
    // console.log(sessions);
    // setIsLoading(false);
  }, [selectedDays, addDays, mentorId]); //Runs when selectedDays changes

  // if (isLoading) {
  //   return <div>Loading...</div>;
  // }
  return (
    <Box width="100%" maxW="500px" mt={5}>
      <Flex justifyContent="space-between" mx="8">
        <Text fontWeight="bold" mb={2} color={'teal'}>
          Days
        </Text>
        <Text fontWeight="bold" mb={2} color={'teal'}>
          Time
        </Text>
      </Flex>
      <Flex justifyContent="space-evenly" alignItems="center">
        <Box minW="80px" mr={4}>
          {frameworks.map((f, index) => (
            <Text key={f.id} mb={6}>
              {f.day}
            </Text>
          ))}
        </Box>

        <Box width={150}>
          {frameworks.map((f, index) => {
            const isDisabled = !selectedDays[f.day] && Object.keys(selectedDays).length >= 2;

            const collection = isDisabled ? null : createListCollection({ items: f.times });
            return (
              <Box key={f.id} mb={4}>
                <Select.Root
                  collection={collection}
                  onValueChange={(val) => handleSelect(f.day, val)}
                  // disabled={isDisabled}
                >
                  <Select.HiddenSelect />
                  <Select.Control>
                    <Select.Trigger border="1px solid teal">
                      <Select.ValueText placeholder="Pilih Waktu" color="teal" />
                    </Select.Trigger>
                    <Select.IndicatorGroup>
                      <Select.Indicator />
                    </Select.IndicatorGroup>
                  </Select.Control>
                  <Portal>
                    <Select.Positioner>
                      <Select.Content backgroundColor="teal" color="white">
                        {f.times.map((time, index) => (
                          <Select.Item key={time.id} item={time}>
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
Selected.propTypes = {
  addDays: PropTypes.func,
};

export default Selected;
