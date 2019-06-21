import {
  INCREMENT,
  FETCH_QUOTES_FAIL,
  FETCH_QUOTES_REQUEST,
  FETCH_QUOTES_SUCCESS,
  POST_QUOTE_FAIL,
  POST_QUOTE_REQUEST,
  POST_QUOTE_SUCCESS,
  DELETE_QUOTE_FAIL,
  DELETE_QUOTE_REQUEST,
  DELETE_QUOTE_SUCCESS,
} from '../actionNames';
import { QuoteType } from 'src/types';

export const quotesReducer = (state: any = {}, action: any) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };
    case FETCH_QUOTES_REQUEST:
      return {
        ...state,
        fetchQuotes: {
          error: '',
          isFetching: true,
        },
      };
    case FETCH_QUOTES_FAIL:
      return {
        ...state,
        fetchQuotes: {
          error: action.error,
          isFetching: false,
        },
      };
    case FETCH_QUOTES_SUCCESS:
      return {
        ...state,
        quotes: action.quotes,
        fetchQuotes: {
          error: '',
          isFetching: false,
        },
      };
    case POST_QUOTE_REQUEST:
      return {
        ...state,
        postQuotes: {
          error: '',
          isFetching: true,
        },
      };
    case POST_QUOTE_FAIL:
      return {
        ...state,
        postQuotes: {
          error: action.error,
          isFetching: false,
        },
      };
    case POST_QUOTE_SUCCESS:
      return {
        ...state,
        quotes: [...state.quotes, action.newQuote],
        postQuotes: {
          error: '',
          isFetching: false,
        },
      };
    case DELETE_QUOTE_REQUEST:
      return {
        ...state,
        deleteQuotes: {
          error: '',
          isFetching: true,
        },
      };
    case DELETE_QUOTE_FAIL:
      return {
        ...state,
        deleteQuotes: {
          error: action.error,
          isFetching: false,
        },
      };
    case DELETE_QUOTE_SUCCESS:
      console.log('this is delete quote succesdss ', action.id);
      return {
        ...state,
        quotes: state.quotes.filter((quote: QuoteType) => quote.id !== action.id),
        deleteQuotes: {
          error: '',
          isFetching: false,
        },
      };
    default:
      return state;
  }
};
