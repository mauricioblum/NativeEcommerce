import { all, takeLatest } from 'redux-saga/effects';
import { CategoriesTypes } from '~/store/ducks/categories';
import { getCategories } from './categories';
import { ProductsTypes } from '~/store/ducks/products';
import { getProducts, getProductsCategory } from './products';

export default function* rootSaga() {
  yield all([
    takeLatest(CategoriesTypes.GET_CATEGORIES_REQUEST, getCategories),
    takeLatest(ProductsTypes.GET_PRODUCTS_REQUEST, getProducts),
    takeLatest(
      ProductsTypes.GET_PRODUCTS_CATEGORY_REQUEST,
      getProductsCategory,
    ),
  ]);
}
