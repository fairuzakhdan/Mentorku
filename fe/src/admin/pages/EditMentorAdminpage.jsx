import Sidebar from '../../shared/components/Sidebar';
import FormMentorAdmin from '../components/Forms/FormMentorAdmin';
import { Box } from '@chakra-ui/react';
import { useParams } from 'react-router';
import { mentors as itemMentor } from '../../utils/mentors';
import { useState, useEffect } from 'react';
const EditMentorAdminpage = () => {
  const [mentor, setMentor] = useState({});
  const { mentorId } = useParams();
  useEffect(() => {
    const findMentor = itemMentor.find((item) => item.id === mentorId);
    setMentor(findMentor);
  }, [mentorId]);
  return (
    <Sidebar type={'admin'}>
      <Box color={'textBlue'}>
        <FormMentorAdmin type="edit" initialData={mentor} />
      </Box>
    </Sidebar>
  );
};
export default EditMentorAdminpage;
