import React from 'react';
import {
  createAppContainer,
  createBottomTabNavigator,
  createStackNavigator,
} from 'react-navigation';

import Main from '~/pages/Main';
import Cart from '~/pages/Cart';
import ProductDetails from '~/pages/Main/Products/ProductDetails';
import Icon from 'react-native-vector-icons/FontAwesome';

const Routes = createAppContainer(
  createBottomTabNavigator(
    {
      Store: createStackNavigator(
        {
          Main,
          ProductDetails,
        },
        {
          headerBackTitleVisible: false,
          navigationOptions: {
            tabBarOptions: {
              showLabel: false,
            },
            tabBarIcon: () => <Icon name="home" size={22} color="#f06999" />,
            tabBarLabel: '',
            header: null,
          },
        },
      ),
      Cart,
    },
    {
      initialRouteName: 'Store',
    },
  ),
);

export default Routes;
