import { call, put } from 'redux-saga/effects';
import api from '~/services/api';

import ProductsActions from '~/store/ducks/products';

export function* getProducts() {
  try {
    const response = yield call(api.get, '/products');
    yield put(ProductsActions.getProductsSuccess(response.data));
  } catch (err) {
    yield put(ProductsActions.getProductsFailure());
    console.tron.log(err.message);
  }
}

export function* getProductsCategory({ id }) {
  try {
    const response = yield call(api.get, `/category_products/${id}`);
    yield put(
      ProductsActions.getProductsCategorySuccess(response.data.products),
    );
  } catch (err) {
    yield put(ProductsActions.getProductsCategoryFailure());
    console.tron.log(err.message);
  }
}
