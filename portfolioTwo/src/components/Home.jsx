// src/Home.jsx
import React from 'react';
import { Link } from "react-router-dom";
import SpinningCube from "/src/SpinningCube";
import ProjectTile from "/src/components/ProjectTile";

  const Home = ({groupedProjects}) => {
    const topics = Object.keys(groupedProjects);

    return (
    <div className ="content-grid">
        <h1>explore topics</h1>
        <ul>
            {topics.map((topic) => (
                <li key={topic}>
            <Link to={`/topic/${encodeURIComponent(topic)}`}>{topic}</Link>
            </li>
            ))}
        </ul>
    </div>
    );
  };

export default Home;
