import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export const SideNavPanel = ({ user }) => {
  const active = { backgroundColor: '#fff', color: '#33a19d' };
  return (
    <aside className="sidebar sidebar--light">
      <span className="sidebar__close">&times;</span>
      <div className="avatar">
        <img
          className="avatar__img"
          src="https://res.cloudinary.com/swisskid95/image/upload/v1566613597/Banka-assets/defaultAvatar_roxuye.png"
          alt="user"
        />
      </div>
      <h3 className="user-name">{`${user.firstname} ${user.lastname}`}</h3>
      <ul className="nav-container">
        <li>
          <NavLink to="/summary" activeStyle={active} className="nav" exact>
            summary
          </NavLink>
        </li>
        <li>
          <NavLink to="/create-account" activeStyle={active} className="nav">
            new account
          </NavLink>
        </li>
        <li>
          <Link to="/login" className="nav  logout">
            sign-out
          </Link>
        </li>
      </ul>
    </aside>
  );
};

SideNavPanel.propTypes = {
  user: PropTypes.object,
  logout: PropTypes.func
};

export default SideNavPanel;
