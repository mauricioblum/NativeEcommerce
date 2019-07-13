import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* Types & Action Creators */

const { Types, Creators } = createActions({
  getCategoriesRequest: null,
  getCategoriesSuccess: ['data'],
  getCategoriesFailure: null,
});

export const CategoriesTypes = Types;
export default Creators;

export const INITIAL_STATE = Immutable({
  data: [],
  loading: true,
});

export const reducer = createReducer(INITIAL_STATE, {
  [Types.GET_CATEGORIES_SUCCESS]: (state, { data }) =>
    state.merge({
      data,
      loading: false,
    }),
});
