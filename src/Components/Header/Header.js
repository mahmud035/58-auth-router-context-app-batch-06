import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
const Header = () => {
  return (
    <div>
      <div className="navbar bg-primary text-primary-content">
        <NavLink className="btn btn-ghost normal-case text-xl">daisyUI</NavLink>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="register">Register</NavLink>
      </div>
    </div>
  );
};

export default Header;
