// src/Home.jsx
import React from 'react';
import { Link } from "react-router-dom";
import Home3D from '/src/components/Home3D';
import "/src/styles/main.scss";



  const Home = ({groupedProjects}) => {
    const topics = Object.keys(groupedProjects);

    return (
      <div className="container">
      <div className ="content-grid">
          <h1>explore topics</h1>
          <ul>
              {topics.map((topic) => (
                  <li key={topic}>
              <Link to={`/topic/${encodeURIComponent(topic)}`}>{topic}</Link>
              </li>
              ))}
          </ul>
          <Home3D/>
      </div>
      </div>
    );
  };

export default Home;
