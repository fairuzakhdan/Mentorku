import Sidebar from '../../shared/components/Sidebar';
import FormBlog from '../components/Forms/FormBlog';

const AddBlogMentorpage = () => {
  return (
    <Sidebar type={'mentor'}>
      <FormBlog type="add" />
    </Sidebar>
  );
};

export default AddBlogMentorpage;
