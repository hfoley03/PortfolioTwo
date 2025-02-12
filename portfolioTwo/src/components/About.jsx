// src/components/About.jsx
import React from 'react';
import "/src/styles/pages/About.scss";
import MouseSquare from '/src/components/MouseSquare';

const About = () => {
  return (
    <div className="content-grid">
      <div className="generic-tile colour-primary-2 bordered">
        <h1 className='title'>About Me</h1>  
          <p>My name is Harry, I am a software engineer from Ireland with a love for audio, visual and immersive technology.</p>
          <p>I have a Master’s in Music & Acoustic Engineering from Politecnico di Milano.</p>
          <p>I have a Bachelor's in Electronic & Computer Engineering from University of Galway.</p>
          <MouseSquare />
      </div>
    </div>
  );
};

export default About;
