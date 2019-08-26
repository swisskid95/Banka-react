/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { toggleMenu } from '../../utils/sideBarOpen';

const EntrySideBar = ({ welcomeText, mainText, buttonText }) => {
  return (
    <aside className="sidebar">
      <div onClick={toggleMenu} className="sidebar__close">
        &times;
      </div>
      <h1 className="sidebar__title">{welcomeText}</h1>
      <p className="sidebar__text">{mainText}</p>
      <Link to={`/${buttonText}`} className="sidebar__btn">
        {buttonText}
      </Link>
    </aside>
  );
};

EntrySideBar.propTypes = {
  welcomeText: PropTypes.string.isRequired,
  mainText: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired
};

export default EntrySideBar;
