import React from 'react';
import { Link } from 'react-router-dom';

const TopSection = () => {
  return (
    <div className="top-section">
      <img
        src="images/menu.svg"
        alt="Sidebar open button"
        className="sidebar__open"
      />
      <Link to="/" className="logo">
        <h1 className="logo">Banka</h1>
      </Link>
    </div>
  );
};

export default TopSection;
