import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './containers/appContainer';

import { Provider } from "react-redux";
import store from './store';

import logo from './components/logo.svg';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

const supportsHistory = 'pushState' in window.history;

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter basename="/" forceRefrech={!supportsHistory}>
      <App/>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'));
