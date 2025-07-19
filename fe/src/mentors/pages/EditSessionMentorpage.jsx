import Sidebar from '../../shared/components/Sidebar';
import FormSession from '../components/Forms/FormSession';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { updateSessionById, getSessionById } from '../../utils/sessions';
import { useNavigate } from 'react-router';
const EditSessionMentorpage = () => {
  const navigate = useNavigate();
  const [session, setSession] = useState({});
  const { sessionId } = useParams();
  useEffect(() => {
    getSessionById(sessionId)
      .then(({ data }) => {
        setSession(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [sessionId]);
  const updateSessionHandler = ({ day, meeting, session }) => {
    const body = { day, meeting, session };
    updateSessionById({ sessionId, body })
      .then(({ error, message }) => {
        if (error) {
          alert('failed to update');
        } else {
          alert(message);
          navigate('/sessions');
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  return (
    <Sidebar type={'mentor'}>
      <FormSession type="edit" initialData={session} onSubmitHanlder={updateSessionHandler} />
    </Sidebar>
  );
};

export default EditSessionMentorpage;
