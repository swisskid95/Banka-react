/* eslint-disable no-undef */
/* eslint-disable react/react-in-jsx-scope */
import { SignupPage, mapDispatchToProps } from '../components/SignupPage';
import { BrowserRouter } from 'react-router-dom';
import {
  signUpUserRequest,
  signUpUserError
} from '../redux/actions/signupActions';
import thunk from 'redux-thunk';
import mockAxios from 'axios';
import configureMockStore from 'redux-mock-store';
import { SIGN_UP_USER_ERROR, SIGN_UP_USER } from '../redux/actions/actionTypes';
import signupReducer from '../redux/reducers/authReducer';

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

const renderSignupPage = args => {
  const defaultProps = {
    signUpUserRequest: jest.fn(),
    history: {},
    match: {}
  };
  const props = { ...defaultProps, ...args };
  return mount(
    <BrowserRouter>
      <SignupPage {...props} />
    </BrowserRouter>
  );
};

describe('Login in Components Tests', () => {
  it('renders Sign page In template', () => {
    const wrapper = renderSignupPage();
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('form').length).toBe(1);
  });

  it(`Simulates an onchange event on form email input`, () => {
    const wrapper = renderSignupPage();
    wrapper
      .find('input')
      .at(0)
      .simulate('change', { currentTarget: { value: 'fola@gmail.com' } });
  });

  it(`Simulates an onchange event on form password input`, () => {
    const wrapper = renderSignupPage();
    wrapper
      .find('input')
      .at(1)
      .simulate('change', { currentTarget: { value: 'password' } });
  });
  it('Simulates a form submit event', () => {
    const wrapper = renderSignupPage();
    wrapper.find('form').simulate('submit');
  });

  it('should dispatch signup request action', () => {
    const dispatch = jest.fn();
    mapDispatchToProps(dispatch).signUpUserRequest();
  });
});

describe('sign Async action Tests', () => {
  const userCredentials = {
    email: 'someuser@gmail.com',
    password: 'randompassword',
    firstName: 'some',
    lastName: 'user'
  };

  let store;
  beforeEach(() => {
    store = mockStore({});
    jest.resetAllMocks();
  });
  afterEach(() => {
    store.clearActions();
  });

  it('Should Trigger the SIGN_UP_USER dispatch function', async () => {
    const mockData = {
      data: {
        firstName: 'some',
        lastName: 'user',
        email: 'someuser@gmail.com',
        token:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjMsI…c4OX0.DfJClt28K3qIgJJWp9FMypDO0tKD1NoiNtO9YvEOvsQ'
      }
    };

    mockAxios.post.mockResolvedValue({
      status: 200,
      data: mockData
    });
    const historyObject = {
      push: jest.fn()
    };
    await store.dispatch(signUpUserRequest(userCredentials, historyObject));

    expect(store.getActions()).toEqual([]);
  });

  it('Should Trigger the LOGIN_USER_ERROR dispatch function', async () => {
    const mockData = {
      data: {
        data: {
          message: 'invalid email/password'
        }
      }
    };

    mockAxios.post.mockResolvedValue({
      response: mockData
    });

    const expectedActions = [
      { type: SIGN_UP_USER_ERROR, payload: mockData.data.data.message }
    ];
    const { message } = mockData.data.data;
    store.dispatch(signUpUserError(message));
    expect(store.getActions()).toEqual(expectedActions);
  });
});

describe('signup Reducer Tests', () => {
  it('Should return default state', () => {
    const newState = signupReducer(undefined, {});
    expect(newState).toEqual({});
  });
  it('Should return a new state if it recieves a signup action type', () => {
    const user = {
      firstName: 'fola',
      lastName: 'abass',
      email: 'abass@gmail.com',
      token:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjMsI…c4OX0.DfJClt28K3qIgJJWp9FMypDO0tKD1NoiNtO9YvEOvsQ'
    };
    const newState = signupReducer(undefined, {
      type: SIGN_UP_USER,
      payload: user
    });
    expect(newState).toEqual({ user });
  });

  it('Should return a new state if it recieves a log in error action type', () => {
    const error = {
      message: 'invalid email/password'
    };
    const newState = signupReducer(undefined, {
      type: SIGN_UP_USER_ERROR,
      payload: error
    });
    expect(newState).toEqual({ user: error });
  });
});
