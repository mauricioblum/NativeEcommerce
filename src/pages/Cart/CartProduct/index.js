import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  Container,
  Image,
  Name,
  Brand,
  Price,
  Quantity,
  Remove,
} from './styles';

export default function CartProduct({ product }) {
  return (
    <Container>
      <Image source={{ uri: product.image }} />
      <Name>{product.name}</Name>
      <Brand>{product.brand}</Brand>
      <Price>{`R$ ${product.price}`}</Price>
      <Quantity />
      <Remove onClick={() => {}}>
        <Icon name="close" />
      </Remove>
    </Container>
  );
}
