import { combineReducers } from 'redux';
import { quotesReducer } from './main';
import { defaultState } from '../store';

const rootReducer = combineReducers<typeof defaultState>({
  quotesReducer,
});

export default rootReducer;
