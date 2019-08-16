import React from 'react';
import EntrySideBar from '../commons/EntrySideBar';
import TopSection from '../commons/TopSection';
import PageTitle from '../commons/PageTitle';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  return (
    <main className="container__entry">
      <EntrySideBar
        welcomeText="HELLO, Friend"
        mainText="Not yet a member, click on the button below to Join in the benefits."
        buttonText="sign-up"
      />
      <TopSection />
      <PageTitle name={'login'} />
      <form className="entry">
        <div className="field">
          <input
            className="entry__input"
            type="email"
            placeholder="Email"
            name="email"
            required
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
          />
          <span className="helper-text"></span>
        </div>
        <button className="entry__btn btn">Login</button>
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
};

export default LoginPage;
