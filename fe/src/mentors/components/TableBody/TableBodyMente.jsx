import { Table, Button, Flex, Group, Text, Link, Box } from '@chakra-ui/react';
import { FaEdit } from 'react-icons/fa';
import { MdOutlineDeleteOutline } from 'react-icons/md';
import AvatarCard from '../../../components/Elements/Avatar';
import Modal from '../../../components/Fragments/Modal';
import FormInput from '../../../components/Elements/FormInput';
import useInput from '../../../hooks/useInput';
import { useState } from 'react';
import { updateMenteeForPaid } from '../../../utils/mentee';
const FormEditMentoring = ({ sessions, link, editMentoring, status }) => {
  const [linkMentoring, onChangeLinkMentoring] = useInput(link);
  const [sessionsMentoring, setSessionsMentoring] = useState(sessions);
  const [statusMentoring, onChangeStatusMentoring] = useInput(status);
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
              value={session.days}
              onChange={(e) => handleChangeSession(e, index, 'days')}
            />
            <FormInput
              label={'Time'}
              value={session.time}
              onChange={(e) => handleChangeSession(e, index, 'time')}
            />
          </Group>
        ))}
      </Flex>
      <Box mt={3} display={'flex'} columnGap={3}>
        <FormInput
          label={'Link Mentoring'}
          value={linkMentoring}
          onChange={onChangeLinkMentoring}
        />
        <FormInput
          label={'Status Payment'}
          value={statusMentoring}
          onChange={onChangeStatusMentoring}
        />
      </Box>
      <Button
        mt={3}
        colorPalette={'teal'}
        onClick={() => editMentoring({ linkMentoring, sessionsMentoring, statusMentoring })}
      >
        Edit
      </Button>
    </Box>
  );
};
const TableBodyMentee = ({ items, onDeleteById }) => {
  const [findId, setFindById] = useState({});
  const setId = (id) => {
    setFindById(id);
  };
  const editMentoringHandler = ({ linkMentoring, sessionsMentoring, statusMentoring }) => {
    updateMenteeForPaid({
      _id: findId,
      linkMeet: linkMentoring,
      status: statusMentoring,
      schedules: sessionsMentoring,
    })
      .then(({ error, message }) => {
        if (error) {
          alert(message);
        } else {
          alert(message);
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
    // console.log(findId);
    // console.log({ linkMentoring, sessionsMentoring, statusMentoring });
  };

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
              backgroundColor={item.status === 'success' ? 'green.500' : 'gray.500'}
              textAlign={'center'}
              color={'white'}
              py={1}
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
                    onClick={() => setId(item._id)}
                  >
                    <FaEdit />
                  </Button>
                }
                content={
                  <FormEditMentoring
                    sessions={item.schedules}
                    link={item.linkMeet}
                    status={item.status}
                    editMentoring={editMentoringHandler}
                  />
                }
              />
              <Button
                p={0}
                backgroundColor={'transparent'}
                color={'red'}
                _hover={{ color: 'gray.800' }}
                onClick={() => onDeleteById(item._id)}
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
