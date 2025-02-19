import React from 'react';
import MouseSquare from '/src/components/MouseSquare';
import { InstagramEmbed,LinkedInEmbed } from 'react-social-media-embed';
import GithubLogo from  '/src/assets/githubWhite.svg';
import LinkedInLogo from  '/src/assets/linkedinWhite.svg';


const Contact = () => {
  return (
    <div className="content-grid">
      <div className='home-grid'>
      <div className="text-box bordered">
        <h1>Contact</h1>  
          <h3 className='center'>hfoley03@gmail.com</h3>

          <a href="https://github.com/hfoley03" target="_blank" rel="noopener noreferrer">
             <img src={GithubLogo} alt="Github logo" height={125}/>
          </a>

          <a href="https://www.linkedin.com/in/harry-foley-a63593b1/" target="_blank" rel="noopener noreferrer">
             <img src={LinkedInLogo} alt="LinkedIn logo" height={125} />
          </a>

        </div>
        <div className="text-box">
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <InstagramEmbed url="https://www.instagram.com/aik_hifi/" width={328} />
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
