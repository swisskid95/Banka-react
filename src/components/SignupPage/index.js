import React, { Component } from 'react';
import EntrySideBar from '../commons/EntrySideBar';
import { Link } from 'react-router-dom';
import TopSection from '../commons/TopSection';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { signUpUserRequest } from '../../redux/actions/signupActions';
import * as validate from '../../utils/validation';

export class SignupPage extends Component {
  state = {
    firstName: '',
    lastName: '',
    phoneNumber: '',
    password: '',
    isLoading: false,
    disableSubmit: true
  };

  handleValidation = event => {
    const { target } = event;

    let unDisableSubmit;

    unDisableSubmit = !validate.isEmpty(target);

    if (target.name === 'fullName') {
      unDisableSubmit = !validate.isValidFullName(target);
    }
    if (target.name === 'password') {
      unDisableSubmit = !validate.meetSpecifiedLength(target, 7, 100);
    }
    if (target.name === 'phoneNumber') {
      unDisableSubmit = !validate.matchNigeriaPhoneNumber(target);
    }
    if (target.name === 'email') {
      unDisableSubmit = !validate.isValidEmailAddress(target);
    }

    this.setState({ disableSubmit: unDisableSubmit });
  };

  handleInputChange = event => {
    event.preventDefault();

    this.handleValidation(event);

    const { target } = event;

    if (target.name === 'fullName') {
      const [firstName, lastName] = target.value.split(' ');
      if (firstName && lastName) {
        this.setState({ firstName, lastName });
      }
    } else {
      this.setState({ [target.name]: target.value });
    }
  };

  handleSubmit = async event => {
    event.preventDefault();
    this.setState({ isLoading: true });
    await this.props.signUpUserRequest(this.state, this.props.history);
    this.setState({ isLoading: false });
  };

  render() {
    const { disableSubmit, isLoading } = this.state;
    return (
      <main className="container__entry">
        <EntrySideBar
          welcomeText="Welcome back"
          mainText="Already a member, click on the button below to Sign in to continue
                your benefits."
          buttonText="login"
        />
        <TopSection />
        <div className="content-title">
          <h1 className="content-title__text">sign up</h1>
        </div>
        <form onSubmit={this.handleSubmit} className="entry">
          <div className="field">
            <input
              className="entry__input"
              type="text"
              placeholder="Full Name"
              id="fullName"
              name="fullName"
              required
              onChange={this.handleInputChange}
              onBlur={this.handleValidation}
            />
            <span className="helper-text"></span>
          </div>
          <div className="field">
            <input
              className="entry__input"
              type="tel"
              placeholder="Phone Number"
              name="phoneNumber"
              id="phoneNumber"
              required
              onChange={this.handleInputChange}
              onBlur={this.handleValidation}
            />
            <span className="helper-text"></span>
          </div>
          <div className="field">
            <input
              className="entry__input"
              type="email"
              placeholder="Email"
              name="email"
              id="email"
              required
              onChange={this.handleInputChange}
              onBlur={this.handleValidation}
            />
            <span className="helper-text"></span>
          </div>
          <div className="field">
            <input
              className="entry__input"
              type="password"
              placeholder="Password"
              name="password"
              id="password"
              required
              onChange={this.handleInputChange}
              onBlur={this.handleValidation}
            />
            <span className="helper-text"></span>
          </div>
          <button
            disabled={disableSubmit || isLoading}
            className={`entry__btn btn ${
              isLoading || disableSubmit ? 'btn-secondary' : ''
            }`}
            id="submit"
          >
            {isLoading ? 'Loading...' : 'Sign up'}
          </button>
        </form>
        <div className="switch">
          <p>
            Already a member?
            <Link to="/login" className="switch__link">
              Login
            </Link>
          </p>
        </div>
      </main>
    );
  }
}

SignupPage.propTypes = {
  signUpUserRequest: PropTypes.func,
  history: PropTypes.any
};

export const mapDispatchToProps = dispatch => {
  return {
    signUpUserRequest: async (signupCredentials, history) =>
      dispatch(await signUpUserRequest(signupCredentials, history))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(SignupPage);
