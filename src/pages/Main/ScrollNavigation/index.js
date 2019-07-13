import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { CategoriesTypes } from '~/store/ducks/categories';
import { ProductsTypes } from '~/store/ducks/products';
import { ScrollContainer, Category, CategoryText } from './styles';
import { ActivityIndicator } from 'react-native';

export default function ScrollNavigation() {
  const categories = useSelector(state => state.categories.data);
  const loading = useSelector(state => state.categories.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: CategoriesTypes.GET_CATEGORIES_REQUEST });
  }, [dispatch]);

  function getProductsFromCategory(id) {
    dispatch({ type: ProductsTypes.GET_PRODUCTS_CATEGORY_REQUEST, id });
  }

  return (
    <ScrollContainer>
      {loading && <ActivityIndicator size="small" color="#fff" />}
      {!loading &&
        categories.map(category => (
          <Category
            key={category.id}
            onPress={() => getProductsFromCategory(category.id)}
          >
            <CategoryText>{category.title}</CategoryText>
          </Category>
        ))}
    </ScrollContainer>
  );
}
