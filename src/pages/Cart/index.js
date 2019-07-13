import React from 'react';
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
} from './styles';

export default function Cart() {
  const product = {
    image: 'http://picsum.photos/100',
    name: 'a',
    brand: 'a',
    price: 200,
  };

  return (
    <Container>
      <Header title="Cart" />
      <Content>
        <CartItems>
          <CartProduct product={product} />
        </CartItems>
        <SubtotalWrapper>
          <SubtotalText>Subtotal</SubtotalText>
          <SubtotalValue>R$ 1200</SubtotalValue>
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
