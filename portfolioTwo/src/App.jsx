// src/App.jsx
import React from 'react';
import TopAppBar from './components/TopAppBar';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <TopAppBar />
      <main className="main-content">
        <section className="home-section">
          <h1>Welcome to My Portfolio</h1>
        </section>
        <section className="about-section">
          <h2>About Me</h2>
          <p>Some information about me...</p>
        </section>
        <section className="projects-section">
          <h2>My Projects</h2>
          <p>Some of my cool projects...</p>
        </section>
        <section className="contact-section">
          <h2>Contact</h2>
          <p>How to get in touch...</p>
        </section>
      </main>
    </div>
  );
};

export default App;
