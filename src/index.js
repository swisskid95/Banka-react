import React from 'react';
import ReactDOM from 'react-dom';
import '@babel/polyfill';
import { Provider } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';
import configureStore from './redux/configureStore';
import './style.css';

const store = configureStore();

import App from './components/App';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
