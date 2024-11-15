// src/App.jsx
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import TopAppBar from './components/TopAppBar';
import TopicPage from "./components/TopicPage";
import Home from './components/Home';
import About from './components/About';

import groupProjectsByTopic from './utils/GroupProjectsByTopic';
import projects from './data/simpleProjects.json';

const App = () => {
  const groupedProjects = groupProjectsByTopic(projects);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home groupedProjects={groupedProjects} />} />
        <Route path="/topic/:topicName" element={<TopicPage groupedProjects={groupedProjects} />} />
      </Routes>
    </Router>
  );
};

export default App;