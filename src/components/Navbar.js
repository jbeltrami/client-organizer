import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, withRouter } from 'react-router-dom';
import { signOut } from '../actions/authActions';

const Navbar = ({ history }) => {
  const authObj = useSelector(state => state.firebase.auth);
  const authId = authObj.uid;
  const dispatch = useDispatch();

  const handleSignOut = e => {
    e.preventDefault();
    dispatch(signOut());
    history.push('/');
  };

  const renderAuthButtons = () => {
    if (!authId)
      return (
        <>
          <li className="nav-item ml-auto">
            <NavLink to="/sign-in">
              <div className="nav-link">Sign In</div>
            </NavLink>
          </li>
          <li className="nav-item ml-auto">
            <NavLink to="/sign-up">
              <div className="nav-link">Sign Up</div>
            </NavLink>
          </li>
        </>
      );

    return (
      <li className="nav-item ml-auto">
        <div className="nav-link" onClick={handleSignOut}>
          Logout
        </div>
      </li>
    );
  };

  const renderNavButtons = auth => {
    if (auth)
      return (
        <>
          <li className="nav-item">
            <NavLink to="/clients">
              <div className="nav-link">Clients</div>
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink to="/create-client">
              <div className="nav-link">Add New Client</div>
            </NavLink>
          </li>
        </>
      );

    return <></>;
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <NavLink to="/clients">
        <div className="navbar-brand">{authObj && authObj.email}</div>
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
        <ul className="navbar-nav">{renderNavButtons(authId)}</ul>

        <ul className="navbar-nav ml-auto">{renderAuthButtons(authId)}</ul>
      </div>
    </nav>
  );
};

export default withRouter(Navbar);
