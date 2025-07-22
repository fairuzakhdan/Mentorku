import Sidebar from '../../shared/components/Sidebar';
import { Box, Flex, Text } from '@chakra-ui/react';
import FormMentorAdmin from '../components/Forms/FormMentorAdmin';
import { createMentorForAdmin } from '../../utils/mentors';
import { useNavigate } from 'react-router';
const AddMentorAdminpage = () => {
  const navigate = useNavigate();
  const addMentorHandlerForAdmin = async ({
    name,
    password,
    email,
    role,
    linkedin,
    language,
    status,
    location,
    price,
    cvResume,
    portofolio,
    phone,
    skills,
    experience,
    expertise,
    summary,
    education,
  }) => {
    createMentorForAdmin({
      name,
      password,
      email,
      role,
      linkedin,
      language,
      status,
      location,
      price,
      cvResume,
      portofolio,
      phone,
      skills,
      experience,
      expertise,
      summary,
      education,
    })
      .then(({ error, data }) => {
        console.log(data);
        if (error) {
          alert('Add Mentor Failed');
        } else {
          alert('success');
          navigate('/mentors');
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  return (
    <Sidebar type={'admin'}>
      <Box color={'textBlue'}>
        <FormMentorAdmin type="add" onSubmit={addMentorHandlerForAdmin} />
      </Box>
    </Sidebar>
  );
};
export default AddMentorAdminpage;
