import { Table, Button, Flex, Group, Text, Link, Box } from '@chakra-ui/react';
import { FaEdit } from 'react-icons/fa';
import { MdOutlineDeleteOutline } from 'react-icons/md';
import AvatarCard from '../../../components/Elements/Avatar';
import Modal from '../../../components/Fragments/Modal';
import FormInput from '../../../components/Elements/FormInput';
import useInput from '../../../hooks/useInput';
import { useState } from 'react';

const FormEditMentoring = ({ sessions, link, editMentoring }) => {
  const [linkMentoring, onChangeLinkMentoring] = useInput(link);
  const [sessionsMentoring, setSessionsMentoring] = useState(sessions);
  const handleChangeSession = (event, index, field) => {
    const updated = [...sessionsMentoring];
    updated[index] = {
      ...updated[index],
      [field]: event.target.value,
    };
    setSessionsMentoring(updated);
  };
  return (
    <Box>
      <Flex columnGap={3}>
        {sessionsMentoring.map((session, index) => (
          <Group key={index} padding="2" rounded={'md'} bg={'white'}>
            <FormInput
              label={'Day'}
              value={session.day}
              onChange={(e) => handleChangeSession(e, index, 'day')}
            />
            <FormInput
              label={'Time'}
              value={session.time}
              onChange={(e) => handleChangeSession(e, index, 'time')}
            />
          </Group>
        ))}
      </Flex>
      <Box mt={3}>
        <FormInput
          label={'Link Mentoring'}
          value={linkMentoring}
          onChange={onChangeLinkMentoring}
        />
      </Box>
      <Button
        mt={3}
        colorPalette={'teal'}
        onClick={() => editMentoring({ linkMentoring, sessionsMentoring })}
      >
        Edit
      </Button>
    </Box>
  );
};
const TableBodyMentee = ({ items, onDeleteById }) => {
  return (
    <>
      {items.map((item, index) => (
        <Table.Row key={index} backgroundColor={'gray.200'}>
          <Table.Cell>{index + 1}</Table.Cell>
          <Table.Cell>{item.userId.email}</Table.Cell>
          <Table.Cell>{item.userId.fullName}</Table.Cell>
          <Table.Cell>{item.userId.telephone}</Table.Cell>
          <Table.Cell>
            <AvatarCard image={item.userId.profilePicture.url} size="2xs" rounded="full" />
          </Table.Cell>
          <Table.Cell>
            <Flex columnGap={3}>
              {item.schedules.map((session, index) => (
                <Group key={index}>
                  <Text color={'teal'}>{session.days}</Text>
                  <Text color={'red.500'}>{session.time}</Text>
                </Group>
              ))}
            </Flex>
          </Table.Cell>
          <Table.Cell color={'blue.700'}>
            {item.linkMeet.length < 1 ? (
              <Text color={'red'}>No Set</Text>
            ) : (
              <Link href={item.linkMeet} color={'blue.700'}>
                {item.linkMeet.substring(0, 20)}
              </Link>
            )}
          </Table.Cell>
          <Table.Cell p={0}>
            <Text
              backgroundColor={'green.500'}
              textAlign={'center'}
              color={'white'}
              p={0}
              rounded={'md'}
            >
              {item.status}
            </Text>
          </Table.Cell>
          <Table.Cell textAlign={'center'} p={0}>
            <Flex>
              <Modal
                type="menteeEdit"
                title={'Edit Mentoring Session'}
                button={
                  <Button
                    p={0}
                    backgroundColor={'transparent'}
                    color={'textGreen'}
                    _hover={{ color: 'gray.800' }}
                    // onClick={() => toDetailById(item.id)}
                  >
                    <FaEdit />
                  </Button>
                }
                content={<FormEditMentoring sessions={item.sessions} link={item.linkMentoring} />}
              />
              <Button
                p={0}
                backgroundColor={'transparent'}
                color={'red'}
                _hover={{ color: 'gray.800' }}
                onClick={() => onDeleteById(item.id)}
              >
                <MdOutlineDeleteOutline />
              </Button>
            </Flex>
          </Table.Cell>
        </Table.Row>
      ))}
    </>
  );
};
export default TableBodyMentee;
