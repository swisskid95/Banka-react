import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const TopSection = ({ entry }) => {
  return (
    <div className="top-section">
      <img
        src="/src/assets/images/menu.svg"
        alt="Sidebar open button"
        className="sidebar__open"
      />
      {entry ? (
        <Link to="/" className="logo">
          <h1 className="logo">Banka</h1>
        </Link>
      ) : (
        <Link to={'/summary'} className="logo">
          <h1 className="logo">Banka</h1>
        </Link>
      )}
    </div>
  );
};

TopSection.propTypes = {
  entry: PropTypes.bool
};

export default TopSection;
