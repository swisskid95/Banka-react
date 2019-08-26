import React, { Component } from 'react';
import SideNavPanel from '../commons/SideNavPanel';
import TopSection from '../commons/TopSection';
import PageTitle from '../commons/PageTitle';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchAllAccountRequest } from '../../redux/actions/getAllAccountActions';
import Loader from '../commons/Loader';
export class SummaryPage extends Component {
  state = {
    isLoading: false
  };

  async componentWillMount() {
    this.setState({ isLoading: true });
    const { fetchAllAccountRequest, user } = this.props;
    await fetchAllAccountRequest(user.token, user.email);
    this.setState({ isLoading: false });
  }

  render() {
    const { accounts } = this.props.accounts;
    return (
      <main className="container">
        <SideNavPanel user={this.props.user} />
        <div className="main-wrapper">
          <TopSection />
          <PageTitle name="Account summary" />
          <div className="summary__container">
            {this.state.isLoading ? (
              <Loader />
            ) : typeof accounts === 'string' && accounts.length > 1 ? (
              <div>
                <h2>
                  Don't Have an account yet, kindly click{' '}
                  <Link to="/create-account">here</Link> to create a new account
                </h2>
              </div>
            ) : (
              accounts.map(account => (
                <div key={account.id} className="summary summary-card">
                  <div className="account-type">
                    <p className="account-type__text">{account.type}</p>
                  </div>
                  <div className="account-number">
                    <p className="account-number__text">
                      {account.accountnumber}
                    </p>
                  </div>
                  <div className="account-balance">
                    &#8358;
                    <span className="account-balance__text">
                      {account.balance.toFixed(2)}
                    </span>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </main>
    );
  }
}

SummaryPage.propTypes = {
  fetchAllAccountRequest: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  accounts: PropTypes.object.isRequired
};

export const mapStateToProps = state => {
  return {
    user: state.users.userAuthDetails,
    accounts: state.accounts
  };
};

export const mapDispatchToProps = dispatch => ({
  fetchAllAccountRequest: (token, emailAddress) => {
    return dispatch(fetchAllAccountRequest(token, emailAddress));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SummaryPage);
