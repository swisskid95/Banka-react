import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const SideNavPanel = () => {
  const active = { backgroundColor: '#fff', color: '#33a19d' };
  return (
    <aside className="sidebar sidebar--light">
      <span className="sidebar__close">&times;</span>
      <div className="avatar">
        <img
          className="avatar__img"
          src="/src/assets/images/avatar5.png"
          alt="user"
        />
      </div>
      <h3 className="user-name">John Doe</h3>
      <ul className="nav-container">
        <li>
          <NavLink to="/summary" activeStyle={active} className="nav" exact>
            summary
          </NavLink>
        </li>
        <li>
          <NavLink to="/history" activeStyle={active} className="nav">
            history
          </NavLink>
        </li>
        <li>
          <NavLink to="/create-account" activeStyle={active} className="nav">
            new account
          </NavLink>
        </li>
        <li>
          <Link to="/" className="nav  logout">
            sign-out
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default SideNavPanel;
