/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-undef */
import {
  CreateAccountPage,
  mapDispatchToProps
} from '../components/CreateAccountPage';
import { ADD_ACCOUNT_DETAILS } from '../redux/actions/actionTypes';
import { createAccountRequest } from '../redux/actions/createAccountActions';
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
const renderCreateAccountPage = args => {
  const defaultProps = {
    createAccountRequest: jest.fn()
  };
  const props = { ...defaultProps, ...args, onSubmit: { handleSubmit }, user };
  return mount(
    <BrowserRouter>
      <CreateAccountPage {...props} />
    </BrowserRouter>
  );
};

describe('Create account in Components Tests', () => {
  it('renders create account page In template', () => {
    const wrapper = renderCreateAccountPage();
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('form').length).toBe(1);
  });

  it(`Simulates an onChange event on select account type input`, () => {
    const wrapper = renderCreateAccountPage();
    wrapper
      .find('select')
      .at(0)
      .simulate('change', { currentTarget: { value: 'savings' } });
  });

  it(`Simulates an onchange event on form password input`, () => {
    const wrapper = renderCreateAccountPage();
    wrapper
      .find('input')
      .at(0)
      .simulate('change', { currentTarget: { value: 'Sanusi' } });
  });
  it('Simulates a form submit event', () => {
    const wrapper = renderCreateAccountPage();
    wrapper.find('form').simulate('submit');
  });

  it('should dispatch signup request action', () => {
    const dispatch = jest.fn();
    mapDispatchToProps(dispatch).createAccountRequest(user.token, credential);
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
    mockAxios.post.mockResolvedValue({
      status: 201,
      data: mockData
    });

    const expectedActions = [
      { type: ADD_ACCOUNT_DETAILS, payload: mockData.data }
    ];
    await store.dispatch(createAccountRequest(credential, user.token));
    expect(store.getActions()).toEqual(expectedActions);
  });
});
