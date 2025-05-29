import Sidebar from '../../shared/components/Sidebar';
import TableArea from '../../components/Fragments/Table';
const WebinarMentorpage = () => {
  const headers = ['Topic', 'LinkWebinar', 'Date', 'Time', 'Description'];
  return (
    <Sidebar type={'mentor'}>
      <TableArea headers={headers}></TableArea>
    </Sidebar>
  );
};

export default WebinarMentorpage;
