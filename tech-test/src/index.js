import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import reducers from './reducers';
import middlewares from './middlewares';

import HomePage from './components/homepage';

const combinedMiddlewares = [thunk, ...middlewares, createLogger()];

const store = createStore(
  reducers,
  applyMiddleware(...combinedMiddlewares)
);

render(
  <Provider store={store}>
    <HomePage />
  </Provider>,
  document.getElementById('root')
);

