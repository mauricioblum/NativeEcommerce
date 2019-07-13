import { call, put } from 'redux-saga/effects';
import api from '~/services/api';

import CategoriesActions from '~/store/ducks/categories';

export function* getCategories() {
  try {
    const response = yield call(api.get, '/categories');
    yield put(CategoriesActions.getCategoriesSuccess(response.data));
  } catch (err) {
    yield put(CategoriesActions.getCategoriesFailure());
    console.tron.log(err.message);
  }
}
