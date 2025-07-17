import { useState, useEffect } from 'react';
import Sidebar from '../../shared/components/Sidebar';
import FormWebinar from '../components/Forms/FormWebinar';
import { useParams } from 'react-router';
import { updateWebinarById } from '../../utils/webinars';
import { useNavigate } from 'react-router';
import { getWebinarById } from '../../utils/webinars';

const EditWebinarMentorpage = () => {
  const [webinar, setWebinar] = useState({});
  const { webinarId } = useParams();
  const navigate = useNavigate('');

  const updateByIdHandler = ({ topic, linkWebinar, date, time, description }) => {
    const body = { title: topic, linkMeet: linkWebinar, date, time, description };
    updateWebinarById(webinarId, body)
      .then(({ error, message }) => {
        if (error) {
          alert(message);
        } else {
          alert(message);
          navigate('/webinars');
        }
      })
      .catch((err) => {
        console.error('Terjadi error saat update:', err);
      });
  };

  useEffect(() => {
    getWebinarById(webinarId)
      .then(({ data }) => {
        setWebinar(data);
      })
      .catch((err) => {
        alert(err.message);
      });
  }, [webinarId]);
  return (
    <Sidebar type={'mentor'}>
      <FormWebinar initialData={webinar} type="edit" onSubmit={updateByIdHandler} />
    </Sidebar>
  );
};

export default EditWebinarMentorpage;
