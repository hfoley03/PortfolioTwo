// src/components/About.jsx
import React from 'react';
import "/src/styles/pages/About.scss";
import MouseSquare from '/src/components/MouseSquare';
import profilePicture from '../images/profilepicture.png';
import '/src/styles/main.scss';

const About = () => {
  return (
    <div className="container">
      <div className='home-grid'>
      <div className="colour-primary-2 bordered">
          <p>My name is Harry, I am a software engineer from Ireland with a love for audio, visual and immersive technology.</p>
          <p>I have a Master’s in Music & Acoustic Engineering from Politecnico di Milano.</p>
          <p>I have a Bachelor's in Electronic & Computer Engineering from University of Galway.</p>
      </div>
      <div className="colour-primary-2 bordered">
            <img src={profilePicture} alt="profilePicture"/>
          </div>
      </div>
    </div>
  );
};

export default About;
