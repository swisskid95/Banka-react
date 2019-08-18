import React from 'react';
import { hot } from 'react-hot-loader';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import PageNotFound from './PageNotFound';
import LandingPage from './LandingPage';
import SignupPage from './SignupPage';
import LoginPage from './LoginPage';
import SummaryPage from './SummaryPage';
import CreateAccountPage from './CreateAccountPage';
import TransactionHistoryPage from './TransactionHistoryPage';
import { ToastContainer } from 'react-toastify';

class App extends React.Component {
  state = {
    count: 0
  };

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
          <Route path="/history" component={TransactionHistoryPage} />
          <Route component={PageNotFound} />
        </Switch>
      </Router>
    );
  }
}

export default hot(module)(App);
