// src/App.jsx
// import React from 'react';

import '/src/App.scss';

import { HashRouter as Router, Routes, Route } from 'react-router-dom';
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
      <div className="App">
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
    </Router>
  );
};


export default App;