import { useParams } from 'react-router';
import Sidebar from '../../shared/components/Sidebar';
import FormUsersAdmin from '../components/Forms/FormUsersAdmin';
import { useState, useEffect } from 'react';
import { Box } from '@chakra-ui/react';
import { getUserById } from '../../utils/users';
import { updateUserById } from '../../utils/users';
import { useNavigate } from 'react-router';
const EditUsersAdminpage = () => {
  const { userId } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  useEffect(() => {
    getUserById(userId)
      .then(({ data }) => {
        setUser(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [userId]);
  const editUserHandler = ({ email, password, fullName, institution, telephone }) => {
    const body = { email, password, fullName, institution, telephone };
    // console.log(body);
    updateUserById({ userId, body })
      .then(({ error, message }) => {
        if (error) {
          alert(message);
        } else {
          alert(message);
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
        <FormUsersAdmin type="edit" onSubmit={editUserHandler} initialData={user} />
      </Box>
    </Sidebar>
  );
};

export default EditUsersAdminpage;
