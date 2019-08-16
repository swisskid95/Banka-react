import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const EntrySideBar = ({ welcomeText, mainText, buttonText }) => {
  return (
    <aside className="sidebar">
      <div className="sidebar__close">&times;</div>
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
