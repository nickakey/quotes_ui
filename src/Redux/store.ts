import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
const middleware = [thunk];

import rootReducer from './reducers';
import { QuoteType } from '../types';

export const defaultState = {
  quotesReducer: {
    count: 0,
    fetchQuotes: {
      error: '',
      isFetching: false,
    },
    postQuotes: {
      error: '',
      isFetching: false,
    },
    quotes: [] as QuoteType[],
  },
};

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, defaultState, composeEnhancers(applyMiddleware(...middleware)));

export default store;
