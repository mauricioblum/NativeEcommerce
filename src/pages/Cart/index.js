import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Header from '~/components/Header';
import Icon from 'react-native-vector-icons/MaterialIcons';
import CartProduct from './CartProduct';

import {
  Container,
  Content,
  CartItems,
  SubtotalWrapper,
  SubtotalText,
  SubtotalValue,
  Aux,
} from './styles';

export default function Cart() {
  const products = useSelector(state => state.cart.products);
  const subtotal = useSelector(state => state.cart.subtotal);

  return (
    <Container>
      <Header title="Cart" />
      <Content>
        <CartItems>
          {products.map(product => (
            <Aux key={product.id}>
              <CartProduct product={product} />
            </Aux>
          ))}
        </CartItems>
        <SubtotalWrapper>
          <SubtotalText>Subtotal</SubtotalText>
          <SubtotalValue>{`R$ ${subtotal}`}</SubtotalValue>
        </SubtotalWrapper>
      </Content>
    </Container>
  );
}

Cart.navigationOptions = {
  tabBarOptions: {
    showLabel: false,
  },
  tabBarIcon: () => <Icon name="shopping-cart" size={22} color="#f06999" />,
  tabBarLabel: '',
  header: null,
};
