// src/App.jsx
// import React from 'react';

import '/src/App.scss';

import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import TopAppBar from './components/TopAppBar';
import TopicPage from "./components/TopicPage";
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';


import groupProjectsByTopic from './utils/GroupProjectsByTopic';
import projects from './data/simpleProjects.json';

const App = () => {
  const groupedProjects = groupProjectsByTopic(projects);

  return (
    <Router>
      <TopAppBar />
      {/* Move useLocation inside the Router */}
      <AppContent groupedProjects={groupedProjects} />
    </Router>
  );
};

const AppContent = ({ groupedProjects }) => {
  const location = useLocation();
  const isTopicPage = location.pathname.includes("topic");

  return (
    <div className={`App ${isTopicPage ? "topic-page-layout" : ""}`}>
      <Routes>
        <Route path="/" element={<Home groupedProjects={groupedProjects} />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/topic/:topicName"
          element={<TopicPage groupedProjects={groupedProjects} />}
        />
      </Routes>
    </div>
  );
};

export default App;