import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CartTypes } from '~/store/ducks/cart';
import { useNavigationParam, useNavigation } from 'react-navigation-hooks';

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
  const cart = useSelector(state => state.cart.products);
  const dispatch = useDispatch();
  const { navigate, goBack } = useNavigation();

  function addProductToCart(item) {
    console.tron.log(cart);
    const newCart = [...cart];
    newCart.push(item);
    dispatch({ type: CartTypes.ADD_TO_CART, products: newCart });
    goBack();
    navigate('Cart');
  }

  return (
    <Container>
      <Content>
        <Product>
          <Image source={{ uri: product.image }} />
          <Name>{product.name}</Name>
          <Brand>{product.brand}</Brand>
          <Price>{`R$ ${product.price}`}</Price>
          <CartButton onPress={() => addProductToCart(product)}>
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
