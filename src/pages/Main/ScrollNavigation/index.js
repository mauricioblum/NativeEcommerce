import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { CategoriesTypes } from '~/store/ducks/categories';
import { ScrollContainer, Category, CategoryText } from './styles';

export default function ScrollNavigation() {
  const categories = useSelector(state => state.categories.data);
  const loading = useSelector(state => state.categories.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: CategoriesTypes.GET_CATEGORIES_REQUEST });
  }, [dispatch]);

  return (
    <ScrollContainer>
      {!loading &&
        categories.map(category => (
          <Category key={category.id}>
            <CategoryText>{category.title}</CategoryText>
          </Category>
        ))}
    </ScrollContainer>
  );
}
