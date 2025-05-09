import React from 'react';
import '@fontsource/poppins/400.css';
import Navigation from './components/Layouts/Navigation';
import Homepage from './pages/Homepage';
import Mentorpage from './pages/Mentorpage';
import { Routes, Route } from 'react-router';

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
        </Routes>
      </main>
    </>
  );
};

export default App;
