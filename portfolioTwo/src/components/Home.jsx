// src/Home.jsx
import React from 'react';
import { Link } from "react-router-dom";
import Home3D from '/src/components/Home3D';
import Carousel3D from '/src/components/Carousel3D'; 
import "/src/styles/main.scss";

const Home = ({groupedProjects}) => {
    const topics = Object.keys(groupedProjects);

    return (
        <div className ="content-grid">
          <div className="home-grid">
            <div className='home-cols'>
              <div className='bordered center text-box'>
                <h1 className='center'>HARRY</h1>
                <h1 className='center'>DENIS</h1>
                <h1 className='center'>FOLEY</h1>
              </div>
              <div className='bordered center text-box'>
                <p>Hi! I'm a software engineer from Ireland with a passion for the technology behind media.</p>
                <p>My focus is on human-computer interaction, crafting immersive and meaningful experiences that connect people with technology in creative ways.</p>
                <p>Explore my past work by selecting a topic from the carousel!</p>
                </div>
            </div>
            <div className='bordered'>
              <Carousel3D/>
            </div>
          </div>
        </div>
    );
  };

export default Home;
