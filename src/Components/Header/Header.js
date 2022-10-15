import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../Context/UserContext';
import './Header.css';
const Header = () => {
  const { user } = useContext(AuthContext);
  // console.log(user);

  return (
    <div>
      <div className="navbar bg-primary text-primary-content">
        <NavLink to="/" className="btn btn-ghost normal-case text-xl">
          Awesome Auth
        </NavLink>
        <NavLink to="/" className="btn btn-ghost normal-case text-xl">
          Home
        </NavLink>
        <NavLink to="/login" className="btn btn-ghost normal-case text-xl">
          Login
        </NavLink>
        <NavLink to="register" className="btn btn-ghost normal-case text-xl">
          Register
        </NavLink>

        {user?.displayName && <span>Welcome, {user.displayName}</span>}
      </div>
    </div>
  );
};

export default Header;
