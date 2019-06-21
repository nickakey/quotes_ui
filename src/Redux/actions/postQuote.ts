import { Dispatch } from 'redux';

import { networkPostQuote } from '../../utils/network';

import { POST_QUOTE_REQUEST, POST_QUOTE_SUCCESS, POST_QUOTE_FAIL } from '../actionNames';

/*
 * This is a THUNK. It is a redux pattern for dealing with asynchronicty in Actions.
 */

const postQuote = (text: string, author: string) => async (dispatch: Dispatch) => {
  dispatch({
    type: POST_QUOTE_REQUEST,
  });
  try {
    const { id } = await networkPostQuote(text, author);

    dispatch({
      newQuote: { text, author, id },
      type: POST_QUOTE_SUCCESS,
    });
  } catch (error) {
    dispatch({
      error,
      type: POST_QUOTE_FAIL,
    });
  }
};

export default postQuote;
