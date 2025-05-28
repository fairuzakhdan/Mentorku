import React from 'react';
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
import Registerpage from '../src/user/pages/registerpage';
import Loginpage from '../src/user/pages/Loginpage';
import UsersAdminpage from './admin/pages/UsersAdminpage';
import UsersMentorpage from './mentors/pages/UsersMentorpage';
import LessonsMentorpage from './mentors/pages/LessonsMentorpage';

const App = () => {
  const [authUser, setAuthUser] = useState(null);
  const [initializing, setInitializing] = useState(true);
  useEffect(() => {
    const name = {
      name: 'user',
      email: 'user@mail.com',
      role: 'mentor',
    };
    localStorage.setItem('authUser', JSON.stringify(name));
    const data = JSON.parse(localStorage.getItem('authUser'));
    setAuthUser(data);
    setInitializing(false);
  }, []);
  if (initializing) return null;

  if (authUser === null) {
    return (
      <main>
        <Routes>
          <Route element={<Loginpage />} path="/" />
          <Route element={<Registerpage />} path="/register" />
        </Routes>
      </main>
    );
  }
  if (authUser.role === 'admin') {
    return (
      <main>
        <Routes>
          <Route element={<UsersAdminpage />} path="/" />
          <Route element={<UsersAdminpage />} path="/users" />
          <Route element={<Registerpage />} path="/mentors" />
          <Route element={<Errorpage />} path={'*'} />
        </Routes>
      </main>
    );
  }
  if (authUser.role === 'mentor') {
    return (
      <main>
        <Routes>
          <Route element={<UsersMentorpage />} path="/" />
          <Route element={<UsersMentorpage />} path="/mentees" />
          <Route element={<LessonsMentorpage />} path="/mylessons" />
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
          <Route element={<Activitypage />} path="/mentors/activity" />
          <Route element={<Classpage />} path="/mentors/class" />
          <Route element={<Transactionpage />} path="/mentors/transaction" />
          <Route element={<Webinarpage />} path="/mentors/webinar" />
          <Route element={<DetailClasspage />} path="/mentors/class/:classId" />
          <Route element={<Paymentpage />} path="/mentors/:mentorId/payment" />
          <Route element={<DetailMentorpage />} path="/mentors/:mentorId" />
          <Route element={<Mentorpage />} path="/mentors" />
          <Route element={<Errorpage />} path={'*'} />
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default App;
