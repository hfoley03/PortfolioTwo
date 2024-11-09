import React from 'react';
import '/src/styles/TopAppBar.css';

const TopAppBar = () => {
  return (
    <header className="top-app-bar">
      <div className="top-app-bar__logo">
        <h1>Harry Denis Foley</h1>
      </div>
      <nav className="top-app-bar__nav">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
};

export default TopAppBar;
