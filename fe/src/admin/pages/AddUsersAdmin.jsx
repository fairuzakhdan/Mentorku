import Sidebar from '../../shared/components/Sidebar';
import { Box, Text } from '@chakra-ui/react';
import FormUsersAdmin from '../components/Forms/FormUsersAdmin';
import { createUser } from '../../utils/users';
import { useNavigate } from 'react-router';
const AddUsersAdminpage = () => {
  const navigate = useNavigate();
  const createUserHandler = ({ email, password, fullName, institution, telephone }) => {
    createUser({ email, password, fullName, institution, telephone })
      .then(({ error }) => {
        if (error) {
          alert('Added users failed');
        } else {
          alert('Added users successfully');
          navigate('/users');
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  return (
    <Sidebar type={'admin'}>
      <Box color={'textBlue'}>
        <FormUsersAdmin type="add" onSubmit={createUserHandler} />
      </Box>
    </Sidebar>
  );
};

export default AddUsersAdminpage;
