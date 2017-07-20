// @flow

import { combineReducers, createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import * as reducers from '../reducers';


export const Store = (onComplete) => {

  const store = createStore(
    combineReducers(reducers),
    applyMiddleware(thunk, createLogger({
      predicate: (getState, action) => process.env.NODE_ENV === 'development',
      collapsed: true,
      duration: true,
    }))
  );

  if (onComplete) onComplete();
  return store;
};

export default Store;