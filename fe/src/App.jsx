import React from 'react';
import '@fontsource/poppins/400.css';
import Navigation from './components/Layouts/Navigation';
import Homepage from './pages/Homepage';
import Mentorpage from './pages/Mentorpage';
import { Routes, Route } from 'react-router';
import Footer from './components/Layouts/Footer';
import DetailMentorpage from './pages/DetailMentorpage';

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
        <Navigation />
      </header>
      <main>
        <Routes>
          <Route element={<Homepage />} path="/" />
          <Route element={<Mentorpage />} path="/mentors" />
          <Route element={<DetailMentorpage />} path="/mentors/:mentorId" />
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default App;
