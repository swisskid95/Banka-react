/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-undef */
import { SummaryPage, mapDispatchToProps } from '../components/SummaryPage';
import { ADD_ALL_ACCOUNTS } from '../redux/actions/actionTypes';
import { fetchAllAccountRequest } from '../redux/actions/getAllAccountActions';
import { BrowserRouter } from 'react-router-dom';
import thunk from 'redux-thunk';
import mockAxios from 'axios';
import configureMockStore from 'redux-mock-store';

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

const user = {
  token:
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjMsI…c4OX0.DfJClt28K3qIgJJWp9FMypDO0tKD1NoiNtO9YvEOvsQ',
  email: 'usermail@MediaList.com'
};

const accounts = {
  accounts: [
    {
      id: 0,
      accountNumber: 9093234532,
      type: 'savings',
      balance: 9000
    },
    {
      id: 1,
      accountNumber: 9093234532,
      type: 'savings',
      balance: 9000
    },
    {
      id: 2,
      accountNumber: 9093234532,
      type: 'savings',
      balance: 9000
    },
    {
      id: 3,
      accountNumber: 9093234532,
      type: 'savings',
      balance: 9000
    }
  ]
};
const renderSummaryPage = args => {
  const defaultProps = {
    fetchAllAccountRequest: jest.fn()
  };
  const props = { ...defaultProps, ...args, user, accounts };
  return mount(
    <BrowserRouter>
      <SummaryPage {...props} />
    </BrowserRouter>
  );
};

describe('Account summary Components Tests', () => {
  it('renders account summary page In template', () => {
    const wrapper = renderSummaryPage();
    expect(wrapper).toMatchSnapshot();
  });

  it('should dispatch signup request action', () => {
    const dispatch = jest.fn();
    mapDispatchToProps(dispatch).fetchAllAccountRequest(user.token, user.email);
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
  it('Should Trigger the ADD_ALL_ACCOUNTS dispatch function', async () => {
    const mockData = {
      data: {
        data: { ...accounts }
      }
    };
    mockAxios.get.mockResolvedValue({
      status: 200,
      data: mockData
    });

    const expectedActions = [
      { type: ADD_ALL_ACCOUNTS, payload: mockData.data }
    ];
    await store.dispatch(fetchAllAccountRequest(user.token, user.email));
    expect(store.getActions()).toEqual(expectedActions);
  });
});
