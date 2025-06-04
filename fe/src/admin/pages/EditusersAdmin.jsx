import { useParams } from 'react-router';
import Sidebar from '../../shared/components/Sidebar';
import FormUsersAdmin from '../components/Forms/FormUsersAdmin';
import { itemUser } from '../utils/admin';
import { useState, useEffect } from 'react';
import { Box } from '@chakra-ui/react';
const EditUsersAdminpage = () => {
  const { userId } = useParams();
  const [user, setUser] = useState({});
  useEffect(() => {
    const userData = itemUser.find((item) => item.id === userId);
    setUser(userData);
  }, [userId]);
  return (
    <Sidebar type={'admin'}>
      <Box color={'textBlue'}>
        <FormUsersAdmin type="edit" onSubmit={(data) => console.log(data)} initialData={user} />
      </Box>
    </Sidebar>
  );
};

export default EditUsersAdminpage;
