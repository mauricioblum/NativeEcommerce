import React from 'react';
import { View } from 'react-native';
import { useNavigationParam } from 'react-navigation-hooks';

import {
  Container,
  Content,
  Product,
  Image,
  Name,
  Brand,
  Price,
  CartButton,
  CartButtonText,
  HeaderText,
} from './styles';

export default function ProductDetails() {
  const product = useNavigationParam('product');
  return (
    <Container>
      <Content>
        <Product>
          <Image source={{ uri: product.image }} />
          <Name>{product.name}</Name>
          <Brand>{product.brand}</Brand>
          <Price>{`R$ ${product.price}`}</Price>
          <CartButton onClick={() => {}}>
            <CartButtonText>Add to cart</CartButtonText>
          </CartButton>
        </Product>
      </Content>
    </Container>
  );
}

ProductDetails.navigationOptions = {
  headerTitle: <HeaderText>Product Details</HeaderText>,
};
