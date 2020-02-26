import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = props => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <NavLink to="/">
        <div className="navbar-brand">Navbar</div>
      </NavLink>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <NavLink to="/">
              <div className="nav-link">
                Home <span className="sr-only">(current)</span>
              </div>
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink to="/sign-up">
              <div className="nav-link">Sign Up</div>
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink to="/create-client">
              <div className="nav-link">Add New Client</div>
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
