import React from 'react';
import Header from '~/components/Header';
import ScrollNavigation from './ScrollNavigation';
import Products from './Products';
import { Container, Content } from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Main() {
  return (
    <Container>
      <Header title="GoCommerce" />
      <Content>
        <ScrollNavigation />
        <Products />
      </Content>
    </Container>
  );
}

Main.navigationOptions = {
  tabBarOptions: {
    showLabel: false,
  },
  tabBarIcon: () => <Icon name="home" size={22} color="#f06999" />,
  tabBarLabel: '',
  header: null,
};
