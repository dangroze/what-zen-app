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
import AboutPage from '../About'
import { AuthUserContext } from '../Session';
import { withAuthentication } from '../Session';
import * as ROUTES from '../../constants/routes';

class App extends Component {

  render() {
    return (
      <AuthUserContext.Consumer>
        {authUser => (
          <Router>
            <div className="App">
              <Navigation/>
              <Route exact path={ROUTES.LANDING} component={LandingPage} />
              <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
              <Route path={ROUTES.SIGN_IN} component={SignInPage} />
              <Route path={ROUTES.HOME} component={HomePage}/>
              <Route path={ROUTES.ABOUT} component={AboutPage}/>
            </div>
          </Router>
        )}
      </AuthUserContext.Consumer>
    );
  }
}

export default withAuthentication(App);
