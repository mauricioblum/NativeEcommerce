import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CartTypes } from '~/store/ducks/cart';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  Container,
  Info,
  Image,
  Name,
  Brand,
  Price,
  Quantity,
  Remove,
} from './styles';

export default function CartProduct({ product }) {
  const [qty, setQty] = useState('1');

  const dispatch = useDispatch();

  function removeFromCart(p) {
    dispatch({ type: CartTypes.REMOVE_FROM_CART, removedProduct: p });
  }

  return (
    <Container>
      <Image source={{ uri: product.image }} />
      <Info>
        <Name>{product.name}</Name>
        <Brand>{product.brand}</Brand>
        <Price>{`R$ ${product.price}`}</Price>
      </Info>

      <Quantity onChangeText={text => setQty(text)} value={qty} />
      <Remove onPress={() => removeFromCart(product)}>
        <Icon name="close" />
      </Remove>
    </Container>
  );
}
