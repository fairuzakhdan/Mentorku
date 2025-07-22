import Sidebar from '../../shared/components/Sidebar';
import FormMentorAdmin from '../components/Forms/FormMentorAdmin';
import { Box } from '@chakra-ui/react';
import { useParams } from 'react-router';
import { useState, useEffect } from 'react';
import { getMentorIdForAdmin } from '../../utils/mentors';
const EditMentorAdminpage = () => {
  const [mentor, setMentor] = useState({});
  const { mentorId } = useParams();
  useEffect(() => {
    getMentorIdForAdmin(mentorId)
      .then(({ error, data }) => {
        if (error) {
          alert('failed fetch mentorId');
        } else {
          setMentor(data);
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [mentorId]);
  return (
    <Sidebar type={'admin'}>
      <Box color={'textBlue'}>
        <FormMentorAdmin type="edit" initialData={mentor} onSubmit={(data) => console.log(data)} />
      </Box>
    </Sidebar>
  );
};
export default EditMentorAdminpage;
