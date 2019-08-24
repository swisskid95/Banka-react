import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import PageNotFound from './PageNotFound';
import LandingPage from './LandingPage';
import SignupPage from './SignupPage';
import LoginPage from './LoginPage';
import SummaryPage from './SummaryPage';
import CreateAccountPage from './CreateAccountPage';
import { ToastContainer } from 'react-toastify';
// import PrivateRoute from './PrivateRoute';

class App extends React.Component {
  render() {
    return (
      <Router>
        <ToastContainer />
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/sign-up" component={SignupPage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/summary" component={SummaryPage} />
          <Route path="/create-account" component={CreateAccountPage} />
          <Route component={PageNotFound} />
        </Switch>
      </Router>
    );
  }
}

export default hot(module)(App);
