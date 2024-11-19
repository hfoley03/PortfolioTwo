// src/components/About.jsx
import React from 'react';
import '/src/styles/About.css';

const About = () => {
  return (
    <div className="content-grid">
      <div className="tileBasic colour-primary-2">
        <h1>About Me</h1>  
          <p>A three-time scholarship awarded Irish master’s student with a proven work ethic and an ability to work as a team leader and a team player.</p>
          <p>A graduate software engineer whose passions in life are audio and technology, demonstrated by numerous projects including the thesis project “SoundShaping: a music and visual art therapy activity in augmented reality for people with neurodevelopmental disorders”.</p>
          <p>Strong programming skills with excellent communication ability and self-motivated.</p>
      </div>
    </div>
  );
};

export default About;
