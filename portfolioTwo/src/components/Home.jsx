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
              <div className='bordered center'>
                <h1 className='center'>HARRY</h1>
              </div>
              <div className='bordered'>
                <p>Hi! I'm a software engineer from Ireland.</p>
                <p>I have a background in electronic and computer engineering</p>
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
