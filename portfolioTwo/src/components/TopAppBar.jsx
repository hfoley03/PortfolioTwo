import React from 'react';
import { Link } from 'react-router-dom';
import '/src/styles/components/TopAppBar.scss';


const TopAppBar = () => {
    return (
      <header className="top-app-bar">
        <div className="app-name">Harry Foley</div>
        <nav>
          <ul className="nav-links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  };

export default TopAppBar;
