import { useState, useEffect } from 'react';
import Sidebar from '../../shared/components/Sidebar';
import FormWebinar from '../components/Forms/FormWebinar';
import { itemWebinar } from '../utils/webinars';
import { useParams } from 'react-router';
const EditWebinarMentorpage = () => {
  const [webinar, setWebinar] = useState({});
  const { webinarId } = useParams();

  useEffect(() => {
    const webinar = itemWebinar.find((item) => item.id === webinarId);
    setWebinar(webinar);
  }, [webinarId]);
  return (
    <Sidebar type={'mentor'}>
      <FormWebinar initialData={webinar} type="edit" />
    </Sidebar>
  );
};

export default EditWebinarMentorpage;
