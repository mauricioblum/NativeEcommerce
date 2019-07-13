import React from 'react';

import '~/config/ReactotronConfig';

import { Provider } from 'react-redux';
import { StatusBar } from 'react-native';
import store from './store';

import Routes from '~/routes';

const App = () => (
  <Provider store={store}>
    <StatusBar barStyle="dark-content" backgroundColor="#FFF" />
    <Routes />
  </Provider>
);

export default App;
