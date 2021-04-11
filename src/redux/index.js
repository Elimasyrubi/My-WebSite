import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createPromise } from 'redux-promise-middleware';
import reduxInmutableStateInvariant from 'redux-immutable-state-invariant';

//app reducers
import {appReducer} from './App/AppReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

export const suffixes = {
    START: '_START',
    DONE: '_DONE',
    ERROR: '_ERROR',
  };
  
  const middlewares = [
    thunk,
    reduxInmutableStateInvariant(),
    createPromise({
      promiseTypeSuffixes: Object.keys(suffixes),
    }),
  ];

  
const reducers = {
    appReducer,
  };
  const store = createStore(
    combineReducers({ ...reducers }),
    {},
    (composeEnhancers && composeEnhancers(applyMiddleware(...middlewares)))
    || applyMiddleware(...middlewares),
  );
  
  export const dispatcher = store.dispatch;
  export default store;