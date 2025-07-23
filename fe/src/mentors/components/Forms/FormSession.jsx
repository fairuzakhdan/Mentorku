import { Box, Stack, Flex, Group, Button, Text } from '@chakra-ui/react';
import FormInput from '../../../components/Elements/FormInput';
import useInput from '../../../hooks/useInput';
import { IoIosAddCircle } from 'react-icons/io';
import { useState, useEffect } from 'react';
const FormSession = ({ initialData, type = 'add', onSubmitHanlder }) => {
  const [session, setSession] = useState([]);
  const [day, onChangeDay, setDay] = useInput('');
  // const [meeting, onChangeMeeting, setMeeting] = useInput('');
  const [times, onChangeTimes] = useInput('');
  const addDuration = ({ times }) => {
    if (!times) {
      alert('Duration tidak boleh kosong');
      return;
    }
    const newTimes = {
      times,
    };
    setSession([...session, newTimes]);
  };

  useEffect(() => {
    if (type === 'edit') {
      setSession(initialData.session || []);
      setDay(initialData.day || '');
      // setMeeting(initialData.meeting || '');
      // setDuration(initialData.duration || '');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialData]);
  const changeHandleTimes = (e, index, field) => {
    const updateTime = [...session];
    updateTime[index][field] = e.target.value;
    setSession(updateTime);
  };
  const submitHandler = () => {
    onSubmitHanlder({ day, session });
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
          {/* <FormInput
            label={type === 'add' ? 'Add Session' : 'Edit Session'}
            required
            value={meeting}
            onChange={onChangeMeeting}
            placeholder={'2 Sesssion/week'}
            type="number"
          /> */}
        </Flex>
        {type === 'add' && (
          <Flex columnGap={5} alignItems={'end'} backgroundColor={'white'} p={5} rounded={'lg'}>
            <Box width={'30%'}>
              <FormInput
                label={'Add Duration'}
                required
                value={times}
                onChange={onChangeTimes}
                placeholder={'08:00-10:00'}
                type="text"
              />
            </Box>
            <Button colorPalette={'teal'} onClick={() => addDuration({ times })}>
              Add Duration
            </Button>
          </Flex>
        )}
        <Flex columnGap={5}>
          {session.map((time, index) => (
            <Box key={index}>
              {type === 'add' && (
                <Text color={'red'} fontSize={'sm'}>
                  Duration : {time.times}
                </Text>
              )}
              {type === 'edit' && (
                <FormInput
                  label={'Edit Duration'}
                  required
                  value={time.times}
                  onChange={(e) => changeHandleTimes(e, index, 'times')}
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
