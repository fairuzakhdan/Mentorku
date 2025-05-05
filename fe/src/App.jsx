import React from 'react';
import '@fontsource/poppins/400.css';
import Navigation from './components/Layouts/Navigation';
import Homepage from './pages/Homepage';

const App = () => {
  return (
    <>
      <header style={{ borderBottom: '1px solid #ccc' }}>
        <Navigation />
      </header>
      <main>
        <Homepage />
      </main>
    </>
  );
};

export default App;
