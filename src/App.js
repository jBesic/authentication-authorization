import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import * as routes from './constants/routes';
import withAuthentication from './hoc/withAuthentication/withAuthentication'
import Navigation from './components/Navigation/Navigation';
import Account from './components/Account/Account';
import Home from './components/Home/Home';
import Landing from './components/Landing/Landing';
import PasswordForget from './components/PasswordForget/PasswordForget';
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SignUp/SignUp';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navigation authenticatedUser={null} />

          <main>
            <Route
              exact path={routes.LANDING}
              component={() => <Landing />}
            />
            <Route
              exact path={routes.SIGN_UP}
              component={() => <SignUp />}
            />
            <Route
              exact path={routes.SIGN_IN}
              component={() => <SignIn />}
            />
            <Route
              exact path={routes.PASSWORD_FORGET}
              component={() => <PasswordForget />}
            />
            <Route
              exact path={routes.HOME}
              component={() => <Home />}
            />
            <Route
              exact path={routes.ACCOUNT}
              component={() => <Account />}
            />
          </main>
        </div>
      </BrowserRouter>
    );
  }
}

export default withAuthentication(App);
