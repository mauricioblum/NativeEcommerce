import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CartTypes } from '~/store/ducks/cart';
import Icon from 'react-native-vector-icons/FontAwesome';
import NumericInput from 'react-native-numeric-input';

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
  const [qty, setQty] = useState(1);

  const dispatch = useDispatch();

  function removeFromCart(p) {
    dispatch({ type: CartTypes.REMOVE_FROM_CART, removedProduct: p });
  }

  function handleQuantity(p, amount) {
    setQty(amount);
    dispatch({
      type: CartTypes.CART_CHANGE_QUANTITY,
      product: p,
      qty: parseFloat(amount),
    });
  }

  return (
    <Container>
      <Image source={{ uri: product.image }} />
      <Info>
        <Name>{product.name}</Name>
        <Brand>{product.brand}</Brand>
        <Price>{`R$ ${product.price}`}</Price>
      </Info>

      <NumericInput
        type="up-down"
        value={qty}
        minValue={1}
        maxValue={99}
        valueType="integer"
        step={1}
        onChange={value => handleQuantity(product, value)}
        totalHeight={35}
        totalWidth={50}
      />

      <Remove onPress={() => removeFromCart(product)}>
        <Icon name="close" />
      </Remove>
    </Container>
  );
}
