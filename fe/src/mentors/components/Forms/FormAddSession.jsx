import { Box, Stack, Flex, Group, Button, Text } from '@chakra-ui/react';
import FormInput from '../../../components/Elements/FormInput';
import useInput from '../../../hooks/useInput';
import { IoIosAddCircle } from 'react-icons/io';
import { useState } from 'react';
const FormAddSession = () => {
  const [times, setTimes] = useState([]);
  const [day, onChangeDay] = useInput('');
  const [session, onChangeSession] = useInput('');
  const [duration, onChangeDuration] = useInput('');
  const addDuration = ({ duration }) => {
    if (!duration) {
      alert('Duration tidak boleh kosong');
      return;
    }
    const newDuration = {
      duration,
    };
    setTimes([...times, newDuration]);
    // setDuration('');
  };

  return (
    <>
      <Stack rowGap={5} color={'textBlue'}>
        <Flex columnGap={5}>
          <FormInput
            label={'Add Day'}
            required
            value={day}
            onChange={onChangeDay}
            placeholder={'Enter day session'}
            type="text"
          />
          <FormInput
            label={'Add Session'}
            required
            value={session}
            onChange={onChangeSession}
            placeholder={'2 Sesssion/week'}
            type="number"
          />
        </Flex>
        <Flex columnGap={5} alignItems={'end'}>
          <Box width={'30%'}>
            <FormInput
              label={'Add Duration'}
              required
              value={duration}
              onChange={onChangeDuration}
              placeholder={'08:00-10:00'}
              type="text"
            />
          </Box>
          <Button colorPalette={'teal'} onClick={() => addDuration({ duration })}>
            Add Duration
          </Button>
        </Flex>
        <Flex columnGap={5}>
          {times.map((time, index) => (
            <Text key={index} color={'red'} fontSize={'sm'}>
              Duration : {time.duration}
            </Text>
          ))}
        </Flex>
      </Stack>
      <Box position={'fixed'} right={10} bottom={10} colorPalette={'teal'} rounded={'full'} p={0}>
        <IoIosAddCircle
          size={60}
          color="teal"
          cursor={'pointer'}
          //   onClick={() => addLessons({ topic, videos, articles })}
        />
      </Box>
    </>
  );
};
export default FormAddSession;
