import React from 'react';
import Header from "~/components/Header";
import ScrollNavigation from './ScrollNavigation';
import Products from './Products';
import { Container } from "./styles";

export default function Main() {
  return (
    <Container>
      <Header title="GoCommerce" />
      <ScrollNavigation />
      <Products />
    </Container>
  );
}
