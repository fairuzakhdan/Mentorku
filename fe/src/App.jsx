import React from 'react';
import '@fontsource/poppins/400.css';
import Navigation from './components/Layouts/Navigation';
import Homepage from './pages/Homepage';
import Mentorpage from './pages/Mentorpage';
import { Routes, Route } from 'react-router';
import Footer from './components/Layouts/Footer';
import DetailMentorpage from './pages/DetailMentorpage';
import Paymentpage from './pages/Paymentpage';
import Activitypage from './pages/activitypage';
import Classpage from './pages/Classpage';
import DetailClasspage from './pages/DetailClasspage';
import Errorpage from './pages/404';
import Transactionpage from './pages/Transactionpage';
import Webinarpage from './pages/Webinarpage';
import Blogpage from './pages/Blog';

const App = () => {
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
          <Route element={<Activitypage />} path="/mentors/activity" />
          <Route element={<Classpage />} path="/mentors/class" />
          <Route element={<Transactionpage />} path="/mentors/transaction" />
          <Route element={<Webinarpage />} path="/mentors/webinar" />
          <Route element={<DetailClasspage />} path="/mentors/class/:classId" />
          <Route element={<Paymentpage />} path="/mentors/:mentorId/payment" />
          <Route element={<DetailMentorpage />} path="/mentors/:mentorId" />
          <Route element={<Blogpage />} path="/blog" />
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
