/* eslint-disable no-unused-vars */
import Sidebar from '../../shared/components/Sidebar';
import FormSession from '../components/Forms/FormSession';
import { createSession } from '../../utils/sessions';
import { useNavigate } from 'react-router';
const AddSessionMentorpage = () => {
  const navigate = useNavigate();
  const addHandlerCreateSession = ({ day, session, meeting }) => {
    console.log({ day, session, meeting });
    createSession({ day, session, meeting })
      .then(({ data }) => {
        alert('Session successfully added');
        navigate('/sessions');
      })
      .catch((err) => {
        alert(err.message);
      });
  };
  return (
    <Sidebar type={'mentor'}>
      <FormSession type="add" onSubmitHanlder={addHandlerCreateSession} />
    </Sidebar>
  );
};
export default AddSessionMentorpage;
