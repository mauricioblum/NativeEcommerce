import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ProductsTypes } from '~/store/ducks/products';
import { useNavigation } from 'react-navigation-hooks';
import { ActivityIndicator } from 'react-native';

import { Container, Product, Image, Brand, Name, Price } from './styles';

export default function Products() {
  const products = useSelector(state => state.products.data);
  const loading = useSelector(state => state.products.loading);
  const dispatch = useDispatch();
  const { navigate } = useNavigation();

  useEffect(() => {
    dispatch({ type: ProductsTypes.GET_PRODUCTS_REQUEST });
  }, [dispatch]);

  return (
    <Container>
      {loading && <ActivityIndicator size="large" color="#f0f" />}
      {!loading &&
        products.map(product => (
          <Product
            key={product.id}
            onPress={() =>
              navigate('ProductDetails', {
                product: product,
              })
            }
          >
            <Image source={{ uri: product.image }} />
            <Name>{product.name}</Name>
            <Brand>{product.brand}</Brand>
            <Price>{`R$ ${product.price}`}</Price>
          </Product>
        ))}
    </Container>
  );
}
