import { Dispatch } from 'redux';

import { networkDeleteQuote } from '../../utils/network';

import { DELETE_QUOTE_REQUEST, DELETE_QUOTE_SUCCESS, DELETE_QUOTE_FAIL } from '../actionNames';

const postQuote = (id: number) => async (dispatch: Dispatch) => {
  dispatch({
    type: DELETE_QUOTE_REQUEST,
  });
  try {
    await networkDeleteQuote(id);
    dispatch({
      id,
      type: DELETE_QUOTE_SUCCESS,
    });
  } catch (error) {
    dispatch({
      error,
      type: DELETE_QUOTE_FAIL,
    });
  }
};

export default postQuote;
