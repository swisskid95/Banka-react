import React from 'react';
import { hot } from 'react-hot-loader';
import '../style.css';
import { Route, Switch } from 'react-router-dom';
import LandingPage from './LandingPage';
import SignupPage from './SignupPage';
import LoginPage from './LoginPage';
import SummaryPage from './SummaryPage';
import CreateAccountPage from './CreateAccountPage';
import TransactionHistoryPage from './TransactionHistoryPage';

class App extends React.Component {
  state = {
    count: 0
  };

  render() {
    return (
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/sign-up" component={SignupPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/summary" component={SummaryPage} />
        <Route path="/create-account" component={CreateAccountPage} />
        <Route path="/history" component={TransactionHistoryPage} />
      </Switch>
    );
  }
}

export default hot(module)(App);
