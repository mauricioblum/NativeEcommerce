import { all, takeLatest } from 'redux-saga/effects';
import { CategoriesTypes } from '~/store/ducks/categories';
import { getCategories } from './categories';

export default function* rootSaga() {
  yield all([
    takeLatest(CategoriesTypes.GET_CATEGORIES_REQUEST, getCategories),
  ]);
}
