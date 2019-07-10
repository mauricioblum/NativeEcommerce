import React from 'react';
import { View } from 'react-native';

import { Container, Product, Image, Brand, Name, Price } from './styles';

export default function Products() {
  return (
    <Container>
      <Product>
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
