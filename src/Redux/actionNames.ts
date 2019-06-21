/*
 * It is Redux best practice to have action names be consts instead of strings, Incorrectly typed strings fail silently. Incorrectly typed consts throw errors
 */

export const INCREMENT = 'INCREMENT';
export const FETCH_QUOTES_REQUEST = 'FETCH_QUOTES_REQUEST';
export const FETCH_QUOTES_FAIL = 'FETCH_QUOTES_FAIL';
export const FETCH_QUOTES_SUCCESS = 'FETCH_QUOTES_SUCCESS';

export const POST_QUOTE_REQUEST = 'POST_QUOTE_REQUEST';
export const POST_QUOTE_SUCCESS = 'POST_QUOTE_SUCCESS';
export const POST_QUOTE_FAIL = 'POST_QUOTE_FAIL';

export const DELETE_QUOTE_REQUEST = 'DELETE_QUOTE_REQUEST';
export const DELETE_QUOTE_SUCCESS = 'DELETE_QUOTE_SUCCESS';
export const DELETE_QUOTE_FAIL = 'DELETE_QUOTE_FAIL';
