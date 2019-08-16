import React from 'react';
import EntrySideBar from '../commons/EntrySideBar';
import { Link } from 'react-router-dom';
import TopSection from '../commons/TopSection';

const SignupPage = () => {
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
      <form className="entry">
        <div className="field">
          <input
            className="entry__input"
            type="text"
            placeholder="Full Name"
            id="fullName"
            name="Full Name"
            required
          />
          <span className="helper-text"></span>
        </div>
        <div className="field">
          <input
            className="entry__input"
            type="tel"
            placeholder="Phone Number"
            name="phone Number"
            id="phoneNumber"
            required
          />
          <span className="helper-text"></span>
        </div>
        <div className="field">
          <input
            className="entry__input"
            type="email"
            placeholder="Email"
            name="Email"
            id="email"
            required
          />
          <span className="helper-text"></span>
        </div>
        <div className="field">
          <input
            className="entry__input"
            type="password"
            placeholder="Password"
            name="Password"
            id="password"
            required
          />
          <span className="helper-text"></span>
        </div>
        <button className="entry__btn btn" id="submit">
          Join in
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
};

export default SignupPage;
