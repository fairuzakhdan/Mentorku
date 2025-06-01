import Sidebar from '../../shared/components/Sidebar';
import FormAddSession from '../components/Forms/FormSession';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { itemSession } from '../utils/mentorrole';
const EditSessionMentorpage = () => {
  const [session, setSession] = useState({});
  const { sessionId } = useParams();
  useEffect(() => {
    const session = itemSession.find((item) => item.id === sessionId);
    setSession(session);
  }, [sessionId]);
  return (
    <Sidebar type={'mentor'}>
      <FormAddSession
        type="edit"
        initialData={session}
        onSubmitHanlder={(data) => console.log(data)}
      />
    </Sidebar>
  );
};

export default EditSessionMentorpage;
