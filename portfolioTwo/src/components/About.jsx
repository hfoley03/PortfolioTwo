// src/components/About.jsx
import React from 'react';
import "/src/styles/pages/About.scss";
import MouseSquare from '/src/components/MouseSquare';
import profilePicture from '../images/profilepicture.png';
import '/src/styles/main.scss';

const About = () => {
  return (
    <div className="content-grid">
      <div className='home-grid'>
      <div className="text-box bordered">
      <h1>About</h1>  
          <p>My name is Harry, I am a computer engineer from Ireland with a love for audio, visual and immersive technology.</p>
          <p>I have a Master’s in <b>Music & Acoustic Engineering</b> from Politecnico di Milano, Italy.</p>
          <p>And I have a Bachelor's in <b>Electronic & Computer Engineering</b> from University of Galway, Ireland</p>
          <p>I am looking to advance my career as an engineer while focusing on my love for immersive experiences, the catalyst for this interest being my thesis project <i><b>SoundShaping:</b> an augmented reality therapy for people with neurodevelopmental conditions.</i></p>
          <p>My areas of interest include:</p>
          <ul>
            <li>Interaction Design</li>
            <li>Extended Reality</li>
            <li>Computer Graphics</li>
            <li>User Testing</li>
            <li>Research & Development</li>
          </ul>
      </div>
      <div className='home-cols'>
        <div className="colour-primary-2 center">
          <img src={profilePicture} alt="profilePicture"/>
        </div>
        <div className='text-box bordered'>
          <h1>Skills</h1>
            <p><b>Programming:</b> 7 years coding experience, languages include  C++, Unity C#, JavaScirpt, Java, Kotlin, Matlab.</p>
            <p><b>Software Development Lifecycle:</b> Professional and academic experience with documentation, Jira and Git in an Agile Environment.</p>
            <p><b>Communication & Presentation:</b> Able to communicate technical subjects in an understandable way. Comfortable presenting to different audiences (professors, clients, stakeholders).</p>

        </div>
      </div>
      </div>
    </div>
  );
};

export default About;
