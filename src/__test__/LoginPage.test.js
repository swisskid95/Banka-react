/* eslint-disable no-undef */
/* eslint-disable react/react-in-jsx-scope */
import { LoginPage, mapDispatchToProps } from '../components/LoginPage';
import { BrowserRouter } from 'react-router-dom';
import {
  loginUserRequest,
  logInUserError
} from '../redux/actions/loginActions';
import thunk from 'redux-thunk';
import mockAxios from 'axios';
import configureMockStore from 'redux-mock-store';
import { LOGIN_USER, LOGIN_USER_ERROR } from '../redux/actions/actionTypes';
import loginReducer from '../redux/reducers/authReducer';

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

const renderLogInPage = args => {
  const defaultProps = {
    loginUserRequest: jest.fn(),
    history: {},
    match: {}
  };
  const props = { ...defaultProps, ...args };
  return mount(
    <BrowserRouter>
      <LoginPage {...props} />
    </BrowserRouter>
  );
};

describe('Login in Components Tests', () => {
  it('renders Login page In template', () => {
    const wrapper = renderLogInPage();
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('form').length).toBe(1);
  });

  it(`Simulates an onchange event on form email input`, () => {
    const wrapper = renderLogInPage();
    wrapper
      .find('input')
      .at(0)
      .simulate('change', { currentTarget: { value: 'fola@gmail.com' } });
  });

  it(`Simulates an onchange event on form password input`, () => {
    const wrapper = renderLogInPage();
    wrapper
      .find('input')
      .at(1)
      .simulate('change', { currentTarget: { value: 'password' } });
  });
  it('Simulates a form submit event', () => {
    const wrapper = renderLogInPage();
    wrapper.find('form').simulate('submit');
  });

  it('should dispatch login request action', () => {
    const dispatch = jest.fn();
    mapDispatchToProps(dispatch).loginUserRequest();
  });
});

describe('Login Async action Tests', () => {
  const userCredentials = {
    email: 'someuser@gmail.com',
    password: 'randompassword'
  };

  let store;
  beforeEach(() => {
    store = mockStore({});
    jest.resetAllMocks();
  });
  afterEach(() => {
    store.clearActions();
  });

  it('Should Trigger the LOGIN_USER dispatch function', async () => {
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
    await store.dispatch(loginUserRequest(userCredentials, historyObject));

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
      { type: LOGIN_USER_ERROR, payload: mockData.data.data.message }
    ];
    const { message } = mockData.data.data;
    store.dispatch(logInUserError(message));
    expect(store.getActions()).toEqual(expectedActions);
  });
});

describe('Log In Reducer Tests', () => {
  it('Should return default state', () => {
    const newState = loginReducer(undefined, {});
    expect(newState).toEqual({});
  });
  it('Should return a new state if it recieves a log in action type', () => {
    const user = {
      firstName: 'fola',
      lastName: 'abass',
      email: 'abass@gmail.com',
      token:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjMsI…c4OX0.DfJClt28K3qIgJJWp9FMypDO0tKD1NoiNtO9YvEOvsQ'
    };
    const newState = loginReducer(undefined, {
      type: LOGIN_USER,
      payload: user
    });
    expect(newState).toEqual({ user });
  });

  it('Should return a new state if it recieves a log in error action type', () => {
    const error = {
      message: 'invalid email/password'
    };
    const newState = loginReducer(undefined, {
      type: LOGIN_USER_ERROR,
      payload: error
    });
    expect(newState).toEqual({ user: error });
  });
});
