import Sidebar from '../../shared/components/Sidebar';
import FormAddSession from '../components/Forms/FormAddSession';
const AddSessionMentorpage = () => {
  return (
    <Sidebar type={'mentor'}>
      <FormAddSession />
    </Sidebar>
  );
};
export default AddSessionMentorpage;
