import {
  BrowserRouter as Router,
  Route
  } from 'react-router-dom';
import React, { Component } from 'react';

import './App.css';

import Navigation from '../Navigation/index';
import LandingPage from '../Landing';
import SignUpPage from '../SignUp';
import SignInPage from '../SignIn';
import HomePage from '../Home';

import { AuthUserContext, withAuthorization } from '../Session';
import { withAuthentication } from '../Session';
import * as ROUTES from '../../constants/routes';

import Chat from "../Chat"

class App extends Component {

  render() {
    return (
      <AuthUserContext.Consumer>
        {authUser => (
          <Router>
            <div className="App">
              {authUser ? <p style={{color: "teal"}}>Hello {authUser.email.split("@")[0]}!</p> : null}
              <Navigation/>
              <Route exact path={ROUTES.LANDING} component={LandingPage} />
              <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
              <Route path={ROUTES.SIGN_IN} component={SignInPage} />
              <Route path={ROUTES.HOME} component={HomePage}/>
            </div>
          </Router>
        )}
      </AuthUserContext.Consumer>
    );
  }
}

export default withAuthentication(App);
