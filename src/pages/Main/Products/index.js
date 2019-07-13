import React from 'react';
import { View } from 'react-native';
import { useNavigation } from 'react-navigation-hooks';

import { Container, Product, Image, Brand, Name, Price } from './styles';

export default function Products() {
  const { navigate } = useNavigation();

  return (
    <Container>
      <Product
        onPress={() =>
          navigate('ProductDetails', {
            product: {
              image: 'https://picsum.photos/160/260',
              name: 'Product Name',
              brand: 'Adidas',
              price: 400,
            },
          })
        }
      >
        <Image source={{ uri: 'https://picsum.photos/160/260' }} />
        <Name>Product Name</Name>
        <Brand>Adidas</Brand>
        <Price>R$ 400</Price>
      </Product>

      <Product>
        <Image source={{ uri: 'https://picsum.photos/160/260' }} />
        <Name>Product Name</Name>
        <Brand>Nike</Brand>
        <Price>R$ 250,34</Price>
      </Product>

      <Product>
        <Image source={{ uri: 'https://picsum.photos/160/260' }} />
        <Name>Product Name That its long</Name>
        <Brand>Nike</Brand>
        <Price>R$ 250,34</Price>
      </Product>
    </Container>
  );
}
