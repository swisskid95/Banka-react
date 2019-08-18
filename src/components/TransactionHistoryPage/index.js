import React from 'react';
import SideNavPanel from '../commons/SideNavPanel';

export const TransactionHistoryPage = () => {
  return (
    <main className="container">
      <SideNavPanel />
      <div className="main-wrapper">
        <div className="top-section">
          <img
            src="../../src/assets/images/menu.svg"
            alt="Sidebar open button"
            className="sidebar__open"
          />
          <h1 className="logo">Banka</h1>
        </div>

        <div className="content-title">
          <h1 className="content-title__text">transaction history</h1>
        </div>
        <div className="summary-field summary-field--mini">
          <img
            className="summary__nav summary__nav--mini"
            src="../../src/assets/images/left-arrow.svg"
            alt="left arrow navigator"
          />
          <div className="summary summary--mini">
            <div className="account-type">
              <p className="summary__text--mini">current account</p>
            </div>
            <div className="account-number">
              <p className="summary__text--mini">0005894789</p>
            </div>
            <div className="summary__bal--mini">
              &#8358;
              <span>45,000.00</span>
            </div>
          </div>
          <img
            className="summary__nav summary__nav--mini"
            src="../../src/assets/images/right-arrow.svg"
            alt="right arrow navigator"
          />
        </div>
        <form className="entry-history">
          <input
            placeholder="from"
            name="from"
            type="date"
            className=" input-from entry-history__input"
          />
          <input
            placeholder="to"
            name="to"
            type="date"
            className="input-to entry-history__input"
          />
          <button className="entry-history__btn btn">filter with date</button>
        </form>
        <div className="transaction modal__open">
          <div className="transaction__col1">
            <p className="transaction__amount">45,000.00</p>
            <p className="transaction__date">Mon, 12-Mar-2019</p>
          </div>
          <div className="transaction__col2">
            <p className="transaction__details">
              Withdrawal at Banka branch Alakija branch Ibadan-Express way off
              Hunt-hill close surulere Lagos.
            </p>
          </div>
        </div>
        <div className="transaction modal__open">
          <div className="transaction__col1">
            <p className="transaction__amount">45,000.00</p>
            <p className="transaction__date">Mon, 12-Mar-2019</p>
          </div>
          <div className="transaction__col2">
            <p className="transaction__details">
              Withdrawal at Banka branch Alakija branch Ibadan-Express way off
              Hunt-hill close surulere Lagos.
            </p>
          </div>
        </div>
        <div className="transaction modal__open">
          <div className="transaction__col1">
            <p className="transaction__amount">45,000.00</p>
            <p className="transaction__date">Mon, 12-Mar-2019</p>
          </div>
          <div className="transaction__col2">
            <p className="transaction__details">
              Withdrawal at Banka branch Alakija branch Ibadan-Express way off
              Hunt-hill close surulere Lagos.
            </p>
          </div>
        </div>
        <div className="transaction modal__open">
          <div className="transaction__col1">
            <p className="transaction__amount">45,000.00</p>
            <p className="transaction__date">Mon, 12-Mar-2019</p>
          </div>
          <div className="transaction__col2">
            <p className="transaction__details">
              Withdrawal at Banka branch Alakija branch Ibadan-Express way off
              Hunt-hill close surulere Lagos.
            </p>
          </div>
        </div>
      </div>

      <div className="modal">
        <div className="transaction-full no-sidebar-page">
          <div className="transaction__details__title">
            <h1 className="content-title__text modal__title">
              transaction details
            </h1>
            <span className="modal__close transaction--close">&times;</span>
          </div>
          <div className="transaction-full__main">
            <div className="transaction-full__type transaction-full__section">
              <h4 className="transaction-full__title">transaction type</h4>
              <p className="transaction-full__body">Debit</p>
            </div>
            <div className="transaction-full__type transaction-full__section">
              <h4 className="transaction-full__title">transaction date</h4>
              <p className="transaction-full__body">Mon, 12-Mar-2019</p>
            </div>
            <div className="transaction-amount transaction-full__section">
              <h4 className="transaction-full__title">amount</h4>
              <p className="transaction-full__body">45,000.00</p>
            </div>
            <div className="transaction__remark transaction-full__section">
              <h4 className="transaction-full__title">old balance</h4>
              <p className="transaction-full__body">195,789</p>
            </div>
            <div className="transaction__remark transaction-full__section">
              <h4 className="transaction-full__title">new Balance</h4>
              <p className="transaction-full__body">150,700</p>
            </div>
            <div className="transaction__remark transaction-full__section">
              <h4 className="transaction-full__title">remark</h4>
              <p className="transaction-full__body">
                Withdrawal at Banka branch Alakija branch Ibadan-Express way off
                Hunt-hill close surulere Lagos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default TransactionHistoryPage;
