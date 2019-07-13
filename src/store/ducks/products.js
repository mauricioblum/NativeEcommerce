import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* Types & Action Creators */

const { Types, Creators } = createActions({
  getProductsRequest: null,
  getProductsSuccess: ['data'],
  getProductsFailure: null,
  getProductsCategoryRequest: ['id'],
  getProductsCategorySuccess: ['data'],
  getProductsCategoryFailure: null,
});

export const ProductsTypes = Types;
export default Creators;

export const INITIAL_STATE = Immutable({
  data: [],
  loading: true,
});

export const reducer = createReducer(INITIAL_STATE, {
  [Types.GET_PRODUCTS_SUCCESS]: (state, { data }) =>
    state.merge({
      data,
      loading: false,
    }),
  [Types.GET_PRODUCTS_FAILURE]: state =>
    state.merge({
      loading: false,
    }),
  [Types.GET_PRODUCTS_CATEGORY_REQUEST]: state =>
    state.merge({
      loading: true,
    }),
  [Types.GET_PRODUCTS_CATEGORY_SUCCESS]: (state, { data }) =>
    state.merge({
      data,
      loading: false,
    }),
  [Types.GET_PRODUCTS_CATEGORY_FAILURE]: state =>
    state.merge({
      loading: false,
    }),
});
