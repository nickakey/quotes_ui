import { Dispatch } from 'redux';

import { networkFetchQuotes } from '../../utils/network';

import { FETCH_QUOTES_REQUEST, FETCH_QUOTES_SUCCESS, FETCH_QUOTES_FAIL } from '../actionNames';

/*
 * This is a THUNK. It is a redux pattern for dealing with asynchronicty in Actions.
 */

const fetchQuotes = () => async (dispatch: Dispatch) => {
  dispatch({
    type: FETCH_QUOTES_REQUEST,
  });
  try {
    const quotes = await networkFetchQuotes();
    dispatch({
      quotes,
      type: FETCH_QUOTES_SUCCESS,
    });
  } catch (error) {
    dispatch({
      error,
      type: FETCH_QUOTES_FAIL,
    });
  }
};

export default fetchQuotes;
