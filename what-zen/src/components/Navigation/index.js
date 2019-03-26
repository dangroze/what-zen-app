import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './navigation.css';
import * as ROUTES from '../../constants/routes';
import SignOutButton from '../SignOut';
import { AuthUserContext } from '../Session';

const Navigation = () => (
<nav class="navbar" role="navigation" aria-label="main navigation">
    <AuthUserContext.Consumer>
      {authUser =>
        authUser ? <NavigationAuth /> : <NavigationNonAuth />
      }
    </AuthUserContext.Consumer>
  </nav>
);

const NavigationAuth = () => (
  <nav className = "columns">
  {/* <ul className="navbar-item  button is-primary has-text-light is-info">
    What Zen
    </ul>
    <ul className="navbar-item  button is-primary has-text-light	">
      <Link to={ROUTES.LANDING}>Landing</Link>
    </ul> */}
    <ul className="button is-small button is-info is-outlined">
      <Link to={ROUTES.HOME}>What Zen</Link>
    </ul>
    <ul>
      <SignOutButton />
    </ul>
  </nav>
);

const NavigationNonAuth = () => (

  <nav className = "columns">
    <ul className="button is-small button is-info is-outlined">
      <Link to={ROUTES.LANDING}>What Zen</Link>
    </ul>
    <ul className="button is-small button is-info is-outlined">
      <Link to={ROUTES.SIGN_IN}>Sign In</Link>
    </ul>>
  </nav>
);

export default Navigation;
