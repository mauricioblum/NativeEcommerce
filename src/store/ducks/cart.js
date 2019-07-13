import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* Types & Action Creators */

const { Types, Creators } = createActions({
  addToCart: ['products'],
  removeFromCart: ['removedProduct'],
  cartChangeQuantity: ['product', 'qty'],
});

export const CartTypes = Types;
export default Creators;

export const INITIAL_STATE = Immutable({
  products: [],
  subtotal: 0,
  loading: true,
});

export const reducer = createReducer(INITIAL_STATE, {
  [Types.ADD_TO_CART]: (state, { products }) =>
    state.merge({
      products,
      subtotal: products.map(product => product.price).reduce((a, b) => a + b),
      loading: false,
    }),
  [Types.REMOVE_FROM_CART]: (state, { removedProduct }) =>
    state.merge({
      subtotal: state.subtotal - removedProduct.price,
      products: state.products.filter(
        product => product.id !== removedProduct.id,
      ),
      loading: false,
    }),
  [Types.CART_CHANGE_QUANTITY]: (state, { product, qty }) =>
    state.merge({
      subtotal: state.subtotal,
      loading: false,
    }),
});
