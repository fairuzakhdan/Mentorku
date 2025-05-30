import FormInput from '../../../components/Elements/FormInput';
import { Box, Group, Flex, Stack, Button, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { FormTextArea } from '../../../components/Elements/FormInput';
import { CiEdit } from 'react-icons/ci';
const FormEditSession = () => {
  const [session, setSession] = useState({
    day: '',
    time: '',
    times: [],
    duration: '',
  });
  const data = {
    id: '1',
    day: 'Senin',
    times: [
      {
        duration: '08:00-10:00',
      },
      {
        duration: '14:00-16:00',
      },
      {
        duration: '20:00-22:00',
      },
    ],
    session: 2,
  };
  const onChangeDay = (e) => {
    const { value } = e.target;
    setSession({ ...session, day: value });
  };
  const onChangeNumberSession = (e) => {
    const { value } = e.target;
    setSession({ ...session, session: value });
  };
  useEffect(() => {
    setSession(data);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Stack rowGap={4} color={'textBlue'}>
      <Flex columnGap={5}>
        <FormInput
          label={'Edit Day'}
          value={session.day}
          onChange={onChangeDay}
          required
          type="text"
          placeholder={'Enter Edit day session'}
        />
        <FormInput
          label={'Edit Session/week'}
          value={session.session}
          onChange={onChangeNumberSession}
          required
          type="text"
          placeholder={'Enter Edit day session'}
        />
      </Flex>
      <Flex columnGap={3} flexWrap={'wrap'}>
        {session.times.map((time, index) => (
          <Group key={index} padding="2" rounded={'md'} bg={'white'}>
            <FormInput
              label={'Edit Time'}
              value={time.duration}
              onChange={(e) => {
                const updated = [...session.times];
                updated[index] = {
                  ...updated[index],
                  duration: e.target.value,
                };
                setSession({ ...session, times: updated });
              }}
            />
          </Group>
        ))}
      </Flex>
    </Stack>
  );
};

export default FormEditSession;
