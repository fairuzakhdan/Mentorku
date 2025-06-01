import { Box, Stack, Flex, Group, Button, Text } from '@chakra-ui/react';
import FormInput from '../../../components/Elements/FormInput';
import useInput from '../../../hooks/useInput';
import { IoIosAddCircle } from 'react-icons/io';
import { useState, useEffect } from 'react';
const FormSession = ({ initialData, type = 'add', onSubmitHanlder }) => {
  const [times, setTimes] = useState([]);
  const [day, onChangeDay, setDay] = useInput('');
  const [session, onChangeSession, setSession] = useInput('');
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
  };

  useEffect(() => {
    if (type === 'edit') {
      setTimes(initialData.times || []);
      setDay(initialData.day || '');
      setSession(initialData.session || '');
      // setDuration(initialData.duration || '');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialData]);
  const changeHandleTimes = (e, index, field) => {
    const updateTime = [...times];
    updateTime[index][field] = e.target.value;
    setTimes(updateTime);
  };
  const submitHandler = () => {
    onSubmitHanlder({ day, session, times });
  };
  return (
    <>
      <Stack rowGap={5} color={'textBlue'}>
        <Flex columnGap={5} backgroundColor={'white'} p={5} rounded={'lg'}>
          <FormInput
            label={type === 'add' ? 'Add Day' : 'Edit Day'}
            required
            value={day}
            onChange={onChangeDay}
            placeholder={'Enter day session'}
            type="text"
          />
          <FormInput
            label={type === 'add' ? 'Add Session' : 'Edit Session'}
            required
            value={session}
            onChange={onChangeSession}
            placeholder={'2 Sesssion/week'}
            type="number"
          />
        </Flex>
        {type === 'add' && (
          <Flex columnGap={5} alignItems={'end'} backgroundColor={'white'} p={5} rounded={'lg'}>
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
        )}
        <Flex columnGap={5}>
          {times.map((time, index) => (
            <Box key={index}>
              {type === 'add' && (
                <Text color={'red'} fontSize={'sm'}>
                  Duration : {time.duration}
                </Text>
              )}
              {type === 'edit' && (
                <FormInput
                  label={'Edit Duration'}
                  required
                  value={time.duration}
                  onChange={(e) => changeHandleTimes(e, index, 'duration')}
                  placeholder={'Enter duration'}
                  type="text"
                />
              )}
            </Box>
          ))}
        </Flex>
        <Button
          colorPalette={'teal'}
          onClick={() => submitHandler()}
          width={'fit-content'}
          alignSelf={'end'}
        >
          {type === 'add' ? 'Add Session' : 'Update Session'}
        </Button>
      </Stack>
    </>
  );
};
export default FormSession;
