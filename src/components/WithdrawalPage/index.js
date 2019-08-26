/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { Component } from 'react';
import SideNavPanel from '../commons/SideNavPanel';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import TopSection from '../commons/TopSection';
import PageTitle from '../commons/PageTitle';
import {
  fetchAccountDetails,
  performWithdrawal
} from '../../redux/actions/cashierStaffAction';

export class WithdrawalPage extends Component {
  state = {
    accountNumber: '',
    remarks: '',
    amount: '',
    isLoading: false,
    showModal: false
  };

  handleInputChange = event => {
    event.preventDefault();
    const { target } = event;
    this.setState({ [target.name]: target.value });
  };

  handleConfirmDetails = async event => {
    const { fetchAccountDetails, user } = this.props;
    event.preventDefault();
    this.setState({ isLoading: true });
    fetchAccountDetails(user.token, this.state.accountNumber);
    this.setState({ isLoading: false });
    this.setState({ showModal: true });
  };

  handleModalClose = () => {
    this.setState({ showModal: false });
  };

  render() {
    const { user, customerDetails } = this.props;

    const handlePerformDeposit = async () => {
      const { performWithdrawal, user } = this.props;
      const { accountNumber, remarks, amount } = this.state;

      this.setState({ isLoading: true });
      await performWithdrawal(user.token, accountNumber, { remarks, amount });
      this.setState({ isLoading: false });
      this.setState({ showModal: false });
    };
    return (
      <main className="container">
        <SideNavPanel user={user} />
        <div className="main-wrapper">
          <TopSection />
          <PageTitle name={'withdrawal'} />

          <form
            onSubmit={this.handleConfirmDetails}
            className="entry--closer entry"
          >
            <input
              type="number"
              className="entry__input entry__input--bigger"
              placeholder="account number"
              name="accountNumber"
              required
              onChange={this.handleInputChange}
              onBlur={this.handleInputChange}
            />
            <input
              type="number"
              className="entry__input entry-deposit__amount entry__input--bigger"
              placeholder="amount"
              name="amount"
              required
              onChange={this.handleInputChange}
              onBlur={this.handleInputChange}
            />
            <textarea
              className="entry__input entry__input--remark entry__input--bigger"
              placeholder="remark"
              name="remarks"
              required
              onChange={this.handleInputChange}
              onBlur={this.handleInputChange}
            ></textarea>
            <button className="btn entry__btn entry__input--bigger modal__open">
              withdraw
            </button>
          </form>
        </div>

        <div
          onClick={this.handleModalClose}
          className={`modal ${this.state.showModal ? 'modal-open' : ''}`}
        >
          {!this.state.loading && Object.keys(customerDetails).length > 0 ? (
            <div href="#" className="transaction-full">
              <div className="transaction__details__title">
                <h1 className="content-title__text modal__title">
                  Confirm Withdrawal
                </h1>
              </div>
              <div className="transaction-full__main modal__main">
                <div className="transaction-full__type transaction-full__section">
                  <h4 className="transaction-full__title">Account Name</h4>
                  <p className="transaction-full__body">
                    {' '}
                    {`${customerDetails.accountDetails.owner.firstname} ${customerDetails.accountDetails.owner.lastname}`}
                  </p>
                </div>
                <div className="transaction-full__type transaction-full__section">
                  <h4 className="transaction-full__title">Account Number</h4>
                  <p className="transaction-full__body">
                    {customerDetails.accountDetails.accountnumber}
                  </p>
                </div>
                <div className="transaction-full__type transaction-full__section">
                  <h4 className="transaction-full__title">Amount</h4>
                  <p className="transaction-full__body">{this.state.amount}</p>
                </div>
                <div className="transaction-amount transaction-full__section">
                  <h4 className="transaction-full__title">remark</h4>
                  <p className="transaction-full__body">{this.state.remarks}</p>
                </div>
                <div className="transaction-full__section modal-response">
                  <button
                    className="btn modal__close action-center__btn btn-secondary"
                    onClick={this.handleModalClose}
                  >
                    cancel
                  </button>
                  <button
                    onClick={handlePerformDeposit}
                    className="btn action-center__btn"
                  >
                    confirm
                  </button>
                </div>
              </div>
            </div>
          ) : (
            'loading ...'
          )}
        </div>
      </main>
    );
  }
}

WithdrawalPage.propTypes = {
  user: PropTypes.object,
  fetchAccountDetails: PropTypes.func,
  customerDetails: PropTypes.object,
  performWithdrawal: PropTypes.func
};

export const mapStateToProps = state => {
  return {
    user: state.users.userAuthDetails,
    customerDetails: state.customerDetails
  };
};

export const mapDispatchToProps = dispatch => ({
  fetchAccountDetails: (token, accountNumber) => {
    return dispatch(fetchAccountDetails(token, accountNumber));
  },
  performWithdrawal: (token, accountNumber, depositData) => {
    return dispatch(performWithdrawal(token, accountNumber, depositData));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WithdrawalPage);
