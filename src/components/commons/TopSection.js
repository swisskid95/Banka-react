/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { toggleMenu } from '../../utils/sideBarOpen';

const TopSection = ({ entry }) => {
  return (
    <div className="top-section">
      <img
        src="https://res.cloudinary.com/swisskid95/image/upload/v1566575800/Banka-assets/menu_ldfqrk.svg"
        alt="Sidebar open button"
        className="sidebar__open"
        onClick={toggleMenu}
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
