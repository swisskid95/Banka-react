import React from 'react';
import SideNavPanel from '../commons/SideNavPanel';
import TopSection from '../commons/TopSection';
import PageTitle from '../commons/PageTitle';

export const SummaryPage = () => {
  return (
    <main className="container">
      <SideNavPanel />
      <div className="main-wrapper">
        <TopSection />
        <PageTitle name="Account summary" />
        <div className="summary__container">
          <div className="summary summary-card">
            <div className="account-type">
              <p className="account-type__text">current account</p>
            </div>
            <div className="account-number">
              <p className="account-number__text">0005894789</p>
            </div>
            <div className="account-balance">
              &#8358;
              <span className="account-balance__text">0.00</span>
            </div>
          </div>
          <div className="summary summary-card">
            <div className="account-type">
              <p className="account-type__text">savings account</p>
            </div>
            <div className="account-number">
              <p className="account-number__text">0005894790</p>
            </div>
            <div className="account-balance">
              &#8358;
              <span className="account-balance__text">45,000.00</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SummaryPage;
