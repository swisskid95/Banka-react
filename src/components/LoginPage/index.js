/* eslint-disable no-console */
import React, { Component } from 'react';
import EntrySideBar from '../commons/EntrySideBar';
import TopSection from '../commons/TopSection';
import PageTitle from '../commons/PageTitle';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loginUserRequest } from '../../redux/actions/loginActions';

export class LoginPage extends Component {
  state = {
    email: '',
    password: '',
    isLoading: false
  };

  handleInputChange = event => {
    event.preventDefault();
    const { target } = event;

    this.setState({ [target.name]: target.value });
  };

  handleSubmit = async event => {
    event.preventDefault();
    this.setState({ isLoading: true });
    await this.props.loginUserRequest(this.state, this.props.history);
    this.setState({ isLoading: false });
  };

  render() {
    const { isLoading } = this.state;
    return (
      <main className="container__entry">
        <EntrySideBar
          welcomeText="HELLO, Friend"
          mainText="Not yet a member, click on the button below to Join in the benefits."
          buttonText="sign-up"
        />
        <TopSection />
        <PageTitle name={'login'} />
        <form className="entry" onSubmit={this.handleSubmit}>
          <div className="field">
            <input
              className="entry__input"
              type="email"
              placeholder="Email"
              name="email"
              required
              onChange={this.handleInputChange}
            />
            <span className="helper-text"></span>
          </div>
          <div className="field">
            <input
              className="entry__input"
              type="password"
              placeholder="Password"
              name="password"
              required
              onChange={this.handleInputChange}
            />
            <span className="helper-text"></span>
          </div>
          <button
            className={`entry__btn btn ${isLoading ? 'btn-secondary' : ''}`}
          >
            {isLoading ? 'Loading...' : 'Login'}
          </button>
        </form>
        <div className="switch">
          <p>
            Not yet a member?
            <Link to="/sign-up" className="switch__link">
              sign-up
            </Link>
          </p>
        </div>
      </main>
    );
  }
}

LoginPage.propTypes = {
  loginUserRequest: PropTypes.func,
  history: PropTypes.any
};

export const mapDispatchToProps = dispatch => {
  return {
    loginUserRequest: async (loginCredentials, history) =>
      dispatch(await loginUserRequest(loginCredentials, history))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(LoginPage);
