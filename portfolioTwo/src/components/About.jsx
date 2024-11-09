// src/components/About.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import '/src/styles/About.css';

const About = () => {
  return (
    <Router basename='/portfolioTwo'>
    <section className="about-section">
      <h2>About Me</h2>
      <div className="about-content">
        <div className="about-text">
          <p>Hello, I'm Harry Foley, a passionate software engineer with a focus on creative coding, audio technology, and interaction design. My work bridges the gap between engineering and creativity, allowing me to build innovative solutions that push boundaries.</p>
          <p>I have experience in full-stack development, augmented reality, and music & acoustic engineering. My goal is to use technology to create meaningful experiences and improve lives, especially in the realm of neurodevelopmental disorders.</p>
        </div>
        <div className="about-photo">
          <img src="path/to/your/photo.jpg" alt="Harry Foley" />
        </div>
      </div>
    </section>
    </Router>
  );
};

export default About;
