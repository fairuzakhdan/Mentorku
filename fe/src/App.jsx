import React from 'react';
import ProtectedRoute from './components/Fragments/protectedRoute.jsx';
import { useState, useEffect } from 'react';
import '@fontsource/poppins/400.css';
import Navigation from './components/Layouts/Navigation';
import Homepage from '../src/user/pages/Homepage';
import Mentorpage from '../src/user/pages/Mentorpage';
import { Routes, Route } from 'react-router';
import Footer from './components/Layouts/Footer';
import DetailMentorpage from '../src/user/pages/DetailMentorpage';
import Paymentpage from '../src/user/pages/Paymentpage';
import Activitypage from '../src/user/pages/activitypage';
import Classpage from '../src/user/pages/Classpage';
import DetailClasspage from '../src/user/pages/DetailClasspage';
import Errorpage from './shared/pages/404';
import Transactionpage from '../src/user/pages/Transactionpage';
import Webinarpage from '../src/user/pages/Webinarpage';
import Blogpage from '../src/user/pages/Blog';
import DetailBlogpage from '../src/user/pages/DetailBlogpage';
import JoinUspage from '../src/user/pages/JoinUspage';
import AddMentorpage from '../src/user/pages/AddMentorpage';
import Registerpage from './user/pages/Registerpage.jsx';
import Loginpage from '../src/user/pages/Loginpage';
import UsersAdminpage from './admin/pages/UsersAdminpage';
import UsersMentorpage from './mentors/pages/UsersMentorpage';
import LessonsMentorpage from './mentors/pages/LessonsMentorpage';
import SessionMentorpage from './mentors/pages/SessionsMentorpage';
import WebinarMentorpage from './mentors/pages/WebinarsMentorpage';
import BlogMentorpage from './mentors/pages/BlogMentorpage';
import DetailUsersMentorpage from './mentors/pages/DetailUsersMentorpage.jsx';
import AddLessonMentorpage from './mentors/pages/AddLessonMentorpage.jsx';
import EditLessonMentorpage from './mentors/pages/EditLessonMentorpage.jsx';
import AddSessionMentorpage from './mentors/pages/AddSessionMentorpage.jsx';
import EditSessionMentorpage from './mentors/pages/EditSessionMentorpage.jsx';
import AddWebinarMentorpage from './mentors/pages/AddWebinarMentorpage.jsx';
import EditWebinarMentorpage from './mentors/pages/EditWebinarMentorpage.jsx';
import AddBlogMentorpage from './mentors/pages/AddBlogMentorpage.jsx';
import EditBlogMentorpage from './mentors/pages/EditBlogMentorpage.jsx';
import AddUsersAdminpage from './admin/pages/AddUsersAdmin.jsx';
import EditUsersAdminpage from './admin/pages/EditusersAdmin.jsx';
import MentorAdminpage from './admin/pages/MentorAdminpage.jsx';
import AddMentorAdminpage from './admin/pages/AddMentorAdminpage.jsx';
// import { useNavigate } from 'react-router';
import EditMentorAdminpage from './admin/pages/EditMentorAdminpage.jsx';
const App = () => {
  const [authUser, setAuthUser] = useState(null);
  // const [initializing, setInitializing] = useState(true);

  useEffect(() => {
    // const name = {
    //   email: 'ad@gmail.com',
    //   role: 'user',
    // };
    // localStorage.setItem('authUser', JSON.stringify(name));
    const storedUser = localStorage.getItem('authUser');
    if (storedUser) {
      setAuthUser(JSON.parse(storedUser));
    }
  }, []);
  // if (initializing) return null;

  if (authUser?.role === 'admin') {
    return (
      <main>
        <Routes>
          <Route element={<UsersAdminpage />} path="/" />
          <Route element={<UsersAdminpage />} path="/users" />
          <Route element={<AddUsersAdminpage />} path="/users/add" />
          <Route element={<EditUsersAdminpage />} path="/users/:userId" />
          <Route element={<MentorAdminpage />} path="/mentors" />
          <Route element={<AddMentorAdminpage />} path="/mentors/add" />
          <Route element={<EditMentorAdminpage />} path="/mentors/:mentorId" />
          <Route element={<Errorpage />} path={'*'} />
        </Routes>
      </main>
    );
  }
  if (authUser?.role === 'mentor') {
    return (
      <main>
        <Routes>
          <Route element={<UsersMentorpage />} path="/" />
          <Route element={<BlogMentorpage />} path="/blogs" />
          <Route element={<AddBlogMentorpage />} path="/blogs/add" />
          <Route element={<EditBlogMentorpage />} path="/blogs/:blogId" />
          <Route element={<UsersMentorpage />} path="/mentees" />
          <Route element={<DetailUsersMentorpage />} path="/mentees/:userId" />
          <Route element={<LessonsMentorpage />} path="/mylessons" />
          <Route element={<AddLessonMentorpage />} path="/mylessons/add" />
          <Route element={<EditLessonMentorpage />} path="/mylessons/:lessonId" />
          <Route element={<SessionMentorpage />} path="/sessions" />
          <Route element={<AddSessionMentorpage />} path="/sessions/add" />
          <Route element={<EditSessionMentorpage />} path="/sessions/:sessionId" />
          <Route element={<WebinarMentorpage />} path="/webinars" />
          <Route element={<AddWebinarMentorpage />} path="/webinars/add" />
          <Route element={<EditWebinarMentorpage />} path="/webinars/:webinarId" />

          <Route element={<Errorpage />} path={'*'} />
        </Routes>
      </main>
    );
  }
  return (
    <>
      <header
        style={{
          borderBottom: '1px solid #ccc',
          position: 'sticky',
          top: 0,
          backgroundColor: 'white',
          zIndex: 2,
        }}
      >
        <Navigation type="navbar" />
      </header>
      <main>
        <Routes>
          <Route element={<Homepage />} path="/" />
          <Route element={<Blogpage />} path="/blog" />
          <Route element={<DetailBlogpage />} path="/blog/:blogId" />
          <Route element={<JoinUspage />} path="/joinus" />
          <Route element={<AddMentorpage />} path="/joinus/add" />
          {/* <Route element={<Activitypage />} path="/mentors/activity" />
          <Route element={<Classpage />} path="/mentors/class" />
          <Route element={<Transactionpage />} path="/mentors/transaction" />
          <Route element={<Webinarpage />} path="/mentors/webinar" />
          <Route element={<DetailClasspage />} path="/mentors/class/:classId" /> */}
          <Route path="/login" element={<Loginpage />} />
          <Route path="/register" element={<Registerpage />} />
          <Route element={<DetailMentorpage />} path="/mentors/:mentorId" />
          <Route element={<Mentorpage />} path="/mentors" />
          <Route element={<Errorpage />} path={'*'} />
          <Route
            path="/mentors/:mentorId/payment"
            element={
              <ProtectedRoute>
                <Paymentpage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/mentors/activity"
            element={
              <ProtectedRoute>
                <Activitypage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/mentors/class"
            element={
              <ProtectedRoute>
                <Classpage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/mentors/class/:classId"
            element={
              <ProtectedRoute>
                <DetailClasspage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/mentors/transaction"
            element={
              <ProtectedRoute>
                <Transactionpage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/mentors/webinar"
            element={
              <ProtectedRoute>
                <Webinarpage />
              </ProtectedRoute>
            }
          />
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default App;
