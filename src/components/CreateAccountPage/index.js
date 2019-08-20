import React, { Component } from 'react';
import SideNavPanel from '../commons/SideNavPanel';
import TopSection from '../commons/TopSection';
import { connect } from 'react-redux';
import { createAccountRequest } from '../../redux/actions/createAccountActions';
import PropTypes from 'prop-types';
export class CreateAccountPage extends Component {
  state = {
    type: '',
    accountPurpose: '',
    isLoading: false
  };

  handleInputChange = event => {
    const { target } = event;
    this.setState({ [target.name]: target.value });
  };

  handleSubmit = async event => {
    event.preventDefault();
    const user = JSON.parse(localStorage.getItem('user'));
    this.setState({ isLoading: true });
    await this.props.createAccountRequest(user.token, this.state);
    this.setState({ isLoading: false });
  };

  render() {
    const { isLoading } = this.state;
    return (
      <main className="container">
        <SideNavPanel />
        <div className="main-wrapper">
          <TopSection />
          <div className="content-title">
            <h1 className="content-title__text">create account</h1>
          </div>
          <form onSubmit={this.handleSubmit} className="entry--closer entry">
            <select
              name="type"
              onBlur={this.handleInputChange}
              className="entry__input--account-type entry__input entry__input--bigger"
            >
              <option value="current">current</option>
              <option value="savings">savings</option>
            </select>
            <input
              type="text"
              onChange={this.handleInputChange}
              className="entry__input entry__input--bigger"
              name="accountPurpose"
              placeholder="account purpose"
            />
            <button
              className={`btn entry__btn entry__input--bigger ${
                isLoading ? 'btn-secondary' : ''
              }`}
            >
              {isLoading ? 'Loading...' : 'create account'}
            </button>
          </form>
        </div>
      </main>
    );
  }
}

CreateAccountPage.propTypes = {
  createAccountRequest: PropTypes.func.isRequired
};

export const mapDispatchToProps = dispatch => {
  return {
    createAccountRequest: async (token, data) =>
      dispatch(await createAccountRequest(token, data))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(CreateAccountPage);
