// App.jsx (Clean Code Version
import React, { useState, useEffect, useMemo } from 'react';
import { Routes, Route, useNavigate, Navigate } from 'react-router';
import '@fontsource/poppins/400.css';
import AuthContext from './shared/context/authContext.jsx';
// Layouts
import Navigation from './components/Layouts/Navigation';
import Footer from './components/Layouts/Footer';
import { putAccessToken } from './utils/api.js';
import { getUserLogin } from './utils/auth.js';

// Protected
import ProtectedRoute from './components/Fragments/protectedRoute.jsx';
// User Pages
import Homepage from '../src/user/pages/Homepage';
import Mentorpage from '../src/user/pages/Mentorpage';
import DetailMentorpage from '../src/user/pages/DetailMentorpage';
import Paymentpage from '../src/user/pages/Paymentpage';
import Activitypage from '../src/user/pages/activitypage';
import Classpage from '../src/user/pages/Classpage';
import DetailClasspage from '../src/user/pages/DetailClasspage';
import Transactionpage from '../src/user/pages/Transactionpage';
import Webinarpage from '../src/user/pages/Webinarpage';
import Blogpage from '../src/user/pages/Blog';
import DetailBlogpage from '../src/user/pages/DetailBlogpage';
import JoinUspage from '../src/user/pages/JoinUspage';
import AddMentorpage from '../src/user/pages/AddMentorpage';
import Registerpage from './user/pages/Registerpage.jsx';
import Loginpage from '../src/user/pages/Loginpage';

// Admin Pages
import UsersAdminpage from './admin/pages/UsersAdminpage';
import AddUsersAdminpage from './admin/pages/AddUsersAdmin.jsx';
import EditUsersAdminpage from './admin/pages/EditusersAdmin.jsx';
import MentorAdminpage from './admin/pages/MentorAdminpage.jsx';
import AddMentorAdminpage from './admin/pages/AddMentorAdminpage.jsx';
import EditMentorAdminpage from './admin/pages/EditMentorAdminpage.jsx';

// Mentor Pages
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

import Errorpage from './shared/pages/404';

const App = () => {
  const navigate = useNavigate();
  const [authUser, setAuthUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const { data, error } = await getUserLogin();
        if (error || !data) {
          putAccessToken('');
          return;
        }
        setAuthUser(data);
      } catch (err) {
        console.error('User not logged in:', err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, []);

  const loginSuccessToken = async (accessToken) => {
    try {
      setLoading(true);
      putAccessToken(accessToken);
      const { data } = await getUserLogin();
      setAuthUser(data);
      alert('Login Success');
      navigate('/');
    } catch (error) {
      console.error('Login error:', error.message);
    } finally {
      setLoading(false);
    }
  };

  const onLogoutHandler = () => {
    setAuthUser(null);
    putAccessToken('');
  };

  const authContextValue = useMemo(() => {
    return { authUser, setAuthUser };
  }, [authUser]);

  if (loading) return <p style={{ textAlign: 'center' }}>Loading...</p>;

  if (authUser?.accessLevel === 'admin') {
    return (
      <AuthContext.Provider value={authContextValue}>
        <main>
          <Routes>
            <Route path="/" element={<UsersAdminpage />} />
            <Route path="/users" element={<UsersAdminpage />} />
            <Route path="/users/add" element={<AddUsersAdminpage />} />
            <Route path="/users/:userId" element={<EditUsersAdminpage />} />
            <Route path="/mentors" element={<MentorAdminpage />} />
            <Route path="/mentors/add" element={<AddMentorAdminpage />} />
            <Route path="/mentors/:mentorId" element={<EditMentorAdminpage />} />
            <Route path="*" element={<Errorpage />} />
          </Routes>
        </main>
      </AuthContext.Provider>
    );
  }

  if (authUser?.accessLevel === 'mentor') {
    return (
      <AuthContext.Provider value={authContextValue}>
        <main>
          <Routes>
            <Route path="/" element={<UsersMentorpage />} />
            <Route path="/blogs" element={<BlogMentorpage />} />
            <Route path="/blogs/add" element={<AddBlogMentorpage />} />
            <Route path="/blogs/:blogId" element={<EditBlogMentorpage />} />
            <Route path="/mentees" element={<UsersMentorpage />} />
            <Route path="/mentees/:userId" element={<DetailUsersMentorpage />} />
            <Route path="/mylessons" element={<LessonsMentorpage />} />
            <Route path="/mylessons/add" element={<AddLessonMentorpage />} />
            <Route path="/mylessons/:lessonId" element={<EditLessonMentorpage />} />
            <Route path="/sessions" element={<SessionMentorpage />} />
            <Route path="/sessions/add" element={<AddSessionMentorpage />} />
            <Route path="/sessions/:sessionId" element={<EditSessionMentorpage />} />
            <Route path="/webinars" element={<WebinarMentorpage />} />
            <Route path="/webinars/add" element={<AddWebinarMentorpage />} />
            <Route path="/webinars/:webinarId" element={<EditWebinarMentorpage />} />
            <Route path="*" element={<Errorpage />} />
          </Routes>
        </main>
      </AuthContext.Provider>
    );
  }

  return (
    <AuthContext.Provider value={authContextValue}>
      <header
        style={{
          borderBottom: '1px solid #ccc',
          position: 'sticky',
          top: 0,
          backgroundColor: 'white',
          zIndex: 2,
        }}
      >
        <Navigation type="navbar" onLogout={onLogoutHandler} />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/blog" element={<Blogpage />} />
          <Route path="/blog/:blogId" element={<DetailBlogpage />} />
          <Route path="/joinus" element={<JoinUspage />} />
          <Route path="/joinus/add" element={<AddMentorpage />} />
          <Route path="/login" element={<Loginpage onLoginSuccess={loginSuccessToken} />} />
          <Route path="/register" element={<Registerpage />} />
          <Route path="/mentors" element={<Mentorpage />} />
          <Route path="/mentors/:mentorId" element={<DetailMentorpage />} />
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
            path="/mentors/class/:mentorId"
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
          <Route path="*" element={<Errorpage />} />
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </AuthContext.Provider>
  );
};

export default App;
