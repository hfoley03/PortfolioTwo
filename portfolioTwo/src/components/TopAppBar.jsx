import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '/src/styles/components/TopAppBar.scss';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';

const TopAppBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="header">
      <nav className="desktop-menu">
        <Link to="/" className="app-name">
          HDF
        </Link>
        <ul className={menuOpen ? 'menu open' : 'menu'}>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <div className="menu-toggle" onClick={toggleMenu}>
          {menuOpen ? <XMarkIcon className="icon" /> : <Bars3Icon className="icon" />}
        </div>
      </nav>
    </div>
  );
};

export default TopAppBar;
