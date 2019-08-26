/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-undef */
import { DepositPage, mapDispatchToProps } from '../components/DepositPage';
import { GET_USER_DETAILS } from '../redux/actions/actionTypes';
import {
  fetchAccountDetails,
  performDeposit
} from '../redux/actions/cashierStaffAction';
import { BrowserRouter } from 'react-router-dom';
import thunk from 'redux-thunk';
import mockAxios from 'axios';
import configureMockStore from 'redux-mock-store';

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

const handleSubmit = jest.fn();

const credential = {
  type: 'savings'
};

const user = {
  token:
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjMsI…c4OX0.DfJClt28K3qIgJJWp9FMypDO0tKD1NoiNtO9YvEOvsQ'
};
const renderDepositPage = args => {
  const defaultProps = {
    fetchAccountDetails: jest.fn(),
    performDeposit: jest.fn()
  };
  const props = {
    ...defaultProps,
    ...args,
    onSubmit: { handleSubmit },
    user,
    customerDetails: {}
  };
  return mount(
    <BrowserRouter>
      <DepositPage {...props} />
    </BrowserRouter>
  );
};
const renderDepositPage1 = args => {
  const customerDetails = {
    accountnumber: 1212121212,
    accountDetails: { owner: { firstname: 'name', lastname: 'name' } }
  };
  const defaultProps = {
    fetchAccountDetails: jest.fn(),
    performDeposit: jest.fn()
  };
  const props = {
    ...defaultProps,
    ...args,
    onSubmit: { handleSubmit },
    user,
    customerDetails
  };
  return mount(
    <BrowserRouter>
      <DepositPage {...props} />
    </BrowserRouter>
  );
};

describe('without customer details in Components Tests', () => {
  it('renders create account page In template', () => {
    const wrapper = renderDepositPage();
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('form').length).toBe(1);
  });

  it(`Simulates an onChange event on select account type input`, () => {
    const wrapper = renderDepositPage();
    wrapper
      .find('input')
      .at(0)
      .simulate('change', { currentTarget: { value: 'savings' } });
  });

  it(`Simulates an onchange event on form password input`, () => {
    const wrapper = renderDepositPage();
    wrapper
      .find('input')
      .at(1)
      .simulate('change', { currentTarget: { value: 'Sanusi' } });
  });
  it(`Simulates an onchange event on form password input`, () => {
    const wrapper = renderDepositPage();
    wrapper
      .find('textarea')
      .at(0)
      .simulate('change', { currentTarget: { value: 'Sanusi' } });
  });
  it('Simulates a form submit event', () => {
    const wrapper = renderDepositPage();
    wrapper.find('form').simulate('submit');
  });

  it('should dispatch signup request action', () => {
    const dispatch = jest.fn();
    mapDispatchToProps(dispatch).fetchAccountDetails(user.token, credential);
    mapDispatchToProps(dispatch).performDeposit(user.token, credential);
  });
});

describe('without customer details in Components Tests', () => {
  it('renders create account page In template', () => {
    const wrapper = renderDepositPage1();
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('form').length).toBe(1);
  });

  it(`Simulates an onChange event on select account type input`, () => {
    const wrapper = renderDepositPage1();
    wrapper
      .find('input')
      .at(0)
      .simulate('change', { currentTarget: { value: 'savings' } });
  });

  it(`Simulates an onchange event on form password input`, () => {
    const wrapper = renderDepositPage1();
    wrapper
      .find('input')
      .at(1)
      .simulate('change', { currentTarget: { value: 'Sanusi' } });
  });

  it(`Simulates an onchange event on form password input`, () => {
    const wrapper = renderDepositPage1();
    wrapper
      .find('textarea')
      .at(0)
      .simulate('change', { currentTarget: { value: 'Sanusi' } });
  });
  it('Simulates a form submit event', () => {
    const wrapper = renderDepositPage1();
    wrapper.find('form').simulate('submit');
  });

  it('should dispatch signup request action', () => {
    const dispatch = jest.fn();
    mapDispatchToProps(dispatch).fetchAccountDetails(user.token, credential);
  });
});

describe('create account request Async action Tests', () => {
  let store;
  beforeEach(() => {
    store = mockStore({});
    jest.resetAllMocks();
  });
  afterEach(() => {
    store.clearActions();
  });
  it('Should Trigger the ADD_ACCOUNT_DETAILS dispatch function', async () => {
    const mockData = {
      data: {
        data: {
          accountNumber: 9093234532,
          type: 'savings'
        }
      }
    };
    mockAxios.get.mockResolvedValue({
      status: 200,
      data: mockData
    });

    const expectedActions = [
      { type: GET_USER_DETAILS, payload: mockData.data }
    ];
    await store.dispatch(fetchAccountDetails(credential, user.token));
    expect(store.getActions()).toEqual(expectedActions);
  });
  it('Should Trigger the ADD_ACCOUNT_DETAILS dispatch function', async () => {
    const mockData = {
      data: {
        data: {
          accountNumber: 9093234532,
          type: 'savings'
        }
      }
    };
    mockAxios.post.mockResolvedValue({
      status: 201,
      data: mockData
    });

    await store.dispatch(performDeposit(credential, user.token));
    expect(store.getActions()).toEqual([]);
  });
});
