import React from 'react';
import PropTypes from 'prop-types';

const PageTitle = ({ name }) => {
  return (
    <div className="content-title">
      <h1 className="content-title__text">{name}</h1>
    </div>
  );
};

PageTitle.propTypes = {
  name: PropTypes.string.isRequired
};

export default PageTitle;
