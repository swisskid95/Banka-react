/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { toggleMenu } from '../../utils/sideBarOpen';

export const SideNavPanel = ({ user }) => {
  const active = { backgroundColor: '#fff', color: '#33a19d' };
  return (
    <aside className="sidebar sidebar--light">
      <span onClick={toggleMenu} className="sidebar__close">
        &times;
      </span>
      <div className="avatar">
        <img
          className="avatar__img"
          src="https://res.cloudinary.com/swisskid95/image/upload/v1566613597/Banka-assets/defaultAvatar_roxuye.png"
          alt="user"
        />
      </div>
      <h3 className="user-name">{`${user.firstname} ${user.lastname}`}</h3>
      <ul className="nav-container">
        {user.type === 'staff' ? (
          <>
            <li>
              <NavLink to="/deposit" activeStyle={active} className="nav">
                deposit
              </NavLink>
            </li>
            <li>
              <NavLink to="/withdraw" activeStyle={active} className="nav">
                withdraw
              </NavLink>
            </li>
          </>
        ) : (
          ''
        )}
        <li>
          <NavLink to="/summary" activeStyle={active} className="nav">
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
  user: PropTypes.object
};

export default SideNavPanel;
