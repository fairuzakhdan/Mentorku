import Sidebar from '../../shared/components/Sidebar';
import FormSession from '../components/Forms/FormSession';
const AddSessionMentorpage = () => {
  return (
    <Sidebar type={'mentor'}>
      <FormSession type="add" onSubmitHanlder={(data) => console.log(data)} />
    </Sidebar>
  );
};
export default AddSessionMentorpage;
